'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var isEqual = _interopDefault(require('lodash/isEqual'));
var anime = _interopDefault(require('animejs'));

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

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

var arrayWithoutHoles = _arrayWithoutHoles;

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

var iterableToArray = _iterableToArray;

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var nonIterableSpread = _nonIterableSpread;

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

var toConsumableArray = _toConsumableArray;

function animateIntroSimple(_ref2) {
  var robie = _ref2.robie,
      leftArm = _ref2.leftArm,
      rightArm = _ref2.rightArm,
      scanner = _ref2.scanner,
      nonColorPage = _ref2.nonColorPage,
      eyes = _ref2.eyes,
      head = _ref2.head,
      _ref2$cb = _ref2.cb,
      cb = _ref2$cb === void 0 ? function () {} : _ref2$cb;
  var intro = anime.timeline({
    complete: cb
  });
  return intro.add({
    targets: eyes,
    translateX: [0, -5],
    duration: 400,
    elasticity: 100,
    easing: 'easeInOutSine'
  });
}
function animateScanning(_ref4) {
  var robie = _ref4.robie,
      leftArm = _ref4.leftArm,
      rightArm = _ref4.rightArm,
      scanner = _ref4.scanner,
      nonColorPage = _ref4.nonColorPage,
      currentColorPage = _ref4.currentColorPage,
      eyes = _ref4.eyes,
      head = _ref4.head,
      _ref4$cb = _ref4.cb,
      cb = _ref4$cb === void 0 ? function () {} : _ref4$cb;
  var scanning = anime.timeline({
    complete: cb
  });
  return scanning.add({
    delay: 400,
    targets: scanner,
    d: ['M 210.043,20 L 107.72,18 L 0,18 L 182.479,20 L 210.043,20 Z', 'M 210.043,20 L 107.72,96 L 0,96 L 182.479,20 L 210.043,20 Z'],
    duration: 750,
    elasticity: 100,
    easing: 'easeInOutSine'
  }).add({
    targets: eyes,
    translateY: [0, 5],
    translateX: [-5, -5],
    duration: 750,
    elasticity: 100,
    easing: 'easeInOutSine',
    offset: '-=750'
  }).add({
    targets: head,
    rotate: -10,
    duration: 750,
    elasticity: 100,
    easing: 'easeInOutSine',
    offset: '-=750'
  }).add({
    targets: currentColorPage,
    height: [0, 81],
    duration: 750,
    elasticity: 100,
    easing: 'easeInOutSine',
    offset: '-=750'
  }).add({
    targets: scanner,
    d: ['M 210.043,20 L 107.72,96 L 0,96 L 182.479,20 L 210.043,20 Z', 'M 210.043,20 L 107.72,18 L 0,18 L 182.479,20 L 210.043,20 Z'],
    duration: 1000,
    elasticity: 100,
    easing: 'easeInOutSine',
    delay: 150
  }).add({
    targets: eyes,
    translateY: [5, 0],
    translateX: [-5, -5],
    duration: 1000,
    elasticity: 100,
    easing: 'easeInOutSine',
    offset: '-=1000'
  }).add({
    targets: head,
    rotate: 0,
    duration: 1000,
    elasticity: 100,
    easing: 'easeInOutSine',
    offset: '-=1000'
  }).add({
    targets: eyes,
    scaleY: 0.1,
    translateX: [-5, -5],
    duration: 100,
    elasticity: 100,
    easing: 'easeInSine'
  }).add({
    targets: eyes,
    scaleY: 1,
    translateX: [-5, -5],
    translateY: 0,
    duration: 100,
    elasticity: 100,
    easing: 'easeOutSine'
  });
}
function animateFailed(_ref5) {
  var robie = _ref5.robie,
      leftArm = _ref5.leftArm,
      rightArm = _ref5.rightArm,
      scanner = _ref5.scanner,
      nonColorPage = _ref5.nonColorPage,
      eyes = _ref5.eyes,
      head = _ref5.head,
      _ref5$cb = _ref5.cb,
      cb = _ref5$cb === void 0 ? function () {} : _ref5$cb;
  var failed = anime.timeline({
    complete: cb
  });
  return failed.add({
    targets: robie,
    rotate: -8,
    duration: 1500,
    elasticity: 750,
    offset: 0 // easing: "easeInOutSine",

  }).add({
    targets: scanner,
    d: 'M 210.043,20 L 107.72,18 L 0,18 L 182.479,20 L 210.043,20 Z',
    duration: 0,
    offset: 0
  }).add({
    targets: nonColorPage,
    'clip-path': 'inset(-1px 0px 0px 0px)',
    duration: 0,
    offset: 0
  }).add({
    targets: eyes,
    translateX: 0,
    translateY: 0,
    duration: 1500,
    elasticity: 0,
    offset: 0 // easing: "easeInOutSine",

  }).add({
    targets: leftArm,
    rotate: -12,
    duration: 1500,
    elasticity: 600,
    offset: 0 // easing: "easeInOutSine",

  }).add({
    targets: rightArm,
    rotate: 12,
    duration: 1500,
    elasticity: 600,
    // easing: "easeInOutSine",
    offset: 0
  }).add({
    targets: head,
    rotate: -38,
    duration: 1500,
    elasticity: 0,
    // easing: "easeInOutSine",
    offset: 0
  }).add({
    targets: nonColorPage,
    rotate: -30,
    translateY: [17, 17],
    duration: 1500,
    elasticity: 400,
    // easing: "easeInOutSine",
    offset: 0
  }).add({
    targets: eyes,
    scaleY: 0.1,
    translateX: [-5, -5],
    duration: 100,
    elasticity: 0,
    easing: 'easeInSine'
  });
}

var rgb = function rgb(r, g, b) {
  return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
};

var darkBlue = rgb(71, 136, 199);
var lightBlue = rgb(194, 232, 255);
var initialGray = [121, 127, 137];

var ColorPage = function ColorPage(_ref) {
  var previousColor = _ref.previousColor,
      currentColor = _ref.currentColor,
      pageRefFunction = _ref.pageRefFunction,
      currentColorPageRefFunction = _ref.currentColorPageRefFunction;
  return React.createElement("g", {
    id: "ColorPage",
    ref: pageRefFunction,
    transform: "translate(0 17)",
    style: {
      transformOrigin: '75px 2px 0px'
    }
  }, React.createElement("rect", {
    width: "108",
    height: "81",
    style: {
      fill: rgb.apply(void 0, toConsumableArray(previousColor))
    },
    rx: "3"
  }), React.createElement("rect", {
    ref: currentColorPageRefFunction,
    width: "108",
    height: "0",
    style: {
      fill: rgb.apply(void 0, toConsumableArray(currentColor))
    },
    rx: "3"
  }), React.createElement("path", {
    fill: "#FFF",
    fillOpacity: ".88",
    d: "M60,52 L60,53 L91,53 L91,52 L60,52 Z M60,46 L60,47 L96,47 L96,46 L60,46 Z M60,40 L60,41 L96,41 L96,40 L60,40 Z M60,34 L60,35 L96,35 L96,34 L60,34 Z M60,24 L60,27 L96,27 L96,24 L60,24 Z M2,11 L106,11 L106,78 C106,78.5522847 105.552285,79 105,79 L3,79 C2.44771525,79 2,78.5522847 2,78 L2,11 Z M12,20 L12,71 L51,71 L51,20 L12,20 Z M69,60 C67.3431458,60 66,61.3431458 66,63 C66,64.6568542 67.3431458,66 69,66 L87,66 C88.6568542,66 90,64.6568542 90,63 C90,61.3431458 88.6568542,60 87,60 L69,60 Z"
  }), React.createElement("path", {
    fill: "#FFF",
    d: "M14,22 L49,22 L49,69 L14,69 L14,22 Z M17,25 L17,66 L46,66 L46,25 L17,25 Z"
  }), React.createElement("polygon", {
    fill: "#FFF",
    fillOpacity: ".74",
    points: "17 51 23 45 44 66 17 66"
  }), React.createElement("path", {
    fill: "#FFF",
    fillOpacity: ".42",
    d: "M46,51 L46,66 L44,66 L34.5,56.5 L43,48 L46,51 Z"
  }), React.createElement("polygon", {
    fill: "#FFF",
    fillOpacity: ".88",
    points: "17 51 17 25 46 25 45.988 50.967 43 48 34.5 56.5 23 45"
  }), React.createElement("circle", {
    cx: "39",
    cy: "32",
    r: "4",
    fill: "#FFF"
  }), React.createElement("path", {
    fill: "#FFF",
    fillOpacity: ".8",
    d: "M3,2 L105,2 C105.552285,2 106,2.44771525 106,3 L106,9 L2,9 L2,3 C2,2.44771525 2.44771525,2 3,2 Z M7,7 C7.82842712,7 8.5,6.32842712 8.5,5.5 C8.5,4.67157288 7.82842712,4 7,4 C6.17157288,4 5.5,4.67157288 5.5,5.5 C5.5,6.32842712 6.17157288,7 7,7 Z M13,7 C13.8284271,7 14.5,6.32842712 14.5,5.5 C14.5,4.67157288 13.8284271,4 13,4 C12.1715729,4 11.5,4.67157288 11.5,5.5 C11.5,6.32842712 12.1715729,7 13,7 Z M19,7 C19.8284271,7 20.5,6.32842712 20.5,5.5 C20.5,4.67157288 19.8284271,4 19,4 C18.1715729,4 17.5,4.67157288 17.5,5.5 C17.5,6.32842712 18.1715729,7 19,7 Z"
  }), React.createElement("rect", {
    width: "36",
    height: "3",
    x: "60",
    y: "24",
    fill: "#FFF",
    fillOpacity: ".5"
  }), React.createElement("rect", {
    width: "36",
    height: "1",
    x: "60",
    y: "34",
    fill: "#FFF",
    fillOpacity: ".5"
  }), React.createElement("rect", {
    width: "36",
    height: "1",
    x: "60",
    y: "40",
    fill: "#FFF",
    fillOpacity: ".5"
  }), React.createElement("rect", {
    width: "36",
    height: "1",
    x: "60",
    y: "46",
    fill: "#FFF",
    fillOpacity: ".5"
  }), React.createElement("rect", {
    width: "31",
    height: "1",
    x: "60",
    y: "52",
    fill: "#FFF",
    fillOpacity: ".5"
  }));
};

var Robie =
/*#__PURE__*/
function (_React$Component) {
  inherits(Robie, _React$Component);

  function Robie(props) {
    var _this;

    classCallCheck(this, Robie);

    _this = possibleConstructorReturn(this, getPrototypeOf(Robie).call(this, props));

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "updateColors", function () {
      return new Promise(function (resolve) {
        _this.setState(function (state) {
          // TODO: Keep this feature to show actual brand colors mid-flight for now,
          // but remove it if it doesn't end up getting used in future releases.
          var colors = state.colors;
          colors.splice.apply(colors, [state.currentColor + 1, state.colors.length - 1].concat(toConsumableArray(_this.props.colors)));
          return {
            colors: colors,
            updateColors: false
          };
        }, function () {
          resolve();
        });
      });
    });

    defineProperty(assertThisInitialized(assertThisInitialized(_this)), "nextColor",
    /*#__PURE__*/
    asyncToGenerator(
    /*#__PURE__*/
    regenerator.mark(function _callee() {
      return regenerator.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof _this.props.onComplete === 'function')) {
                _context.next = 5;
                break;
              }

              _this.animateParams.cb = null;
              _this.animateIntroSimple && _this.animateIntroSimple.pause();
              _this.animateScanning && _this.animateScanning.pause();
              return _context.abrupt("return", _this.props.onComplete());

            case 5:
              if (!_this.state.updateColors) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return _this.updateColors();

            case 8:
              if (!(_this.state.currentColor + 1 >= _this.state.colors.length)) {
                _context.next = 10;
                break;
              }

              return _context.abrupt("return", _this.setState(function (state) {
                return {
                  currentColor: 0,
                  previousColor: state.currentColor
                };
              }, function () {
                _this.animateScanning = animateScanning(_this.animateParams);
              }));

            case 10:
              _this.setState(function (state) {
                return {
                  currentColor: state.currentColor + 1,
                  previousColor: state.currentColor
                };
              }, function () {
                _this.animateScanning = animateScanning(_this.animateParams);
              });

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _this.animateIntroSimple = null;
    _this.animateScanning = null;
    _this.animateFailed = null;
    _this.animateParams = null;
    _this.initTimeout = null;
    _this.state = {
      hasFailed: props.hasFailed,
      currentColor: 1,
      previousColor: 0,
      updateColors: false,
      colors: props.colors && props.colors.length ? [initialGray].concat(toConsumableArray(props.colors)) : [initialGray, [94, 92, 196], [0, 132, 142], [191, 7, 17], [4, 105, 255]]
    };
    return _this;
  }

  createClass(Robie, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.animateParams = {
        robie: this.robie,
        leftArm: this.leftArm,
        rightArm: this.rightArm,
        scanner: this.scanner,
        currentColorPage: this.currentColorPage,
        nonColorPage: this.nonColorPage,
        eyes: this.eyes,
        head: this.head,
        cb: this.nextColor
      };
      this.initTimeout = setTimeout(function () {
        if (_this2.props.hasFailed) {
          return _this2.animateFailed = animateFailed(objectSpread({}, _this2.animateParams, {
            cb: null
          }));
        }

        _this2.animateIntroSimple = animateIntroSimple(objectSpread({}, _this2.animateParams, {
          cb: function cb() {
            _this2.animateScanning = animateScanning(_this2.animateParams);
          }
        }));
      }, 500);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.hasFailed && !prevProps.hasFailed) {
        this.setState(function () {
          return {
            hasFailed: true
          };
        });
        this.animateIntroSimple && this.animateIntroSimple.pause();
        this.animateScanning && this.animateScanning.pause();
        this.animateParams.cb = null;
        this.animateFailed = animateFailed(objectSpread({}, this.animateParams));
      }

      if (!this.state.updateColors && this.props.colors.length > 0 && !isEqual(prevProps.colors, this.props.colors)) {
        this.setState(function () {
          return {
            updateColors: true
          };
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.initTimeout);
      this.animateIntroSimple && this.animateIntroSimple.pause();
      this.animateScanning && this.animateScanning.pause();
      this.animateFailed && this.animateFailed.pause();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement("svg", {
        width: "314px",
        height: "190px",
        viewBox: "0 -30 314 190",
        style: {
          margin: '38px 0px 80px',
          fillRule: 'evenodd',
          clipRule: 'evenodd'
        }
      }, React.createElement("g", {
        id: "Group-5"
      }, React.createElement(ColorPage, {
        pageRefFunction: function pageRefFunction(nonColorPage) {
          _this3.nonColorPage = nonColorPage;
        },
        currentColorPageRefFunction: function currentColorPageRefFunction(currentColorPage) {
          _this3.currentColorPage = currentColorPage;
        },
        previousColor: this.state.hasFailed ? initialGray : this.state.colors[this.state.previousColor],
        currentColor: this.state.hasFailed ? initialGray : this.state.colors[this.state.currentColor]
      }), React.createElement("g", {
        ref: function ref(robie) {
          return _this3.robie = robie;
        },
        id: "Robie",
        style: {
          transformOrigin: '190px 154px 0px'
        }
      }, React.createElement("g", {
        id: "Head",
        ref: function ref(head) {
          return _this3.head = head;
        },
        style: {
          transformOrigin: '202px 48px'
        }
      }, React.createElement("g", {
        id: "Neck"
      }, React.createElement("rect", {
        id: "NeckStem",
        x: "199",
        y: "30",
        width: "8",
        height: "12",
        style: {
          fill: darkBlue
        }
      }), React.createElement("g", {
        id: "NeckJoint",
        transform: "matrix(1,0,0,1,191,36)"
      }, React.createElement("circle", {
        id: "NeckJointOuter",
        cx: "12",
        cy: "12",
        r: "12",
        style: {
          fill: darkBlue
        }
      }), React.createElement("circle", {
        id: "NeckJointInner",
        cx: "12",
        cy: "12",
        r: "8",
        style: {
          fill: lightBlue
        }
      }))), React.createElement("g", {
        id: "Face"
      }, React.createElement("g", {
        id: "OuterHead",
        transform: "matrix(1,0,0,1,171,0)"
      }, React.createElement("rect", {
        x: "0",
        y: "0",
        width: "64",
        height: "32",
        style: {
          fill: darkBlue
        }
      })), React.createElement("g", {
        id: "InnerHead",
        transform: "matrix(1,0,0,1,171,0)"
      }, React.createElement("rect", {
        x: "4",
        y: "4",
        width: "56",
        height: "24",
        style: {
          fill: lightBlue
        }
      })), React.createElement("g", {
        id: "Eyes",
        ref: function ref(eyes) {
          return _this3.eyes = eyes;
        },
        style: {
          transformOrigin: '200px 17px'
        }
      }, React.createElement("circle", {
        id: "RightEye",
        cx: "189",
        cy: "16",
        r: "4",
        style: {
          fill: darkBlue
        }
      }), React.createElement("circle", {
        id: "LeftEye",
        cx: "217",
        cy: "16",
        r: "4",
        style: {
          fill: darkBlue
        }
      })))), React.createElement("path", {
        id: "Scan",
        ref: function ref(scanner) {
          _this3.scanner = scanner;
        },
        d: "M 210.043,20 L 107.72,18 L 0,18 L 182.479,20 L 210.043,20 Z",
        style: {
          fill: 'url(#_Linear1)'
        }
      }), React.createElement("g", {
        id: "Tire",
        transform: "matrix(1,0,0,1,187,116)"
      }, React.createElement("path", {
        id: "OuterTire",
        d: "M0,2L32,2L32,28C32,33.523 27.523,38 22,38L10,38C4.477,38 0,33.523 0,28L0,2Z",
        style: {
          fill: darkBlue
        }
      }), React.createElement("path", {
        id: "InnerTire",
        d: "M4,0L28,0L28,28C28,31.314 25.314,34 22,34L10,34C6.686,34 4,31.314 4,28L4,0Z",
        style: {
          fill: lightBlue
        }
      }), React.createElement("g", {
        id: "TireTreads",
        transform: "matrix(1,0,0,1,-187,-116)"
      }, React.createElement("rect", {
        id: "Rectangle-31-Copy-16",
        x: "191",
        y: "124",
        width: "8",
        height: "4",
        style: {
          fill: darkBlue
        }
      }), React.createElement("rect", {
        id: "Rectangle-31-Copy-17",
        x: "207",
        y: "124",
        width: "8",
        height: "4",
        style: {
          fill: darkBlue
        }
      }), React.createElement("rect", {
        id: "Rectangle-31-Copy-18",
        x: "207",
        y: "132",
        width: "8",
        height: "4",
        style: {
          fill: darkBlue
        }
      }), React.createElement("rect", {
        id: "Rectangle-31-Copy-19",
        x: "191",
        y: "132",
        width: "8",
        height: "4",
        style: {
          fill: darkBlue
        }
      }), React.createElement("rect", {
        id: "Rectangle-31-Copy-20",
        x: "191",
        y: "140",
        width: "8",
        height: "4",
        style: {
          fill: darkBlue
        }
      }), React.createElement("rect", {
        id: "Rectangle-31-Copy-21",
        x: "207",
        y: "140",
        width: "8",
        height: "4",
        style: {
          fill: darkBlue
        }
      }))), React.createElement("g", {
        id: "UpperBody"
      }, React.createElement("g", {
        id: "Body"
      }, React.createElement("g", {
        id: "OuterChest",
        transform: "matrix(1,0,0,1,163,48)"
      }, React.createElement("path", {
        d: "M-0.457,0L79.546,0L75.966,64.444C75.731,68.683 72.224,72 67.979,72L11.114,72C6.868,72 3.362,68.683 3.126,64.444L-0.457,0Z",
        style: {
          fill: darkBlue
        }
      })), React.createElement("g", {
        id: "Chest",
        transform: "matrix(1,0,0,1,163,48)"
      }, React.createElement("path", {
        d: "M3.589,4L75.501,4L72.117,64.224C71.998,66.343 70.246,68 68.124,68L10.969,68C8.847,68 7.095,66.343 6.975,64.225L3.589,4Z",
        style: {
          fill: rgb(223, 240, 254)
        }
      })), React.createElement("rect", {
        id: "InnerChest",
        x: "183",
        y: "72",
        width: "40",
        height: "24",
        style: {
          fill: lightBlue
        }
      })), React.createElement("path", {
        id: "LeftForeArm",
        ref: function ref(leftArm) {
          _this3.leftArm = leftArm;
        },
        d: "M245.99,89.967C252.333,91.718 256.99,97.529 256.99,104.428L252.99,104.428C252.99,98.353 248.066,93.428 241.99,93.428C235.915,93.428 230.99,98.353 230.99,104.428L226.99,104.428C226.99,97.529 231.648,91.718 237.99,89.967L237.99,49.428L245.99,49.428L245.99,89.967Z",
        style: {
          fill: darkBlue,
          transformOrigin: '242px 48px 0px',
          transform: 'rotateZ(-30deg)'
        }
      }), React.createElement("path", {
        id: "RightForeArm",
        ref: function ref(rightArm) {
          _this3.rightArm = rightArm;
        },
        d: "M167.206,89.915C173.548,91.665 178.206,97.477 178.206,104.376L174.206,104.376C174.206,98.301 169.281,93.376 163.206,93.376C157.131,93.376 152.206,98.3 152.206,104.376L148.206,104.376C148.206,97.477 152.863,91.665 159.206,89.915L159.206,49.376L167.206,49.376L167.206,89.915Z",
        style: {
          fill: darkBlue,
          transformOrigin: '164px 49px 0px',
          transform: 'rotateZ(30deg)'
        }
      }), React.createElement("g", {
        id: "LeftShoulder",
        transform: "matrix(1,0,0,1,226.99,40.4282)"
      }, React.createElement("circle", {
        id: "LeftShoulderOuter",
        cx: "15",
        cy: "8",
        r: "8",
        style: {
          fill: darkBlue
        }
      }), React.createElement("circle", {
        id: "LeftShoulderInner",
        cx: "15",
        cy: "8",
        r: "4",
        style: {
          fill: lightBlue
        }
      })), React.createElement("g", {
        id: "RightShoulder"
      }, React.createElement("g", {
        id: "RightShoulderOuter",
        transform: "matrix(1,1.73472e-18,-1.73472e-18,1,148.206,40.3756)"
      }, React.createElement("circle", {
        cx: "15",
        cy: "8",
        r: "8",
        style: {
          fill: darkBlue
        }
      })), React.createElement("g", {
        id: "RightShoulderInner",
        transform: "matrix(1,1.73472e-18,-1.73472e-18,1,148.206,40.3756)"
      }, React.createElement("circle", {
        cx: "15",
        cy: "8",
        r: "4",
        style: {
          fill: lightBlue
        }
      })))))), React.createElement("defs", null, React.createElement("linearGradient", {
        id: "_Linear1",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "matrix(2.80844e-15,45.8652,-45.8652,2.80844e-15,105.021,20)"
      }, React.createElement("stop", {
        offset: "0",
        style: {
          stopColor: darkBlue,
          stopOpacity: 0
        }
      }), React.createElement("stop", {
        offset: "1",
        style: {
          stopColor: darkBlue,
          stopOpacity: 0.498039
        }
      }))));
    }
  }]);

  return Robie;
}(React.Component);
Robie.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  hasFailed: PropTypes.bool,
  onComplete: PropTypes.oneOfType([PropTypes.func, PropTypes.oneOf([null])])
};
Robie.defaultProps = {
  colors: [],
  hasFailed: false,
  onComplete: null
};

module.exports = Robie;
