console.log("hello backend fooders");
const express = require("express") ;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// import cookieParser from "cookie-parser";
const cors = require("cors")
const app = express();
dotenv.config()

const productRouter = require("./routes/productRoute")
const userRouter = require("./routes/userRoute")


app.use(cors())
app.use(express.json())
// app.use(cookieParser())


app.use("/user", userRouter)
app.use("/post", productRouter)




const connect = async () => {
  try {
    mongoose.connect(process.env.MONGO);
    console.log('connected to mongodb!');
  } catch (error) {
    throw error;
  }
};

app.listen(8000, () => {
  console.log("server listening at port8000");
  connect();
});
