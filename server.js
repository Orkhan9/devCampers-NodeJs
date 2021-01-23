const express=require('express');
const dotenv=require('dotenv');

//Load env vars
dotenv.config({path:'./config/config.env'});

const app=express();

app.get('/api/v1/bootcamps',(req,res)=>{
    res.status(200).json({succes:true,msg:'get all bootcamps'})
});

app.get('/api/v1/bootcamps/:id',(req,res)=>{
    res.status(200).json({succes:true,msg:`get a bootcamp ${req.params.id}`})
});

app.post('/api/v1/bootcamps',(req,res)=>{
    res.status(200).json({succes:true,msg:'create a bootcamp'})
});

app.put('/api/v1/bootcamps/:id',(req,res)=>{
    res.status(200).json({succes:true,msg:`update a bootcamp ${req.params.id}`})
});

app.delete('/api/v1/bootcamps/:id',(req,res)=>{
    res.status(200).json({succes:true,msg:`delete a bootcamp ${req.params.id}`})
});

const PORT=process.env.PORT || 5000

app.listen(PORT,console.log(`Server running on port ${PORT} ${process.env.NODE_ENV} `));