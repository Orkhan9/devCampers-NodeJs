const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({succes:true,msg:'get all bootcamps'})
});

router.get('/:id',(req,res)=>{
    res.status(200).json({succes:true,msg:`get a bootcamp ${req.params.id}`})
});

router.post('',(req,res)=>{
    res.status(200).json({succes:true,msg:'create a bootcamp'})
});

router.put('/:id',(req,res)=>{
    res.status(200).json({succes:true,msg:`update a bootcamp ${req.params.id}`})
});

router.delete('/:id',(req,res)=>{
    res.status(200).json({succes:true,msg:`delete a bootcamp ${req.params.id}`})
});

module.exports=router;