const { Error } = require('mongoose');
const Classroom = require('../models/Classroom');

exports.joinclassroom = async(req,res) => {
    try{

        const _sid = req.body.sid;
        const _cid = req.body.cid;

        const ClassData = await Classroom.findById(_cid);

        if(!ClassData){
            return res.status(201).json({
                success:false,
                error: "Class Not Found",
            });
        }else{
            ClassData.Students.push(_sid);
            ClassData.save();
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

