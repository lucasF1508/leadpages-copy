import Chevron from '@lp/chevron';

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var runtime_1 = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

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
  exports.wrap = wrap;

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
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
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
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
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
        return new PromiseImpl(function(resolve, reject) {
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
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
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
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined$1;
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
        context.arg = undefined$1;
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

  define(Gp, toStringTagSymbol, "Generator");

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

  exports.keys = function(object) {
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

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
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
          context.arg = undefined$1;
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
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   module.exports 
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}
});

var regenerator = runtime_1;

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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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

var TemplateKind;

(function (TemplateKind) {
  TemplateKind["Leadpage"] = "LeadpageTemplate";
  TemplateKind["Site"] = "SiteTemplate";
})(TemplateKind || (TemplateKind = {}));

var TaxonCollection;

(function (TaxonCollection) {
  TaxonCollection["categories"] = "categories";
  TaxonCollection["tags"] = "tags";
  TaxonCollection["id"] = "id";
})(TaxonCollection || (TaxonCollection = {}));

var TaxonSection;

(function (TaxonSection) {
  TaxonSection["Collections"] = "Collections";
  TaxonSection["Content"] = "Content";
  TaxonSection["Industries"] = "Industries";
  TaxonSection["Layouts"] = "Layouts";
  TaxonSection["Page Elements"] = "Page Elements";
  TaxonSection["Page Types"] = "Page Types";
  TaxonSection["Templates"] = "Templates";
  TaxonSection["Style"] = "Style";
  TaxonSection["Color"] = "Color";
  TaxonSection["Promotion"] = "Promotion";
})(TaxonSection || (TaxonSection = {}));

var FilterOperators;

(function (FilterOperators) {
  FilterOperators["!intersects"] = "[!intersects]";
  FilterOperators["intersects"] = "[intersects]";
  FilterOperators["!superset"] = "[!superset]";
  FilterOperators["superset"] = "[superset]";
  FilterOperators["!contains"] = "[!contains]";
  FilterOperators["contains"] = "[contains]";
  FilterOperators["icontains"] = "[icontains]";
  FilterOperators["in"] = "[in]";
  FilterOperators["eq"] = "[eq]";
  FilterOperators["ne"] = "[ne]";
  FilterOperators["lt"] = "[lt]";
  FilterOperators["gt"] = "[gt]";
  FilterOperators["lte"] = "[lte]";
  FilterOperators["gte"] = "[gte]";
  FilterOperators["empty"] = "";
})(FilterOperators || (FilterOperators = {}));

var SortFields;

(function (SortFields) {
  SortFields["New"] = "-release_date";
  SortFields["Conversion"] = "-conversion_rate";
  SortFields["Popular"] = "-pages";
})(SortFields || (SortFields = {}));

var FilterProps;

(function (FilterProps) {
  FilterProps["limit"] = "limit";
  FilterProps["cursor"] = "cursor";
  FilterProps["id"] = "id";
  FilterProps["name"] = "name";
  FilterProps["kind"] = "kind";
  FilterProps["legacy_id"] = "legacy_id";
  FilterProps["deleted"] = "deleted";
  FilterProps["release_date"] = "release_date";
  FilterProps["conversion_rate"] = "conversion_rate";
  FilterProps["categories"] = "categories";
  FilterProps["tags"] = "tags";
  FilterProps["order_by"] = "order_by";
})(FilterProps || (FilterProps = {}));

/* eslint-disable import/prefer-default-export */

function serializeFilters(filters) {
  var arr = [];
  return Object.keys(filters).reduce(function (acc, filterProp) {
    var filter = filters[filterProp];

    if (filter === null || filter === void 0 ? void 0 : filter.value) {
      var value = filter.value,
          operator = filter.operator;
      var prop = "".concat(filterProp).concat(operator); // intersect queries must retain commas for value separation

      acc.push("".concat(prop, "=").concat(encodeURIComponent(value).replace(/%2C/g, ',')));
    }

    return acc;
  }, arr).join('&');
} // Do not expose the client to the full range of filter options and operators.

var ALLOWED_FILTER_PROPS = [FilterProps.order_by, FilterProps.categories, FilterProps.tags];

var allowClientParm = function allowClientParm(prop) {
  return ALLOWED_FILTER_PROPS.indexOf(prop) > -1;
};

function serializeClientFilters(filters) {
  var urlSearchParams = new URLSearchParams();
  Object.keys(filters).forEach(function (prop) {
    var filter = filters[prop];

    if ((filter === null || filter === void 0 ? void 0 : filter.value) && allowClientParm(prop)) {
      urlSearchParams.set(prop, filter === null || filter === void 0 ? void 0 : filter.value.toString());
    }
  });
  return urlSearchParams.toString();
}

var TEMPLATE_PATH = 'templates';
var LEADPAGES_PATH = 'leadpages';
var SITES_PATH = 'sites';
var TAXONOMY_PATH = 'taxonomy';
var REQUEST_HEADERS = {
  'Content-Type': 'application/json'
};
var LIMIT = 24;
var MandrelApi = /*#__PURE__*/function () {
  function MandrelApi(_ref) {
    var _ref2, _extends2;

    var kind = _ref.kind,
        baseUrl = _ref.baseUrl,
        baseFilters = _ref.baseFilters,
        authRequest = _ref.authRequest,
        onUpdateQueryString = _ref.onUpdateQueryString;

    _classCallCheck(this, MandrelApi);

    this.baseUrl = void 0;
    this.baseFilters = void 0;
    this.taxonQuery = void 0;
    this.chevron = void 0;
    this.onUpdateQueryString = void 0;
    this.authRequest = void 0;
    this.baseUrl = baseUrl || 'https://api.leadpages.io/template/v2/';
    this.baseFilters = baseFilters || (_ref2 = {}, _defineProperty(_ref2, FilterProps.categories, {
      operator: FilterOperators['!contains'],
      value: 'incentive'
    }), _defineProperty(_ref2, FilterProps.limit, {
      operator: FilterOperators.empty,
      value: LIMIT
    }), _ref2);
    var taxonFilters = this.baseFilters ? _extends({}, this.baseFilters, (_extends2 = {}, _defineProperty(_extends2, FilterProps.kind, {
      operator: FilterOperators.contains,
      value: kind
    }), _defineProperty(_extends2, FilterProps.limit, {}), _defineProperty(_extends2, FilterProps.order_by, {}), _extends2)) : {};
    this.taxonQuery = this.getQueryString(taxonFilters);
    this.chevron = authRequest ? Chevron.getInstance() : undefined;
    this.authRequest = authRequest || false;
    this.onUpdateQueryString = onUpdateQueryString;
  }

  _createClass(MandrelApi, [{
    key: "request",
    value: function () {
      var _request = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(url) {
        var _response$_status, _response, response, json;

        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.authRequest) {
                  _context.next = 7;
                  break;
                }

                _context.next = 3;
                return this.chevron.http({
                  url: url,
                  method: 'GET',
                  headers: REQUEST_HEADERS
                });

              case 3:
                _response = _context.sent;

                if (!((_response === null || _response === void 0 ? void 0 : (_response$_status = _response._status) === null || _response$_status === void 0 ? void 0 : _response$_status.code) !== 200)) {
                  _context.next = 6;
                  break;
                }

                throw new Error();

              case 6:
                return _context.abrupt("return", _response);

              case 7:
                _context.next = 9;
                return fetch(url, {
                  headers: REQUEST_HEADERS
                });

              case 9:
                response = _context.sent;

                if (!(response.status !== 200)) {
                  _context.next = 12;
                  break;
                }

                throw new Error();

              case 12:
                _context.next = 14;
                return response.json();

              case 14:
                json = _context.sent;
                return _context.abrupt("return", json);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function request(_x) {
        return _request.apply(this, arguments);
      }

      return request;
    }()
  }, {
    key: "updateClientUrl",
    value: function updateClientUrl(filters) {
      if (this.onUpdateQueryString) {
        try {
          this.onUpdateQueryString(serializeClientFilters(filters));
        } catch (e) {// swallow
        }
      }
    }
  }, {
    key: "appendToQuery",
    value: function appendToQuery(query, templateFilters, prop) {
      var _this$baseFilters$pro, _templateFilters$prop, _this$baseFilters$pro2, _templateFilters$prop2;

      var string = query; // If a tag or category is explicitly excluded via base filter, extend our query to include the filter unless explicitly searching for that tag/categoryq

      if (templateFilters[prop] && this.baseFilters[prop] && ((_this$baseFilters$pro = this.baseFilters[prop]) === null || _this$baseFilters$pro === void 0 ? void 0 : _this$baseFilters$pro.operator) !== ((_templateFilters$prop = templateFilters[prop]) === null || _templateFilters$prop === void 0 ? void 0 : _templateFilters$prop.operator) && ((_this$baseFilters$pro2 = this.baseFilters[prop]) === null || _this$baseFilters$pro2 === void 0 ? void 0 : _this$baseFilters$pro2.value) !== ((_templateFilters$prop2 = templateFilters[prop]) === null || _templateFilters$prop2 === void 0 ? void 0 : _templateFilters$prop2.value)) {
        string = "".concat(string, "&").concat(serializeFilters(_defineProperty({}, prop, this.baseFilters[prop])));
      }

      return string;
    }
  }, {
    key: "getQueryString",
    value: function getQueryString(templateFilters) {
      var _this$baseFilters$cat;

      var categoryFilters = {}; // Exclude blank category unless a search result is occurring
      // and the blank category has not been explicity excluded.

      if (!Object.keys(templateFilters).includes(FilterProps.name) && !((_this$baseFilters$cat = this.baseFilters.categories) === null || _this$baseFilters$cat === void 0 ? void 0 : _this$baseFilters$cat.value.split(',').includes('blank'))) {
        var _this$baseFilters$cat2;

        categoryFilters = _defineProperty({}, FilterProps.categories, {
          operator: FilterOperators['!intersects'],
          value: "".concat((_this$baseFilters$cat2 = this.baseFilters.categories) === null || _this$baseFilters$cat2 === void 0 ? void 0 : _this$baseFilters$cat2.value, ",blank")
        });
      }

      var combined = _extends({}, this.baseFilters, categoryFilters, templateFilters);

      var serialized = serializeFilters(combined);
      serialized = this.appendToQuery(serialized, templateFilters, FilterProps.categories);
      serialized = this.appendToQuery(serialized, templateFilters, FilterProps.tags);
      return serialized;
    }
  }, {
    key: "getLeadpageTemplates",
    value: function getLeadpageTemplates(templateFilters) {
      this.updateClientUrl(templateFilters || {});
      var url = "".concat(this.baseUrl).concat(LEADPAGES_PATH, "?").concat(this.getQueryString(templateFilters || {}));
      return this.request(url);
    }
  }, {
    key: "getSiteTemplates",
    value: function getSiteTemplates(templateFilters) {
      this.updateClientUrl(templateFilters || {});
      var url = "".concat(this.baseUrl).concat(SITES_PATH, "?").concat(this.getQueryString(templateFilters || {}));
      return this.request(url);
    }
  }, {
    key: "getTemplateById",
    value: function getTemplateById(id) {
      var url = "".concat(this.baseUrl).concat(TEMPLATE_PATH, "/").concat(id);
      return this.request(url);
    }
  }, {
    key: "getTaxons",
    value: function getTaxons() {
      var url = "".concat(this.baseUrl).concat(TAXONOMY_PATH, "?").concat(this.taxonQuery);
      return this.request(url);
    }
  }]);

  return MandrelApi;
}();
MandrelApi.getInstance = void 0;
var instance = null;

function getInstance(props) {
  if (!instance) {
    instance = new MandrelApi(props);
  }

  return instance;
}

MandrelApi.getInstance = getInstance;

export default MandrelApi;
export { LEADPAGES_PATH, LIMIT, MandrelApi, REQUEST_HEADERS, SITES_PATH, TAXONOMY_PATH, TEMPLATE_PATH };
