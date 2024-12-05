const Emitter = {
  events: {},

  on(event, cb) {
    Emitter.events[event] = Emitter.events[event] || [];
    Emitter.events[event].push(cb);
  },

  emit(event) {
    if (event in Emitter.events === false) {
      return;
    }

    Emitter.events[event].forEach((e) => {
      e();
    });
  },
};

Emitter.on("click", console.log("clicou 1"));
Emitter.on("click", console.log("clicou 2"));

Emitter.emit("click");

export { Emitter };
