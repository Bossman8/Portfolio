var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3800;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("public"));

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
