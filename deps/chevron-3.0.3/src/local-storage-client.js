export function getLocalStorageItem(item) {
  var result = localStorage.getItem(item);
  if (result === 'undefined' || result === 'null') {
    result = null;
  }
  return result;
}
