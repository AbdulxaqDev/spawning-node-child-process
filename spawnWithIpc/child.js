process.on("message", (message) => {
  console.log("[Child] received:", message);
  process.exit(0)
});

process.send("child-message");

