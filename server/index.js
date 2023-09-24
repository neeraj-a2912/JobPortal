const express = require("express");
app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

// connect DB
const conn = require("./connection");
conn();
// routers
const authRouter = require("./routes/auth.js");
const jobRouter = require("./routes/jobs.js");

//routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Listening at Port ${PORT}`);
});
