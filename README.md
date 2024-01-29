## Example of node child_process spawning with:
- ### Stdio (**Standard input, output and error**)

<code>main.js</code>
```javascript
const { spawn } = require("child_process");

const childProcess = spawn("node", [`${__dirname}/child.js`], { stdio: ["pipe", "pipe", "pipe"] });

childProcess.stdout.on("data", (message) => {
  console.log(message.toString());
});

childProcess.stdin.write("main-message-stdio");
```

<code>child.js</code>
```javascript
process.stdin.on("data", (message) => {
  console.log(message.toString());
  process.exit(0)
});

process.stdout.write("child-message-stdio");
```
---
- ### IPC (**Inter Process Communication**)

<code>main.js</code>
```javascript
const { spawn } = require("child_process");

const childProcess = spawn("node", [`${__dirname}/child.js`], { stdio: ["inherit","inherit","inherit", "ipc"] });

childProcess.on("message", (message) => {
  console.log("[Main] received:", message);
});

childProcess.send("main-message-ipc");
```

<code>child.js</code>
```javascript
process.on("message", (message) => {
  console.log("[Child] received:", message);
  process.exit(0)
});

process.send("child-message-ipc");
```
