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
app.use('/', express.static("static"));


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
issuer: 'https://dev-29yydtaj.us.auth0.com/',
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
          console.log("could not connect to private schedule info database\n",err);
          return res.status(401).send("Failed to store user info.");
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
            console.log("could not connect to public schedule info database\n",err);
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

  app.get("/api/:username/scheduleData"/*, checkJwt*/, (req, res) => {

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

// add admin 

  app.post("/api/admin/add", checkJwt, (req, res)=> {

    // get user from body
    let username = req.body.user; //set user once you pass in scheduleDataInfo

      return mongoClient.connect()
      .then(() => { 
          mongoClient.db("db-name").collection("public-admin").insertOne(username);
          return res.status(201).send(publicScheduleData); // token here maybe?
      })
      .catch(err => {
          console.log("Error storing admin\n",err);
          return res.status(500).send("Failed to store admin info.");
      });
  });

// add manager

  app.post("/api/manager/add", checkJwt, (req, res)=> {

    // get user from body
    let username = req.body.user; //set user once you pass in scheduleDataInfo

      return mongoClient.connect()
      .then(() => { 
          mongoClient.db("db-name").collection("managers").insertOne(username);
          return res.status(201).send(publicScheduleData); // token here maybe?
      })
      .catch(err => {
          console.log("Error storing admin\n",err);
          return res.status(500).send("Failed to store admin info.");
      });
  });

  // get admin
  // changhe to compare if admin so we don't send admin data back to client?

  app.get("/api/admin/get", checkJwt, (req, res) => {

    return mongoClient.connect()
      .then( () => {
        const scheduleCollection = mongoClient.db("db-name").collection("admin").find();

        return new Promise((resolve, reject) => {
          admin;

          scheduleCollection.forEach( e => {
            admin = e;
          }, 
          () => {   // callback executed after forEach
            scheduleCollection.close();
            
            if(admin){
              console.log(admin);
              resolve(admin);  
            }
            else{
              reject("could get admin info");
            }
          });
        })
        }).then( (admin) => {
          return res.status(201).send(admin);
        }).catch((error) => {
          console.log(error);
          return res.status(400).send();
        })
      .catch(error => {
        console.log("could not connect to db");
      });
  });

  // get managers

  app.get("/api/manager/get", checkJwt, (req, res) => {

    return mongoClient.connect()
      .then( () => {
        const scheduleCollection = mongoClient.db("db-name").collection("managers").find();

        return new Promise((resolve, reject) => {
          managers = [];

          scheduleCollection.forEach( e => {
            managers.push(e);
          }, 
          () => {   // callback executed after forEach
            scheduleCollection.close();
            
            if(managers){
              console.log(managers);
              resolve(managers);  
            }
            else{
              reject("could get manager info");
            }
          });
        })
        }).then( (managers) => {
          return res.status(201).send(managers);
        }).catch((error) => {
          console.log(error);
          return res.status(400).send();
        })
      .catch(error => {
        console.log("could not connect to db");
      });
  });

// get users
  app.get("/api/user/get", checkJwt, (req, res) => {

    return mongoClient.connect()
      .then( () => {
        const userCollection = mongoClient.db("db-name").collection("users").find();

        return new Promise((resolve, reject) => {
          users = [];

          userCollection.forEach( e => {
            users.push(e);
          }, 
          () => {   // callback executed after forEach
            userCollection.close();
            
            if(users){
              console.log(users);
              resolve(users);  
            }
            else{
              reject("could get user info");
            }
          });
        })
        }).then( (users) => {
          return res.status(201).send(users);
        }).catch((error) => {
          console.log(error);
          return res.status(400).send();
        })
      .catch(error => {
        console.log("could not connect to db");
      });
  });

  //get review data
  app.get("/api/get/reviews", (req, res) => {

    return mongoClient.connect()
      .then( () => {
        const userCollection = mongoClient.db("db-name").collection("reviews").find();

        return new Promise((resolve, reject) => {
          reviews = [];

          userCollection.forEach( e => {
            reviews.push(e);
          }, 
          () => {   // callback executed after forEach
            userCollection.close();
            
            if(reviews){
              console.log(reviews);
              resolve(reviews);  
            }
            else{
              reject("could get reviews info");
            }
          });
        })
        }).then( (reviews) => {
          return res.status(201).send(reviews);
        }).catch((error) => {
          console.log(error);
          return res.status(400).send();
        })
      .catch(error => {
        console.log("could not connect to db");
      });
  });

  // update review data
  
  app.post("/api/reviews", checkJwt, (req, res)=> {

    // user specific data to be sent to user specific collection
      let reviews = { reviewData: req.body }; // has to be an object

      return mongoClient.connect()
      .then(() => { 
          mongoClient.db("db-name").collection("reviews").insertOne(reviews);
          return res.status(201).send(reviews); // token here maybe?
      })
      .catch(err => {
          console.log("could not connect to review info database\n",err);
          return res.status(500).send("Failed to store review info.");
      });
});




  

  /*app.post("/api/reviews", checkJwt, (req, res)=> {

    // user specific data to be sent to user specific collection
      let reviewData = req.body;

      return mongoClient.connect()
      .then(() => { 
          mongoClient.db("db-name").collection("reviews").insertOne(reviewData);
          return res.status(201).send(reviewData); 
      })
      .catch(err => {
          console.log("could not connect to public review info database\n",err);
          return res.status(500).send("Failed to store review data.");
      });
  });*/

  // add user to db

  //app.post("/api/reviews", checkJwt, (req, res)=> {




app.listen(port, () => console.log(`API Server listening on port ${port}`));

