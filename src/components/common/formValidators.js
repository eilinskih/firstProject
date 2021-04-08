
export const Required = (value) => {
if (value) return undefined
return "Field is required"
}

export const MaxLenght = (max) => (value) => {
if (value.length > max) return `Max length is ${max} symbols`
return undefined
}

export const isEmail = (value) => {
if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return 'Invalid email address'
  return undefined
}