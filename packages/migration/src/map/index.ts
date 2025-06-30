/* eslint-disable @typescript-eslint/no-require-imports */
import { runner } from "@src/utils/runner"

/* eslint-disable no-console */
const inquirer = require('inquirer').default
const { spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

const SOURCE_DIR = path.join(__dirname)

const main = async () => {
  const files = fs.readdirSync(SOURCE_DIR)
    .filter((file: any) => file.endsWith('.ts') && !file.startsWith('index.'))

  if (files.length === 0) {
    console.log('No migration scripts found in source directory.')
    process.exit(1)
  }

  const { selectedScript } = await inquirer.prompt([
    {
      choices: files,
      message: 'Choose a migration script to run:',
      name: 'selectedScript',
      type: 'list',
    },
  ])

  const fullPath = path.join(SOURCE_DIR, selectedScript)

  const child = spawn('tsx', ['-r', 'tsconfig-paths/register', fullPath], {
    cwd: process.cwd(),
    stdio: 'inherit',
  })

  child.stdout?.pipe(process.stdout)
  child.stderr?.pipe(process.stderr)
}

runner(main)