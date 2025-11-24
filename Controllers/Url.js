import shortid from "shortid";
import {Url} from "../Models/Url.js"
export const ShortUrl=async (req,res)=>{
   const longUrl=req.body.longurl;
   const shortCode=shortid.generate();
   const ShortUrl=`http://localhost:1000/${shortCode}`
   //save db
   const newUrl=new Url({shortCode,longUrl})
   await newUrl.save();
   
     res.render("index.ejs",{ShortUrl});
}
export const getOriginalUrl=async (req,res)=>{
    const shortCode=req.params.shortCode;
    //find on database
    const OriginalUrl=await Url.findOne({shortCode})
    if(OriginalUrl){

        res.redirect(OriginalUrl.longUrl);
    }
    else{
        res.json({message:"Invalid Shortcode"})
    }
}