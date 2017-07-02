export function vuexNestedMutations (value, keys = '', obj = {}) {
  if (typeof value === 'object') {
    for (let index in value) {
      vuexNestedMutations(value[index], (keys && keys + '.') + index, obj)
    }
  } else {
    obj[keys] = value
  }
  return obj
}