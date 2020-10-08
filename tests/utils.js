function flushPromises() {
  return new Promise(setImmediate);
}

export { flushPromises };
