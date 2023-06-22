import { Piscina } from "piscina";

const piscina = new Piscina({
  // The URL must be a file:// URL
  filename: new URL("./worker.mjs", import.meta.url).href
});

//run task contemporaneamente
(async function () {
  const result = await Promise.all([
    piscina.run({ a: 4, b: 6 }, { name: "add" }),
    piscina.run({ a: 4, b: 6 }, { name: "multiply" }),
    piscina.run({ a: 4, b: 6 }, { name: "multiply100" })
  ]);
  console.log(result);
})();
