/**
 * paging
 *
 * @param {Array} items=[] Array of objects to page
 * @param {Number} pagesize=3 the size of the array returned in every page
 * @returns {Object} Functions to allow the paging
 */
export default function paging(items = [], pagesize = 3) {
  const listLength = items.length;
  const lastIndex = listLength - 1;
  let begining = 0;
  let end = pagesize;

  function start() {
    return items.slice(0, pagesize);
  }

  function listEnd() {
    return items.slice(listLength - pagesize, listLength);
  }

  function next() {
    if (begining + pagesize >= lastIndex - 1) {
      return listEnd();
    }

    begining += pagesize;
    end += pagesize;
    return items.slice(begining, end);
  }


  function previous() {
    if (begining - pagesize <= 0) {
      return start();
    }

    begining -= pagesize;
    end -= pagesize;
    return items.slice(begining, end);
  }

  function getItems() {
    return items;
  }

  return {
    start,
    next,
    previous,
    getItems,
  };
}
