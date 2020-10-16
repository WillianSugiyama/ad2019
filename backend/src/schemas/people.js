import mongoose from "mongoose";

const People = mongoose.Schema({
  name: String,
  email: String,
  friend: String
});

const mongooseModel = mongoose.model("People", People);

export default mongooseModel;
