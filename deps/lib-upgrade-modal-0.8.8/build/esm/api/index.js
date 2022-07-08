import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import Chevron from '@lp/chevron';
import { Config } from '@lp/config';

var request = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(method, path, body, params) {
    var chevron, config;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Chevron.getInstance can not be on the module scope since this
            // is used in SSR with the marketing site.
            chevron = Chevron.getInstance();
            config = Config.getInstance();
            _context.next = 4;
            return chevron.http({
              method: method,
              url: "".concat(config.get('LP_HOST')).concat(path),
              body: body,
              params: params,
              headers: {
                'Content-Type': 'application/json'
              }
            });

          case 4:
            return _context.abrupt("return", _context.sent);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function request(_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();

export var getPlanChangeData = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(params) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return request('GET', '/api/v1/billing/change-plan', null, params);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPlanChangeData(_x5) {
    return _ref2.apply(this, arguments);
  };
}();
export default {
  getPlanChangeData: getPlanChangeData
};