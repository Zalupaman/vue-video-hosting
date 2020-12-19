const express =  require("express");
const app = express();
const port =  process.env.PORT || 4000;
const cors = require('cors');
const parser = require("body-parser").json()

app.use(cors());
app.use(express.urlencoded({
    extended: true
}));
app.use(parser)
app.use('/api/test', require("./routes/test"));
app.use('/api/user', require("./routes/user"));
app.use('/api/video', require("./routes/video"));
app.listen(port)
