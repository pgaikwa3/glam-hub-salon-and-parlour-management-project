const express = require("express");
const app = express();

const bookingRoutes = require("./routes/bookingRoutes");

app.use(express.json());

app.use("/api", bookingRoutes);

app.get("/", (req, res) => {
  res.send("Glam Hub Backend Running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
