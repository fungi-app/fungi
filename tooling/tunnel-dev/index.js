#!/usr/bin/env node
const fs = require("fs/promises");
const ngrok = require("ngrok");

async function main() {
  let [_a, _b, out, port, region] = process.argv;
  const addr = port ? parseInt(port) : 3000;
  console.log("HI", out, port, region);

  try {
    await fs.access(out);
  } catch {
    console.log("Couldn't access out file, trying to create it...");
    await fs.writeFile(out, "");
    console.log("Created out file");
  }

  const url = await ngrok.connect({
    addr,
    region: region ? region : "eu",
  });
  console.log(`Tunneled ${addr} through ngrok: ${url}`);

  // handling exits
  const handleExit = () => ngrok.kill();

  ["exit", "SIGINT", "SIGUSR1", "SIGUSR2", "uncaughtException"].forEach((c) =>
    process.on(c, handleExit)
  );

  // writing to file
  fs.writeFile(out, JSON.stringify({ url }), "utf-8");
}

main();
