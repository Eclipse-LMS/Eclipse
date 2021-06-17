const { Error } = require('mongoose');
const Classroom =  require('../models/Dashboard');

exports.create = async (req,res)=>{

    try{
        
        const classroom = new Classroom(req.body.classroom);

        const createClassroom = await classroom.save();

        res.status(201).json({
            success: true,
            classroom : createClassroom
        });

    }catch(e){
        res.status(400).json({
        success: false,
        error:e.message
    })
}}


exports.bycid = async(req,res) => {
    try{

        const _id = req.params.id;
        const ClassData = await Classroom.findById(_id).populate('HostedBy').select('firstname');

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


exports.byuser = async(req,res) => {
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


exports.byhost = async(req,res) => {
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


exports.bystudent = async(req,res) => {
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

exports.list = async(req,res) => {
    try{
        const ClassList = await Classroom.find();

        res.status(201).json({
            success: true,
            classroom : ClassList
        });

    }catch(e){

        res.status(400).json({
        success: false,
        error:e.message
    })
}
}


exports.Delete = async(req,res) => {
    try{

        const _id = req.params.id;
        const DeleteClass = await Classroom.findByIdAndDelete(_id);

        if(!_id){
            return res.status(404).json({
                success:false,
                error: "Class Not Found",
            });
        }else{
            res.status(201).json({
                success:true,
                classroom:DeleteClass
            })
        }

    }catch(e){

        res.status(400).json({
        success: false,
        error:e.message
    })
}
}

exports.update = async(req,res) => {
    try{
        const _id = req.params.id;
        const updateClass = await Classroom.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(201).json({
            success:true,
            classroom:updateClass
        })
    }catch(e){
        res.status(400).json({
        success: false,
        error:e.message
    })
}
}