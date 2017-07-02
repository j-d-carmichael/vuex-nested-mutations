import { vuexNestedMutations } from '../'

let testObject = {
  parts: {
    x: {
      create: (state) => {
        return state
      },
      update: {
        one: (state) => {
          return state
        },
        two: (state) => {
          return state
        }
      }
    },
    y: {
      create: (state) => {
        return state
      },
      update: (state) => {
        return state
      }
    }
  }
}

describe('VuexNestedMutations Tests', () => {

  let newObject = vuexNestedMutations(testObject)

  it('Key exists for "parts.x.create"', (done) => {
    if (typeof newObject['parts.x.create'] === 'function') {
      done()
    } else {
      done('The expected key was not found')
    }
  })

  it('Key exists for deeper nesting "parts.x.update.one"', (done) => {
    if (typeof newObject['parts.x.update.one'] === 'function') {
      done()
    } else {
      done('The expected key was not found')
    }
  })

  it('State is retained by string', (done) => {
    let stateTest = 'test state string'
    if (newObject['parts.x.update.one'](stateTest) === stateTest) {
      done()
    } else {
      done('The states did not match on string returned')
    }
  })

  it('State is retained by object', (done) => {
    let stateTest = {
      test: {
        a: 1,
        b: {
          c: 3
        }
      }
    }
    if (JSON.stringify(newObject['parts.x.update.one'](stateTest)) === JSON.stringify(stateTest)) {
      done()
    } else {
      done('The states did not match on object returned')
    }
  })
})
