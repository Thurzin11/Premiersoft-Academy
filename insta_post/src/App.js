import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const App = {
  async start() {
    Timer.init(0.1 * 60);
    try {
      await Notifyer.init();
      Emitter.on("countdown-start", () => {
        Notifyer.notify({
          title: "Hora do post",
          body: "Crie um post para melhorar sua engajamento",
        });
      });

      Emitter.on("countdown-end", () => {
        Timer.init();
      });
    } catch (error) {
      console.error(error.message);
    }
  },
};

export { App };
