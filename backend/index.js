/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//External Package Imports
const express = require('express');
const {setGlobalOptions} = require("firebase-functions/v2");
const {onRequest} = require("firebase-functions/v2/https");

//Project Utilities
const {initializeSwaggerUI} = require('./utils/SwaggerWrapper');

//Project Service Account
//Place it here after

setGlobalOptions({ maxInstances: 10 });

//Instantiate express.js, firebase instance & service account
const app = express();
// const admin = getAdmin();
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });

//Instantiate API route classes AFTER express.js is created 
// const proxyHello = require("./proxy/hello");
// const v1Hello = require("./backend/hello");

//Define the route paths and their corresponding definitions
// app.use('/proxy/hello', proxyHello);
// app.use('/v1/hello', v1Hello);

//Create Swagger UI page for the provided API application
initializeSwaggerUI(app, '/docs', ["./proxy/*.js", "./backend/*.js"]);

//Export API to HTTPS server
exports.api = onRequest(app);
