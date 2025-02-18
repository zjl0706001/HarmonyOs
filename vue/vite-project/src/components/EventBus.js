export const emitter = {
  listeners: {},
  emit(event, ...args) {
    if (this.listeners[event]) {
      for (const handler of this.listeners[event]) {
        handler(...args);
      }
    }
  },
  on(event, handler) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(handler);
  },
};
