require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const jwt = require("express-jwt");
const timetable = require("./src/Lab3-timetable-data.json");
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
app.use(bodyParser.json())


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

// part of the API that will connect with auth) and verify the token with the audience
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 20,
      jwksUri: `${issuer}.well-known/jwks.json`,
      handleSigningKeyError: (err, cb) => {
        if (err instanceof jwksRsa.SigningKeyNotFoundError) {
          return cb(new Error('This is bad'));
        }
        return cb(err);
      }
}),
audience: 'http://lab5-angular',
issuer: 'https://dev-lrzuaei7.us.auth0.com/',
algorithms: ['RS256']
});

// NOTE: every (protected) route with checkJwt must be added to allowedList[] in app.module.ts AuthModule.forRoot

// write data to PRIVATE collection

  app.post("/api/user/update-data", checkJwt, (req, res)=> {
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

  app.post("/api/public/update-data", checkJwt, (req, res)=> {

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

  app.get("/api/courseData", (req, res) => {

    // validation ??
    res.send(timetable)
  })

// GET public api data ( no need to be authorized, no jwtCheck to check token)
  
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

// get PRIVATE course list data (with username reoute param)

  app.get("/api/:username/scheduleData", checkJwt, (req, res) => {

    let username = req.params.username;

    return mongoClient.connect()
      .then( () => {
        const scheduleCollection = mongoClient.db("db-name").collection(username).find();

        return new Promise((resolve, reject) => {
          scheduleData = {};

          scheduleCollection.forEach( e => {
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

app.listen(port, () => console.log(`API Server listening on port ${port}`));

