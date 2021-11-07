const express = require("express");
const mongoose = require('mongoose')
const Router = require("./routes")
const app = express();
app.use(express.json());
app.use(Router);

const url = `mongodb+srv://raja1:ponraja565@cluster0.qlkew.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.listen(8000, () => {
    console.log("Server is running at port 8000");
  });

