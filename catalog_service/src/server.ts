import expressApp from "./expressApp";

const PORT = process.env.PORT || 3000;

export const StartServer = async () => {
  expressApp.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  process.on("uncaughtException", (error: Error) => {
    console.error(`Uncaught Exception: ${error.message}`);
    process.exit(1);
  });
};

StartServer().then(() => {
  console.log("Server is up");
});
