"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseUri;
/* istanbul ignore file */

function parseUri(str) {
  var o = parseUri.options,
      m = o.parser[o.strictMode ? "strict" : "loose"].exec(str),
      uri = {},
      i = 14;

  while (i--) {
    uri[o.key[i]] = m[i] || "";
  }uri[o.q.name] = {};
  uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
    if ($1) uri[o.q.name][$1] = $2;
  });

  return uri;
}

parseUri.options = {
  strictMode: false,
  key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
  q: {
    name: "queryKey",
    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
  },
  parser: {
    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcnNlLXVyaS5qcyJdLCJuYW1lcyI6WyJwYXJzZVVyaSIsInN0ciIsIm8iLCJvcHRpb25zIiwibSIsInBhcnNlciIsInN0cmljdE1vZGUiLCJleGVjIiwidXJpIiwiaSIsImtleSIsInEiLCJuYW1lIiwicmVwbGFjZSIsIiQwIiwiJDEiLCIkMiIsInN0cmljdCIsImxvb3NlIl0sIm1hcHBpbmdzIjoiOzs7OztrQkFFd0JBLFE7QUFGeEI7O0FBRWUsU0FBU0EsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDcEMsTUFBSUMsSUFBTUYsU0FBU0csT0FBbkI7QUFBQSxNQUNFQyxJQUFNRixFQUFFRyxNQUFGLENBQVNILEVBQUVJLFVBQUYsR0FBZSxRQUFmLEdBQTBCLE9BQW5DLEVBQTRDQyxJQUE1QyxDQUFpRE4sR0FBakQsQ0FEUjtBQUFBLE1BRUVPLE1BQU0sRUFGUjtBQUFBLE1BR0VDLElBQU0sRUFIUjs7QUFLQSxTQUFPQSxHQUFQO0FBQVlELFFBQUlOLEVBQUVRLEdBQUYsQ0FBTUQsQ0FBTixDQUFKLElBQWdCTCxFQUFFSyxDQUFGLEtBQVEsRUFBeEI7QUFBWixHQUVBRCxJQUFJTixFQUFFUyxDQUFGLENBQUlDLElBQVIsSUFBZ0IsRUFBaEI7QUFDQUosTUFBSU4sRUFBRVEsR0FBRixDQUFNLEVBQU4sQ0FBSixFQUFlRyxPQUFmLENBQXVCWCxFQUFFUyxDQUFGLENBQUlOLE1BQTNCLEVBQW1DLFVBQVNTLEVBQVQsRUFBYUMsRUFBYixFQUFpQkMsRUFBakIsRUFBcUI7QUFDdEQsUUFBSUQsRUFBSixFQUFRUCxJQUFJTixFQUFFUyxDQUFGLENBQUlDLElBQVIsRUFBY0csRUFBZCxJQUFvQkMsRUFBcEI7QUFDVCxHQUZEOztBQUlBLFNBQU9SLEdBQVA7QUFDRDs7QUFFRFIsU0FBU0csT0FBVCxHQUFtQjtBQUNqQkcsY0FBWSxLQURLO0FBRWpCSSxPQUFLLENBQUMsUUFBRCxFQUFVLFVBQVYsRUFBcUIsV0FBckIsRUFBaUMsVUFBakMsRUFBNEMsTUFBNUMsRUFBbUQsVUFBbkQsRUFBOEQsTUFBOUQsRUFBcUUsTUFBckUsRUFBNEUsVUFBNUUsRUFBdUYsTUFBdkYsRUFBOEYsV0FBOUYsRUFBMEcsTUFBMUcsRUFBaUgsT0FBakgsRUFBeUgsUUFBekgsQ0FGWTtBQUdqQkMsS0FBSztBQUNIQyxVQUFRLFVBREw7QUFFSFAsWUFBUTtBQUZMLEdBSFk7QUFPakJBLFVBQVE7QUFDTlksWUFBUSx5SUFERjtBQUVOQyxXQUFRO0FBRkY7QUFQUyxDQUFuQiIsImZpbGUiOiJwYXJzZS11cmkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZSAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYXJzZVVyaShzdHIpIHtcbiAgdmFyIG8gICA9IHBhcnNlVXJpLm9wdGlvbnMsXG4gICAgbSAgID0gby5wYXJzZXJbby5zdHJpY3RNb2RlID8gXCJzdHJpY3RcIiA6IFwibG9vc2VcIl0uZXhlYyhzdHIpLFxuICAgIHVyaSA9IHt9LFxuICAgIGkgICA9IDE0O1xuXG4gIHdoaWxlIChpLS0pIHVyaVtvLmtleVtpXV0gPSBtW2ldIHx8IFwiXCI7XG5cbiAgdXJpW28ucS5uYW1lXSA9IHt9O1xuICB1cmlbby5rZXlbMTJdXS5yZXBsYWNlKG8ucS5wYXJzZXIsIGZ1bmN0aW9uKCQwLCAkMSwgJDIpIHtcbiAgICBpZiAoJDEpIHVyaVtvLnEubmFtZV1bJDFdID0gJDI7XG4gIH0pO1xuXG4gIHJldHVybiB1cmk7XG59XG5cbnBhcnNlVXJpLm9wdGlvbnMgPSB7XG4gIHN0cmljdE1vZGU6IGZhbHNlLFxuICBrZXk6IFtcInNvdXJjZVwiLFwicHJvdG9jb2xcIixcImF1dGhvcml0eVwiLFwidXNlckluZm9cIixcInVzZXJcIixcInBhc3N3b3JkXCIsXCJob3N0XCIsXCJwb3J0XCIsXCJyZWxhdGl2ZVwiLFwicGF0aFwiLFwiZGlyZWN0b3J5XCIsXCJmaWxlXCIsXCJxdWVyeVwiLFwiYW5jaG9yXCJdLFxuICBxOiAgIHtcbiAgICBuYW1lOiAgIFwicXVlcnlLZXlcIixcbiAgICBwYXJzZXI6IC8oPzpefCYpKFteJj1dKik9PyhbXiZdKikvZ1xuICB9LFxuICBwYXJzZXI6IHtcbiAgICBzdHJpY3Q6IC9eKD86KFteOlxcLz8jXSspOik/KD86XFwvXFwvKCg/OigoW146QF0qKSg/OjooW146QF0qKSk/KT9AKT8oW146XFwvPyNdKikoPzo6KFxcZCopKT8pKT8oKCgoPzpbXj8jXFwvXSpcXC8pKikoW14/I10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS8sXG4gICAgbG9vc2U6ICAvXig/Oig/IVteOkBdKzpbXjpAXFwvXSpAKShbXjpcXC8/Iy5dKyk6KT8oPzpcXC9cXC8pPygoPzooKFteOkBdKikoPzo6KFteOkBdKikpPyk/QCk/KFteOlxcLz8jXSopKD86OihcXGQqKSk/KSgoKFxcLyg/OltePyNdKD8hW14/I1xcL10qXFwuW14/I1xcLy5dKyg/Ols/I118JCkpKSpcXC8/KT8oW14/I1xcL10qKSkoPzpcXD8oW14jXSopKT8oPzojKC4qKSk/KS9cbiAgfVxufTtcbiJdfQ==