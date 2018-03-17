import { initializeApp } from "firebase";

// configure the firebase app
const app = initializeApp({
  apiKey: "AIzaSyCvBuiA7eSnkZkU7wSTgG77rgwSgR92MVY",
  databaseURL: "https://abnormal-weather.firebaseio.com",
  projectId: "abnormal-weather"
});

// get reference to the firebase database
const database = app.database();

// export reference to database
export default database;
