const express = require("express");
const cors = require("cors"); 
const app = express();
const horoscopeRoute = require("./routes/horoscopeRoute");
const PORT = 9898;


app.use(cors());
app.use(express.json());


app.use("/", horoscopeRoute);


app.listen(PORT, () => {
  console.log(`server running on port: ${PORT}`);
});