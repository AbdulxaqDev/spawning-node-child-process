const { spawn } = require("child_process");

const childProcess = spawn("node", [`${__dirname}/child.js`], { stdio: ["inherit","inherit","inherit", "ipc"] });

childProcess.on("message", (message) => {
  console.log("[Main] received:", message);
});

childProcess.send("main-message");