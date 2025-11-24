import mongoose from "mongoose";
const urlSchema=new mongoose.Schema({
    shortCode:String,
    longUrl:String
})
//collection creation takes place below
export const Url=mongoose.model("ShortURL", urlSchema)
//Hey, I want to create a collection in MongoDB that stores documents following the structure of urlSchema."
//"ShortURL" is not the collection itself — it’s the model name.
//           ----urlSchema--
//Defines the structure of each document (fields, types, validation)