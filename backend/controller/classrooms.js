const { Error } = require('mongoose');
const Classroom =  require('../models/Dashboard');

exports.create = async (req,res)=>{

    try{
        const classroom = new Classroom(req.body);

        const createClassroom = await classroom.save();

        res.status(201).json({
            success: true,
            classroom : createClassroom
        });

    }catch(e){
        res.status(401).json({
            success: false,
            error:e.message
    })
}}


exports.bycid = async(req,res) => {
    try{
        const _id = req.params.id;
        const ClassData = await Classroom.findById(_id);

        if(!ClassData){
            return res.status(404).json({
                success:false,
                error: "Class Not Found",
            });
        }else{
            res.status(201).json({
                success:true,
                classroom:ClassData
            })
        }

    }catch(e){
        res.status(400).json({
        success: false,
        error:e.message
    })
}
}
