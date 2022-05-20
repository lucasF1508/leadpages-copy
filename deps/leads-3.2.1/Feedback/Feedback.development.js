'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Tooltip = _interopDefault(require('../Tooltip'));
var OutsideClickHandler = _interopDefault(require('../OutsideClickHandler'));
var Input = _interopDefault(require('../Input'));
var Button = _interopDefault(require('../Button'));
var LoadingButton = _interopDefault(require('../LoadingButton'));
var LoadingState = require('../LoadingState');
var IconButton = _interopDefault(require('../IconButton'));
var Select = _interopDefault(require('../Select'));
var Option = _interopDefault(require('../Option'));
var PropTypes = _interopDefault(require('prop-types'));
var React = require('react');
var React__default = _interopDefault(React);
var emotion = require('emotion');
var Theme = require('../Theme');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var defineProperty = _defineProperty;

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var objectSpread = _objectSpread;

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var runtime = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = module.exports;

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);
});

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

var runtimeModule = runtime;

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

var regenerator = runtimeModule;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

var asyncToGenerator = _asyncToGenerator;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var assertThisInitialized = _assertThisInitialized;

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

var possibleConstructorReturn = _possibleConstructorReturn;

var getPrototypeOf = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;
});

var setPrototypeOf = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;
});

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

var inherits = _inherits;

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

var taggedTemplateLiteral = _taggedTemplateLiteral;

function _templateObject4() {
  var data = taggedTemplateLiteral(["\n  margin-bottom: 15px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row-reverse;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral(["\n  height: 170px;\n  resize: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex: 0 0 175px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var bodyClassName = emotion.css(_templateObject());
var textareaClassName = emotion.css(_templateObject2());
var footerClassName = emotion.css(_templateObject3());
var helpClassName = emotion.css(_templateObject4());

var Feedback = function Feedback(props) {
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    className: bodyClassName
  }, React__default.createElement(Input, {
    value: props.feedback,
    inputSelfClass: textareaClassName,
    inputComponent: "textarea",
    placeholder: "Share feedback or report a bug",
    onChange: props.setFeedback
  })), React__default.createElement("div", {
    className: helpClassName
  }, "Need Help?", ' ', React__default.createElement("a", {
    href: "https://support.leadpages.net/hc/en-us/requests/new",
    rel: "noopener noreferrer",
    target: "_blank"
  }, "Contact Support")), React__default.createElement("div", {
    className: footerClassName
  }, React__default.createElement(Button, {
    onClick: props.goToFeedbackType
  }, "Next")));
};
Feedback.propTypes = {
  feedback: PropTypes.string.isRequired,
  setFeedback: PropTypes.func.isRequired,
  goToFeedbackType: PropTypes.func.isRequired
};

function _templateObject3$1() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row-reverse;\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$1() {
  var data = taggedTemplateLiteral(["\n  margin-top: 30px;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex: 0 0 175px;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var bodyClassName$1 = emotion.css(_templateObject$1());
var productCategoryClassName = emotion.css(_templateObject2$1());
var footerClassName$1 = emotion.css(_templateObject3$1());

var FeedbackType = function FeedbackType(props) {
  var loadingState = props.errorMessage ? LoadingState.LOADING_STATES.error : LoadingState.LOADING_STATES.success;

  if (props.isLoading) {
    loadingState = LoadingState.LOADING_STATES.loading;
  }

  return React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    className: bodyClassName$1
  }, React__default.createElement(Select, {
    outerLabel: "Feedback Type",
    onChange: props.setFeedbackType,
    placeholderText: "Feedback Type"
  }, props.feedbackTypeOptions.map(function (option) {
    return React__default.createElement(Option, {
      key: option,
      primaryText: option,
      value: option,
      selected: props.feedbackType === option
    });
  })), React__default.createElement(Select, {
    outerLabel: "Product Category",
    onChange: props.setFeedbackProductCategory,
    placeholderText: "Product Category",
    className: productCategoryClassName
  }, props.feedbackProductCategoryOptions.map(function (option) {
    return React__default.createElement(Option, {
      key: option,
      primaryText: option,
      value: option,
      selected: props.feedbackProductCategory === option
    });
  }))), React__default.createElement("div", {
    className: footerClassName$1
  }, React__default.createElement(LoadingButton, {
    disabled: props.isLoading,
    loadingState: loadingState,
    onClick: props.submitFeedback
  }, "Send Message"), React__default.createElement(IconButton, {
    noBackground: true,
    onClick: function onClick() {
      return props.setCurrentView('feedback');
    },
    icon: "left_arrow"
  })));
};
FeedbackType.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  feedbackType: PropTypes.string,
  feedbackProductCategory: PropTypes.string,
  setFeedbackType: PropTypes.func.isRequired,
  setFeedbackProductCategory: PropTypes.func.isRequired,
  feedbackTypeOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  feedbackProductCategoryOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  setCurrentView: PropTypes.func.isRequired,
  submitFeedback: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
};
FeedbackType.defaultProps = {
  feedbackType: null,
  feedbackProductCategory: null,
  errorMessage: ''
};

function _templateObject2$2() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  flex-flow: row-reverse;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  flex: 0 0 175px;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var bodyHeading = Theme.typographyDefs.bodyHeading,
    bodyDefault = Theme.typographyDefs.bodyDefault;
var bodyClassName$2 = emotion.css(_templateObject$2());
var footerClassName$2 = emotion.css(_templateObject2$2());

var FeedbackSuccess = function FeedbackSuccess() {
  return React__default.createElement(React.Fragment, null, React__default.createElement("div", {
    className: bodyClassName$2
  }, React__default.createElement("h5", {
    style: objectSpread({}, bodyHeading)
  }, "Feedback sent!"), React__default.createElement("p", {
    style: objectSpread({}, bodyDefault)
  }, "Thanks so much for sharing your", React__default.createElement("br", null), "thoughts on how we can improve.")), React__default.createElement("div", {
    className: footerClassName$2
  }));
};

function _templateObject4$1() {
  var data = taggedTemplateLiteral(["\n  flex: 0 0 100%;\n  display: block;\n  height: 18px;\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 9001;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = taggedTemplateLiteral(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$3() {
  var data = taggedTemplateLiteral(["\n  width: 240px;\n  height: 298px;\n  display: flex;\n  flex-flow: column;\n  justify-content: space-between;\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var redDark = Theme.colors.redDark;
var headingDefault = Theme.typographyDefs.headingDefault,
    supportContent = Theme.typographyDefs.supportContent;
var CURRENT_VIEW = {
  FEEDBACK: 'feedback',
  FEEDBACK_TYPE: 'feedbackType',
  FEEDBACK_SUCCESS: 'feedbackSuccess'
}; // choices match ndb model, do not change unless ndb model is updated

var feedbackTypeChoices = {
  SUGGESTION: 'Suggestion',
  BUG: 'Bug',
  PRAISE: 'Praise'
};
var feedbackTypeOptions = [feedbackTypeChoices.SUGGESTION, feedbackTypeChoices.BUG, feedbackTypeChoices.PRAISE];
var feedbackProductCategoryChoices = {
  INTEGRATIONS: 'Integrations',
  POP_UP_FORMS: 'Pop-Up/Forms',
  BAR: 'Bar',
  WIDGETS: 'Widgets',
  PUBLISHING: 'Publishing',
  ANALYTICS: 'Analytics',
  SPLIT_TESTING: 'Split Testing',
  LEAD_MAGNET: 'Lead Magnet',
  LEADMETER: 'Leadmeter',
  PAGE_CUSTOMIZATION: 'Page Customization',
  ACCOUNT_MANAGEMENT_BILLING: 'Account Management/Billing',
  SITES: 'Sites',
  OTHER: 'Other'
};
var feedbackProductCategoryOptions = [feedbackProductCategoryChoices.INTEGRATIONS, feedbackProductCategoryChoices.POP_UP_FORMS, feedbackProductCategoryChoices.BAR, feedbackProductCategoryChoices.WIDGETS, feedbackProductCategoryChoices.PUBLISHING, feedbackProductCategoryChoices.ANALYTICS, feedbackProductCategoryChoices.SPLIT_TESTING, feedbackProductCategoryChoices.LEAD_MAGNET, feedbackProductCategoryChoices.LEADMETER, feedbackProductCategoryChoices.PAGE_CUSTOMIZATION, feedbackProductCategoryChoices.ACCOUNT_MANAGEMENT_BILLING, feedbackProductCategoryChoices.SITES, feedbackProductCategoryChoices.OTHER];
var containerClassName = emotion.css(_templateObject$3());
var closeIconClassName = emotion.css(_templateObject2$3());
var targetClassName = emotion.css(_templateObject3$2());
var errorMessageClassName = emotion.css(_templateObject4$1());

var Feedback$1 =
/*#__PURE__*/
function (_Component) {
  inherits(Feedback$$1, _Component);

  function Feedback$$1(props) {
    var _this;

    classCallCheck(this, Feedback$$1);

    _this = possibleConstructorReturn(this, getPrototypeOf(Feedback$$1).call(this, props));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setCurrentView", function (currentView) {
      _this.setState(function () {
        return {
          currentView: currentView,
          errorMessage: ''
        };
      }, function () {
        if (_this.state.currentView === CURRENT_VIEW.FEEDBACK_SUCCESS) {
          _this.closeTimeout = setTimeout(function () {
            _this.props.unmount();
          }, 5000);
        }
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setFeedback", function (_ref) {
      var target = _ref.target;
      return _this.setState(function () {
        var feedback = target.value;
        var errorMessage = '';

        if (target.value.length > 230) {
          errorMessage = "".concat(target.value.length, " of 250 left.");
        }

        if (target.value.length > 250) {
          errorMessage = "You're over the 250 character limit.";
        }

        return {
          feedback: feedback,
          errorMessage: errorMessage
        };
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setFeedbackType", function (_ref2) {
      var value = _ref2.value;
      return _this.setState(function () {
        return {
          feedbackType: value,
          errorMessage: ''
        };
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "setFeedbackProductCategory", function (_ref3) {
      var value = _ref3.value;
      return _this.setState(function () {
        return {
          feedbackProductCategory: value,
          errorMessage: ''
        };
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "goToFeedbackType", function () {
      var feedback = _this.state.feedback;

      if (feedback.length > 0 && feedback.length < 251) {
        _this.setCurrentView(CURRENT_VIEW.FEEDBACK_TYPE);
      } else {
        _this.setState(function () {
          return {
            errorMessage: !feedback ? 'Please provide some feedback.' : "You're over the 250 character limit."
          };
        });
      }
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "submitFeedback",
    /*#__PURE__*/
    asyncToGenerator(
    /*#__PURE__*/
    regenerator.mark(function _callee() {
      var _this$state, feedback, feedbackType, feedbackProductCategory, response;

      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this$state = _this.state, feedback = _this$state.feedback, feedbackType = _this$state.feedbackType, feedbackProductCategory = _this$state.feedbackProductCategory;

              if (!(feedback && feedbackType && feedbackProductCategory)) {
                _context.next = 15;
                break;
              }

              _this.setState(function () {
                return {
                  isLoading: true
                };
              });

              _context.prev = 3;
              _context.next = 6;
              return _this.props.onSubmitFeedback({
                feedback: feedback,
                feedbackType: feedbackType,
                feedbackProductCategory: feedbackProductCategory
              });

            case 6:
              response = _context.sent;
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](3);
              response = _context.t0;

            case 12:
              if (!(response.status !== 201)) {
                _context.next = 14;
                break;
              }

              return _context.abrupt("return", _this.setState({
                errorMessage: response.msg || response.message || 'Oops, please try again later.',
                isLoading: false
              }));

            case 14:
              return _context.abrupt("return", _this.setCurrentView(CURRENT_VIEW.FEEDBACK_SUCCESS));

            case 15:
              return _context.abrupt("return", _this.setState({
                errorMessage: 'You need to select a type and category.',
                isLoading: false
              }));

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[3, 9]]);
    })));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "closeFeedback", function (event) {
      event.stopPropagation();

      if (_this.closeTimeout) {
        clearTimeout(_this.closeTimeout);
      }

      _this.props.unmount();
    });

    _this.state = {
      currentView: CURRENT_VIEW.FEEDBACK,
      feedback: props.feedback,
      feedbackType: props.feedbackType,
      feedbackProductCategory: props.feedbackProductCategory,
      errorMessage: '',
      isLoading: false
    };
    _this.closeTimeout = null;
    return _this;
  }

  createClass(Feedback$$1, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.state.currentView === nextState.currentView && this.state.feedback === nextState.feedback && this.state.feedbackType === nextState.feedbackType && this.state.feedbackProductCategory === nextState.feedbackProductCategory && this.state.errorMessage === nextState.errorMessage && this.state.isLoading === nextState.isLoading) {
        return false;
      }

      return true;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          currentView = _this$state2.currentView,
          errorMessage = _this$state2.errorMessage;
      return React__default.createElement(React.Fragment, null, React__default.createElement(OutsideClickHandler, {
        onOutsideClick: this.closeFeedback
      }, React__default.createElement(Tooltip, {
        bottom: true,
        hover: false,
        className: this.props.tooltipClassName,
        arrowClassName: this.props.arrowClassName,
        tip: React__default.createElement("div", {
          className: containerClassName,
          onClick: function onClick(e) {
            return e.stopPropagation();
          }
        }, React__default.createElement("div", null, React__default.createElement("div", null, React__default.createElement("div", {
          style: objectSpread({}, headingDefault, {
            lineHeight: '36px'
          })
        }, "Feedback")), React__default.createElement("div", {
          className: closeIconClassName
        }, React__default.createElement(IconButton, {
          noBackground: true,
          onClick: this.closeFeedback,
          icon: "close"
        })), React__default.createElement("div", {
          className: errorMessageClassName,
          style: objectSpread({}, supportContent, {
            color: redDark
          }),
          "data-qa-selector": "error-message"
        }, errorMessage)), currentView === CURRENT_VIEW.FEEDBACK && React__default.createElement(Feedback, {
          feedback: this.state.feedback,
          setFeedback: this.setFeedback,
          goToFeedbackType: this.goToFeedbackType
        }), currentView === CURRENT_VIEW.FEEDBACK_TYPE && React__default.createElement(FeedbackType, {
          isLoading: this.state.isLoading,
          feedbackType: this.state.feedbackType,
          feedbackProductCategory: this.state.feedbackProductCategory,
          setFeedbackType: this.setFeedbackType,
          setFeedbackProductCategory: this.setFeedbackProductCategory,
          setCurrentView: this.setCurrentView,
          submitFeedback: this.submitFeedback,
          feedbackTypeOptions: this.props.feedbackTypeOptions,
          feedbackProductCategoryOptions: this.props.feedbackProductCategoryOptions
        }), currentView === CURRENT_VIEW.FEEDBACK_SUCCESS && React__default.createElement(FeedbackSuccess, null))
      }, React__default.createElement("div", {
        className: targetClassName
      }))));
    }
  }]);

  return Feedback$$1;
}(React.Component);
Feedback$1.propTypes = {
  tooltipClassName: PropTypes.string,
  arrowClassName: PropTypes.string,
  onSubmitFeedback: PropTypes.func.isRequired,
  unmount: PropTypes.func,
  feedback: PropTypes.string,
  feedbackType: PropTypes.string,
  feedbackProductCategory: PropTypes.string,
  feedbackTypeOptions: PropTypes.arrayOf(PropTypes.string),
  feedbackProductCategoryOptions: PropTypes.arrayOf(PropTypes.string)
};
Feedback$1.defaultProps = {
  tooltipClassName: '',
  arrowClassName: '',
  unmount: function unmount() {},
  feedback: '',
  feedbackType: null,
  feedbackProductCategory: null,
  feedbackTypeOptions: feedbackTypeOptions,
  feedbackProductCategoryOptions: feedbackProductCategoryOptions
};

exports.default = Feedback$1;
exports.feedbackTypeOptions = feedbackTypeOptions;
exports.feedbackProductCategoryOptions = feedbackProductCategoryOptions;
exports.feedbackTypeChoices = feedbackTypeChoices;
exports.feedbackProductCategoryChoices = feedbackProductCategoryChoices;
