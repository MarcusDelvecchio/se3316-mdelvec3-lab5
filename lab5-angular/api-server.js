require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const jwt = require("express-jwt");
// "This module lets you authenticate HTTP requests using JWT tokens in your
// Node.js applications. It provides several functions that make working with JWTs easier."

const jwksRsa = require("jwks-rsa"); 
// A library to retrieve RSA signing keys from a JWKS (JSON Web Key Set) endpoint.
// "using expressJwtSecret we can generate a secret provider that will provide the right 
// signing key to express-jwt based on the kid in the JWT header"

// body parsing
const bodyParser = require('body-parser');

const asser = require("assert");
const { assert } = require("console");
const MongoClient = require('mongodb').MongoClient;
const mongo = require("mongodb"); // old method?

const app = express();

// bpdy parsing
app.use(express.json());  // for parsing application/json objects passed in POST bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const port = 7000 || process.env.API_PORT;
const appOrigin = process.env.APP_ORIGIN;
const audience = process.env.AUTH0_AUDIENCE;
const issuer = process.env.AUTH0_ISSUER;

const uri = "mongodb+srv://db-user:4OsKw4RG8hnM9tr6@cluster0.nlcvo.mongodb.net/db-name?retryWrites=true&w=majority";
const mongoClient = new MongoClient(uri,{ useNewUrlParser: true, useUnifiedTopology: true });

// use this string to connect to the database
//const dbURI = "mongodb+srv://db-admin-user:dbpass123@cluster0.nlcvo.mongodb.net/lab5-db?retryWrites=true&w=majority";

//const url = "mongodb://localhost:7000/db-admin";

// old
//const client = require('mongodb').MongoClient;
//const router = express.Router();

// todo: add issuer and audience?
if (!issuer || !audience) {
  throw new Error("Please make sure that .env is in place and populated");
}

app.use(morgan("dev"));
app.use(helmet());
app.use(cors({ origin: appOrigin }));


/*router.get('/api/get-course-data', function(req,res,next){
  
});*/

// "you can generate a secret provider that will provide the right signing key to 
//  express-jwt based on the kid in the JWT header"
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuer}.well-known/jwks.json`,
    handleSigningKeyError: (err, cb) => {
      if (err instanceof jwksRsa.SigningKeyNotFoundError) {
        return cb(new Error('This is bad'));
      }
      return cb(err);
    }
    
  }),

  audience: audience,
  issuer: issuer,
  algorithms: ["RS256"],
});

/*
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
// OLD
router.post('/api/:user/writeData', function(req, res, next){

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
*/

// write data to PRIVATE collection
app.post("/api/user/update-data"/*, checkJwt*/, (req, res)=> {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7000');

  // get user from body
    //let username = req.body.user; set user once you pass in scheduleDataInfo
    // todo add username after posting scheduleDataInfo

  // **todo very user is unique?**

  // user specific data to be sent to user specific collection
    let privateScheduleData = req.body;
    console.log(req.body);
    console.log(req.body.scheduledataInfo);
    let name = req.body.scheduledataInfo["test"].creator;
    //console.log(name);

    /*let userData = {
      scheduleDataInfo: {
        description: req.body.description,
        modified: req.body.modified,  
        length: req.body.description,
        creator: req.body.creator,
        expanded: req.body.expanded,
        visibility: req.body.visibility,
      },
      scheduleData: {

      }
    }*/
    //req.body;
    //delete userData.user; NOT DOING THIS ANYMORE USER IS PASSED IN SCHEDULEDATAINFO AS "CREATOR"

      // todo delete unneeded properties like expanded?

    return mongoClient.connect()
    .then(() => { // todo add username after posting scheduleDataInfo
        mongoClient.db("db-name").collection("test").insertOne(privateScheduleData);
        return res.status(201).send(privateScheduleData); // token here maybe?
    })
    .catch(err => {
        console.log("Error storing user\n",err);
        return res.status(500).send("Failed to store user info.");
    });
});

// write data to PUBLIC collection
  app.post("/api/public/update-data", checkJwt, (req, res)=> {

    // public data to be sent to public collection
    
    let publicData = {
      publicSchedules: null // reau.body....
      // ...
    }

    // *** might need to stringify data **
      // todo
    
    /* public collection includes:
     *    - user reviews
     *    - pbulic course lists
     * 
     */

    return mongoClient.connect()
    .then(() => {
        mongoClient.db("db-name").collection("public").insertOne(publicData);
        return res.status(201).send(body); // token here maybe?
    })
    .catch(err => {
        console.log("Error storing user\n",err);
        return res.status(500).send("Failed to store user info.");
    });
  });

/*
app.get("/api/user/signIn", checkJwt, (req, res)=> {

  // validating user exists
    const valideUserExists = mongoClient.connect()
    .then(() => {

        let userExists = false;

        const dbCollection = mongoClient.db("db-name").collection("users").find();
        collection.forEach(e => {
                if (e.username === body.username) {
                    userExists = true;
                }
            },
            () => {
                collection.close();
                return userExists;
        });
        return userExists;
    })
    .catch(err => {
        console.log(err);
    });
    return userExistsValidation
      .then(() => {
          if (userExistsValidation) {
              return res.status(400).send(`${req.body.username} already exists!`);
          }
      // hash password
          return bcrypt.hash(body.password, 10)
              .then(hashedPassword => {

                  body.password = hashedPassword;

              // store hashed password to db
                  return mongoClient.connect()
                      .then(() => {
                          mongoClient.db("db-name").collection("users").insertOne(body);
                          return res.status(201).send(body); // token here maybe?
                      })
                      .catch(err => {
                          console.log("Error storing user\n",err);
                          return res.status(500).send("Failed to store user info.");
                      });
              })
              .catch(err => {
                  console.log("Error hashing with bcrypt\n", err);
                  return res.status(500).send("Failed to hash and store password.");
              });
      })
      .catch(err => {
          console.log("Error when checking username uniqueness",err);
          return res.status(500).send("Failed to verifiy username.");
      });

  });
*/

app.listen(port, () => console.log(`API Server listening on port ${port}`));

