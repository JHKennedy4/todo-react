class DataStore {
  constructor () {
    this.observers = {}
    this.observed = {}
  }

  observe (id, action) {
    if (this.observers[id]) {
      this.observers[id].append(action)
    } else {
      this.observers[id] = [action]
    }

    if (this.observed[id]) {
      action(this.observed[id])
    }
  }

  init (id, state) {
    if (this.observed[id]) {
      throw new Error('Observed id is taken. observed id must be unique')
    }
    this.observed[id] = state
  }

  mutate (id, mutation) {
    this.observed[id] = mutation(this.observed[id])
    this.observers[id].forEach((action) => {
      action(this.observed[id])
    })
  }
}

export let DS = new DataStore()
