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

// write data to PRIVATE collection
app.post("/api/user/update-data"/*, checkJwt*/, (req, res)=> {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:7000');

  // get user from body
    let username = req.body.user; //set user once you pass in scheduleDataInfo
  
  // **todo ensure user is unique?**

  // user specific data to be sent to user specific collection
    let privateScheduleData = req.body;
  
  // delete the user property because we no longer need it
    delete privateScheduleData.user
    console.log(req.body);

  // todo delete unneeded properties like expanded?
      // need to add it back after getting so save for later

    return mongoClient.connect()
    .then(() => { 
        mongoClient.db("db-name").collection(username).insertOne(privateScheduleData);
        return res.status(201).send(privateScheduleData); // token here maybe?
    })
    .catch(err => {
        console.log("Error storing user\n",err);
        return res.status(500).send("Failed to store user info.");
    });
});

// write data to PUBLIC collection
  app.post("/api/public/update-data"/*, checkJwt*/, (req, res)=> {

      // get user from body
      let username = req.body.user; //set user once you pass in scheduleDataInfo
  
      // **todo ensure user is unique?**
    
      // user specific data to be sent to user specific collection
        let publicScheduleData = req.body;
      
      // delete the user property because we no longer need it
        delete publicScheduleData.user
        console.log(req.body);
    
      // todo delete unneeded properties like expanded?
          // need to add it back after getting so save for later
    
        return mongoClient.connect()
        .then(() => { 
            mongoClient.db("db-name").collection("public-schedules").insertOne(publicScheduleData);
            return res.status(201).send(publicScheduleData); // token here maybe?
        })
        .catch(err => {
            console.log("Error storing user\n",err);
            return res.status(500).send("Failed to store user info.");
        });
  });

  app.get("/api/public/scheduleData", (req, res) => {

    return mongoClient.connect()
      .then( () => {
        const scheduleCollection = mongoClient.db("db-name").collection("public-schedules").find();

        return new Promise((resolve, reject) => {
          scheduleData = {};

          scheduleCollection.forEach( e => {
            console.log(e);
            scheduleData["scheduleDataInfo"] = e.scheduleDataInfo;
            scheduleData["scheduleData"] = e.scheduleData;
          }, 
          () => {   // callback executed after forEach
            scheduleCollection.close();
            
            if(scheduleData){
              console.log(scheduleData);
              resolve(scheduleData);  
            }
            else{
              reject("could not get data");
            }
          });
        })
        }).then( (scheduleData) => {
          return res.status(201).send(scheduleData);
        }).catch((error) => {
          console.log(error);
          return res.status(400).send();
        })
      .catch(error => {
        console.log("could not connect to db");
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

