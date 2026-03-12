const app = require("./app");
const connectDB = require("./config/db");

require("dotenv").config();

connectDB();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
