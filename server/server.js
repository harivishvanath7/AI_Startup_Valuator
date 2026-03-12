const app = require("./app");
const connectDB = require("./config/db");

require("dotenv").config();

// DB Connection
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on Port: ${PORT}`);
});
