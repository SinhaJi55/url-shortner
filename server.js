import express from 'express'
import mongoose from 'mongoose';
import { ShortUrl } from './Controllers/Url.js';
import { getOriginalUrl } from './Controllers/Url.js';
const app=express();
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
mongoose.connect(
    "mongodb+srv://ritiksinha863_db_user:Ej0MNYCCappandk9@cluster0.0fcksyc.mongodb.net/",
    {
        dbName:"Nodejs_Mastery_Course"
    }
).then(()=>console.log("mongodb connected..")).catch(()=>console.log("failed"))

//rendering the ejs files
app.get('/',(req,res)=>{
   res.render('index.ejs',{ShortUrl:null})
})
//shorting url logics
app.post('/short',ShortUrl);
app.get("/:shortCode",getOriginalUrl);
const port =1000;
app.listen(port,()=>console.log('hello'));