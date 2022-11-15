class Storage {
  setItem (key, value) {
    if (value) {
      window.localStorage.setItem(key, JSON.stringify(value))
    }
  }

  getItem (key) {
    let value = window.localStorage.getItem(key)
    if (value) {
      value = JSON.parse(value)
    }
    return value
  }

  removeItem (key) {
    window.localStorage.removeItem(key)
  }

  clear () {
    window.localStorage.clear()
  }
}

export default new Storage()
