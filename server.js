//File khoi dong network nodejs
//Khai bao port va khoi dong server
//Khong phai file nhung midleware

const app = require("./src/app");

const PORT = 3055;

const server = app.listen(3055, () => {
  console.log(`WSV eCommerce server listening ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log(`Exit Server Express`));
});
