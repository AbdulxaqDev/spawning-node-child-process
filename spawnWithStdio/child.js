process.stdin.on("data", (message) => {
  console.log(message.toString());
  process.exit(0)
});

process.stdout.write("child-message-stdio");
