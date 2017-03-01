class DataStore {
  constructor () {
    this.observers = {}

    this.observable = {}
  }

  observe (id, action) {
    if (this.observers[id]) {
      this.observers[id].append(action)
    }
  }

  create (id, state) {
  }

  update (id, state) {
  }
}

export default DS = new DataStore()
