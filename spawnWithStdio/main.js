const { spawn } = require("child_process");

const childProcess = spawn("node", [`${__dirname}/child.js`], { stdio: ["pipe", "pipe", "pipe"] });

childProcess.stdout.on("data", (message) => {
  console.log(message.toString());
});

childProcess.stdin.write("main-message-stdio");
