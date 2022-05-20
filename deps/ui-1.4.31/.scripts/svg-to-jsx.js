const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

const attrMap = new Map([
  [/:x/g, 'X'],
  [/:h/g, 'H'],
  [/fill-rule/g, 'fillRule'],
])

if (process.argv.length <= 3) {
  console.log('incorrect pattern');
  console.log('node scripts/svg-to-jsx.js path/to/src/dir path/to/trgt/dir [size: int]');
  process.exit(-1);
}

const pathArg = process.argv[2];
const newPathArg = process.argv[3];
const newPathDir = path.join(__dirname, '../', newPathArg);
if (!fs.existsSync(newPathDir)) {
  console.log('new dir did not exist creating it', newPathDir);
  fs.mkdirSync(newPathDir);
}

let ADJUST_SIZE = 72;
if (process.argv.length <= 5 && !isNaN(parseInt(process.argv[4]))) {
  ADJUST_SIZE = parseInt(process.argv[4]);
}

let loadingStr, completed, skipped, total;
function printProgress() {
  // process.stdout.clearLine();
  // process.stdout.cursorTo(0);
  // process.stdout.write(`${loadingStr}|c:${completed}|s:${skipped}|t:${completed+skipped}/${total}`);
  console.log(`${loadingStr}|c:${completed}|s:${skipped}|t:${completed + skipped}/${total}`);
}

function strReplaceAt(str, index, replacement) {
  return str.substr(0, index) + replacement + str.substr(index + replacement.length);
}

function handleFile(items, i, cb) {
  const fileName = items[i];
  const name = fileName.split('.')[0];
  const capName = name.charAt(0).toUpperCase() + name.slice(1);
  const newFileName = `${capName}.jsx`;
  const currentIndex = i;
  if (fileName.indexOf('.svg') > -1) {
    fs.readFile(`${pathArg}/${fileName}`, 'utf8', function(err, data) {
      if (err) throw err;
      // lets make sure we are only translating svgs
      // and that we dont move over one that already exists
      // once they are created they maybe edited to manage props
      // hoping to avoid the above...
      if (data.indexOf('<svg') === 0 && !fs.existsSync(path.join(newPathDir, newFileName))) {
        // create new jsx file structure
        let newFile = `import React from 'react'; import PropTypes from 'prop-types'; export default function ${capName}({width, height, ...props}) {return (${data});}`;

        // fix react prop issues
        for (var [key, value] of attrMap) {
          newFile = newFile.replace(key, value);
        }

        // adjust heights
        const widthIndex = newFile.indexOf('width="') + 7;
        const width = newFile.substr(widthIndex, 2);
        const heightIndex = newFile.indexOf('height="') + 8;
        const height = newFile.substr(heightIndex, 2);
        newFile = newFile.replace(`"${width}"`, '{width}');
        newFile = newFile.replace(`"${height}"`, '{height}');

        //viewBox needs to be grown to a ADJUST_SIZExADJUST_SIZE box...
        if (height > ADJUST_SIZE || width > ADJUST_SIZE) {
          throw new Error('The height or width of your svg is too large to resize');
        }
        const viewBox = newFile.match(/viewBox=".*"/)[0];
        const vbValues = viewBox
          .split('"')[1]
          .split(' ')
          .map(x => parseInt(x));
        //min-x and width vbValues [0] and [2]
        //min-y and height vbValues [1] and [3]
        let [minX, minY, vbWidth, vbHeight] = vbValues;
        const widthAdjustment = (ADJUST_SIZE - vbWidth) / 2;
        const heightAdjustment = (ADJUST_SIZE - vbHeight) / 2;
        const newViewBox = [
          minX - widthAdjustment,
          minY - heightAdjustment,
          ADJUST_SIZE,
          ADJUST_SIZE,
        ];
        newFile = newFile.replace(viewBox, `viewBox="${newViewBox.join(' ')}"`);

        // spread props
        newFile = newFile.replace('>', ' {...props}>');

        // add propTypes
        newFile = `${newFile}\n\n${capName}.propTypes={width:PropTypes.number,height:PropTypes.number}\n\n${capName}.defaultProps={width:${ADJUST_SIZE},height:${ADJUST_SIZE}}`;

        // format
        const formattedFile = prettier.format(newFile, {
          printWidth: 100,
          singleQuote: true,
          trailingComma: 'all',
          parser: 'babel',
        });

        // write file
        fs.writeFile(path.join(newPathDir, newFileName), formattedFile, function(err) {
          if (err) throw err;
          completed = completed + 1;
          loadingStr = strReplaceAt(loadingStr, currentIndex, 'c');
          printProgress();
          cb();
        });
      } else {
        skipped = skipped + 1;
        loadingStr = strReplaceAt(loadingStr, currentIndex, 's');
        printProgress();
        cb();
      }
    });
  } else {
    skipped = skipped + 1;
    loadingStr = strReplaceAt(loadingStr, currentIndex, 's');
    printProgress();
    cb();
  }
}

function handleComplete() {
  if (skipped + completed === total) {
    fs.readdir(newPathDir, function(err, items) {
      let indexFile;
      let exportFiles = [];

      for (let j = 0; j < items.length; j++) {
        let item = items[j];
        let name = item.split('.')[0];
        if (name === 'index') {
          continue;
        }
        exportFiles.push(name);
        indexFile =
          j === 0
            ? `import ${name} from './${name}'`
            : `${indexFile}\nimport ${name} from './${name}'`;
      }

      indexFile = `${indexFile}\n\nexport default {\n${exportFiles
        .map(exportFile => `${exportFile}: '${exportFile}'`)
        .join(',\n')}\n};`;
      indexFile = `${indexFile}\n\nexport const propsEnum = [\n${exportFiles
        .map(exportFile => `'${exportFile}'`)
        .join(',\n')}\n];`;
      indexFile = `${indexFile}\n\nexport {\n${exportFiles.join(',\n')}\n};`;

      const formattedFile = prettier.format(indexFile, {
        printWidth: 100,
        singleQuote: true,
        trailingComma: 'all',
        parser: 'babel',
      });

      fs.writeFile(path.join(newPathDir, 'index.js'), formattedFile, function(err) {
        if (err) throw err;
        console.log('All done');
      });
    });
  }
}

fs.readdir(pathArg, function(err, items) {
  loadingStr = '.'.repeat(items.length);
  completed = 0;
  skipped = 0;
  total = items.length;

  printProgress();

  for (let i = 0; i < items.length; i++) {
    handleFile(items, i, handleComplete);
  }
});
