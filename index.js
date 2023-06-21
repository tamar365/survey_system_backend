require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectDB } = require("./DL/db.js");
const {
  surveyRoute,
  userRoute,
  answerRoute,
  questionRoute,
} = require("./Routes/router.js");

const app = express();
app.use(
  cors({
    origin: "https://survey-services.netlify.app",
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users", userRoute);
app.use("/api/surveys", surveyRoute);
app.use("/api/questions", questionRoute);
app.use("/api/answers", answerRoute);

connectDB().then(() => {
  console.log("Connected to DB successfully");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
