/**
 * Checks if a given value is a plain object (not an array, null, date, etc.).
 *
 * @param {unknown} v - The value to check.
 * @returns {v is Record<string, unknown>} True if the value is a plain object, false otherwise.
 */
const isPlainObject = (v: unknown): v is Record<string, unknown> =>
  Object.prototype.toString.call(v) === '[object Object]'

/**
 * Chooses which array to use based on override and default values.
 * If the override is a non-empty array, it is returned.
 * Otherwise, the default array is returned if present.
 *
 * @template T
 * @param {unknown} overrideVal - The value from the overrides object.
 * @param {unknown} defaultVal - The value from the defaults object.
 * @returns {T[] | undefined} The chosen array, or undefined if neither is an array.
 */
const pickArray = <T>(
  overrideVal: unknown,
  defaultVal: unknown
): T[] | undefined => {
  const o = Array.isArray(overrideVal) ? (overrideVal as T[]) : undefined
  const d = Array.isArray(defaultVal) ? (defaultVal as T[]) : undefined
  return o && o.length > 0 ? o : (d ?? o ?? d)
}

/**
 * Options for the mergeOverridesWithDefaults function.
 *
 * @typedef {Object} MergeOpts
 * @property {boolean} [respectNull=false] - If true, null values in overrides are preserved.
 *                                           If false, null is treated as "no value" and falls back to defaults.
 */
interface MergeOpts {
  respectNull?: boolean
}

/**
 * Deeply merges an "overrides" object into a "defaults" object.
 * - Plain objects are merged recursively.
 * - Arrays use the override array if non-empty, otherwise the default array.
 * - Primitive values prefer the override unless it is undefined (or null when respectNull=false).
 *
 * @template O,D
 * @param {Partial<O>} [overrides={}] - The object containing override values.
 * @param {D} [defaults={}] - The object containing default values.
 * @param {MergeOpts} [opts={}] - Merge options.
 * @returns {D & O} A new object containing merged values from overrides and defaults.
 *
 * @example
 * const defaults = { a: 1, b: { x: 10 }, c: [1, 2] };
 * const overrides = { b: { y: 20 }, c: [] };
 * const result = mergeOverridesWithDefaults(overrides, defaults);
 * // result: { a: 1, b: { x: 10, y: 20 }, c: [1, 2] }
 */
function mergeObjectWithDefaults<
  O extends Record<string, unknown>,
  D extends Record<string, unknown>,
>(
  overrides: Partial<O> = {},
  defaults: D = {} as D,
  opts: MergeOpts = {}
): D & O {
  const { respectNull = false } = opts
  const out: Record<string, unknown> = {}

  const keys = new Set([...Object.keys(defaults), ...Object.keys(overrides)])

  // Convert Set to array for ES5 compatibility (avoids for...of downlevel requirement)
  Array.from(keys).forEach((key) => {
    const o = (overrides as Record<string, unknown>)[key]
    const d = (defaults as Record<string, unknown>)[key]

    if (!respectNull && o === null) {
      out[key] = d
      return
    }

    if (isPlainObject(o) && isPlainObject(d)) {
      out[key] = mergeObjectWithDefaults(o, d, opts)
    } else if (Array.isArray(o) || Array.isArray(d)) {
      out[key] = pickArray(o, d)
    } else {
      out[key] = o !== undefined ? o : d
    }
  })

  return out as D & O
}

export default mergeObjectWithDefaults
