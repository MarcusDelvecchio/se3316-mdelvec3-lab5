require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");
const mongo = require("mongodb");
const asser = require("assert");
const { assert } = require("console");

const app = express();

const port = 7000 || process.env.API_PORT;
const appOrigin = process.env.APP_ORIGIN;
const audience = process.env.AUTH0_AUDIENCE;
const issuer = process.env.AUTH0_ISSUER;

// use this string to connect to the database
const dbURI = "mongodb+srv://db-admin-user:dbpass123@cluster0.nlcvo.mongodb.net/lab5-db?retryWrites=true&w=majority";
const url = "mongodb://localhost:7000/db-admin";

const router = express.Router();

router.get('/api/get-course-data', function(req,res,next){
  
});

// getting db collection items
router.get('/api/get-data', function(req, res, next){
  var resultArry = [];
  mongo.connect(url, function(err, db){ // try to connect to url and pass in function to run once connected or failed
    assert.equal(null, err);  // ensure error is null
    
    var cursor = db.collection('courses').find();
    cursor.array.forEach(element => {
      assert.equal(null, err); // might break in other cases if we have items with no contents?
      resultArry.push(element);
    }, function(){
      db.close();
      //res.render('' render a page AFTER the content is sure to be receieved
    });
  })
});

// change 'insert' to something more specific but doing this now as template for insert
router.post('/api/insert', function(req, res, next){

  var itemToInsert = {
    property1: req.body.property1,
    property2: req.body.property2,
  };

  // inserting the item
  mongo.connect(url, function(err, db){ // try to connect to url and pass in function to run once connected or failed
    assert.equal(null, err);  // ensure error is null

    db.collection("courses").insertOne(item, function(err, result){ // specifying the collection in the db to insert into, the item to insert, and callback to be called
      assert.equal(null, err);
      console.log("Item inserted");
      db.close();
    }); 
  })
  
});

// todo: add issuer and audience?
if (!issuer || !audience) {
  throw new Error("Please make sure that .env is in place and populated");
}

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: appOrigin }));

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuer}.well-known/jwks.json`,
  }),

  audience: audience,
  issuer: issuer,
  algorithms: ["RS256"],
});

app.get("/api/messages/public-message", (req, res) => {
  res.send({
    message: "The API doesn't require an access token to share this message.",
  });
});

app.get("/api/messages/protected-message", checkJwt, (req, res) => {
  res.send({
    message: "The API successfully validated your access token.",
  });
});

app.listen(port, () => console.log(`API Server listening on port ${port}`));
