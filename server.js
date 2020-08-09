const MongoClient = require('mongodb').MongoClient;
express = require("express"),
    app = express();

var port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get("/test", function (request, response) {
  var user_name = request.query.user_name;
  response.end("Hello " + user_name + "!");
});

app.listen(port);
console.log("Listening on port ", port);

require("cf-deployment-tracker-client").track();



//database connection 
const uri = "mongodb+srv://sit725:sit725@sit725.xjiqt.mongodb.net/reckoning?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,useUnifiedTopology: true });



//Journal Collection handler

let journalCollection;
const openConnection = (message) => {
  client.connect((err,db) => {
    journalCollection = client.db("reckoning").collection("journals");
    if(!err){
      console.log('Database Connected')
    }
  });
}


openConnection()