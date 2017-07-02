# Vuex Nested Mutations

This is an enhancer to vuex. It enables you to organise mutations within a single module a little easier.
It was born from this issue: https://github.com/vuejs/vuex/issues/828

## Example use case

Import the enhancer:
```
import {vuexNestedMutations} from 'vuex-nested-mutations'
```

It converts an easy to manage and extend object:
```
mutations: vuexNestedMutations({
  phase: {
    firstPage: {
      add (state) {
        /* some action */
      },
      remove (state) {
        /* some action */
      }
    },
    secondPage: {
      add (state) {
        /* some action */
      },
      remove (state) {
        /* some action */
      }
    }
  }
})
```

Into a dot syntax object that vuex can easily parse.
```
mutations: {
  'phase.firstPage.add' (state) {
    /* some action */
  },
  'phase.firstPage.remove' (state) {
      /* some action */
  },
  'phase.secondPage.add' (state) {
      /* some action */
  },
  'phase.secondPage.remove' (state) {
      /* some action */
  }
}
```

Although with this simple example the gain is not that great, once the application grows and with multiple developers on the project too the benefits are:
1. Less error prone to typo's
1. Smaller code base. In the example above I have already had to type out the word "phase" 4 times.
1. Easier to extend while retaining a strict naming convention.

## Calling the nested mutation
Calling the nested mutation is just like before, but with the dot:
```
this.$store.commit('phase.secondPage.add', {
  pagename: 'bobs',
  relation: 'your uncle'
})
```

## Contributions
Are welcome.
