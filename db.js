import mongoose from "mongoose";
export const connection = mongoose.createConnection("mongodb://localhost:27017");
connection.on("open", () => {
  console.log("Mongoose connection");
});
connection.on("erro", () => {
  console.log("Mongoose connection error");
});
