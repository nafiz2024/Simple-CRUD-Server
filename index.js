const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// simpleCrudUser
// KSZmFLI9b6afJjR4

// mongodb+srv://simpleCrudUser:KSZmFLI9b6afJjR4@cluster0.uwxm1bp.mongodb.net/?appName=Cluster0

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Simple CRUD server is serving you!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
