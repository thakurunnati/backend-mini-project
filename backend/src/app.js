console.log("file loaded")
const express= require('express')
const multer= require('multer')
const uploadFile= require('./service/storage')
const postModel= require('./models/post')
const cors= require('cors')

const app= express()// instance create kia 
app.use(cors())
app.use(express.json());
const upload= multer({storage: multer.memoryStorage()})
app.post("/create_p",upload.single("image"),async(req,res)=>{
const result= await uploadFile(req.file.buffer)

const post = await postModel.create({
    image: result.url,
    fieldId: result.fileId,
    caption: req.body.caption
})
return res.status(201).json({
    message:"post created successfully"
})
})

app.get("/posts", async(req,res)=>{
const posts= await postModel.find()
return res.status(200).json({
    message:"posts fetched successfully",
    posts
})
})





module.exports= app