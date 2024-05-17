const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const router = require("./routes/router");
const db = require("./config/db");
const port = process.env.PORT;


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use('/myUploads', express.static("myUploads"));





app.use("/", router);

app.listen(port, () => {
    console.log(`Server started ${port}`);
});