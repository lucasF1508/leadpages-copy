const rules = {
  email: {
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      message: 'Invalid email address',
    },
  },
  tel: {
    pattern: {
      value:
        /^\+?((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/i,
      message: 'Invalid Phone Number',
    },
  },
}

const useFormValidation = ({ type, required, errorMessage }) => ({
  ...(rules[type] || {}),
  ...(required ? { required: errorMessage || 'This field is required' } : {}),
})

export default useFormValidation
