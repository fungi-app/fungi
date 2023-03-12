const fs = require("fs");
fs.readdirSync("./dist/client").forEach((f) => {
  if (!f.endsWith(".node")) return;
  fs.copyFileSync(`./dist/client/${f}`, `./dist/${f}`);
});
