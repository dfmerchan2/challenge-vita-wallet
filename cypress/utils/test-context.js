class TestContext {
  constructor() {
    this.store = new Map();
  }

  set(key, value) {
    this.store.set(key, value);
  }

  get(key) {
    return this.store.get(key);
  }

  clear() {
    this.store.clear();
  }

  has(key) {
    return this.store.has(key);
  }
}

export const testContext = new TestContext();
