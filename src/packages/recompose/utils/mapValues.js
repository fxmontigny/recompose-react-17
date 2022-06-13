const mapValues = (obj, func) => {
  const result = {}
  /* eslint-disable */
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = func(obj[key], key)
    }
  }
  /* eslint-enable no-restricted-syntax */
  return result
}

export default mapValues
