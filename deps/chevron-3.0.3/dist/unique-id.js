'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = uniqueID;
/* istanbul ignore file */

function uniqueID() {
  function chr4() {
    return Math.random().toString(16).slice(-4);
  }
  return chr4() + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + '-' + chr4() + chr4() + chr4();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaXF1ZS1pZC5qcyJdLCJuYW1lcyI6WyJ1bmlxdWVJRCIsImNocjQiLCJNYXRoIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBRXdCQSxRO0FBRnhCOztBQUVlLFNBQVNBLFFBQVQsR0FBbUI7QUFDaEMsV0FBU0MsSUFBVCxHQUFlO0FBQ2IsV0FBT0MsS0FBS0MsTUFBTCxHQUFjQyxRQUFkLENBQXVCLEVBQXZCLEVBQTJCQyxLQUEzQixDQUFpQyxDQUFDLENBQWxDLENBQVA7QUFDRDtBQUNELFNBQU9KLFNBQVNBLE1BQVQsR0FDTCxHQURLLEdBQ0NBLE1BREQsR0FFTCxHQUZLLEdBRUNBLE1BRkQsR0FHTCxHQUhLLEdBR0NBLE1BSEQsR0FJTCxHQUpLLEdBSUNBLE1BSkQsR0FJVUEsTUFKVixHQUltQkEsTUFKMUI7QUFLRCIsImZpbGUiOiJ1bmlxdWUtaWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZSAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1bmlxdWVJRCgpe1xuICBmdW5jdGlvbiBjaHI0KCl7XG4gICAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKC00KTtcbiAgfVxuICByZXR1cm4gY2hyNCgpICsgY2hyNCgpICtcbiAgICAnLScgKyBjaHI0KCkgK1xuICAgICctJyArIGNocjQoKSArXG4gICAgJy0nICsgY2hyNCgpICtcbiAgICAnLScgKyBjaHI0KCkgKyBjaHI0KCkgKyBjaHI0KCk7XG59XG4iXX0=