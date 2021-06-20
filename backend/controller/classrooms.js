const { Error } = require('mongoose');
const Classroom = require('../models/Dashboard');
const { findById } = require('../models/Users');

exports.create = async (req, res) => {

    try {

<<<<<<< HEAD
    try{
        const classroom = new Classroom(req.body);
=======
        const classroom = new Classroom(req.body.classroom);
>>>>>>> 429b636b28d4bf408655f51b12bb9187b67488b1

        

        const createClassroom = await classroom.save().then((t) => t.populate('HostedBy', ['firstname', 'lastname', 'email']).populate('Students', ['firstname', 'lastname', 'email']).execPopulate())
        
        const host = req.user;
        host.classroomsHosted.append(createClassroom._id);
        const hostobj =  await host.save();
        
        res.status(201).json({
            success: true,
            classroom: createClassroom
        });

<<<<<<< HEAD
    }catch(e){
        res.status(401).json({
=======
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e.message
        })
    }
}


exports.bycid = async (req, res) => {
    try {

        const _id = req.params.id;
        const ClassData = await Classroom.findById(_id).populate('HostedBy', ['firstname', 'lastname', 'email']).populate('Students', ['firstname', 'lastname', 'email']);

        if (!ClassData) {
            return res.status(404).json({
                success: false,
                error: "Class Not Found",
            });
        } else {
            res.status(201).json({
                success: true,
                classroom: ClassData
            })
        }

    } catch (e) {

        res.status(400).json({
            success: false,
            error: e.message
        })
    }
}


exports.byuser = async (req, res) => {
    try {

        const _id = req.params.id;
        const ClassData = await Classroom.findById(_id);

        if (!ClassData) {
            return res.status(404).json({
                success: false,
                error: "Class Not Found",
            });
        } else {
            res.status(201).json({
                success: true,
                classroom: ClassData
            })
        }

    } catch (e) {

        res.status(400).json({
            success: false,
            error: e.message
        })
    }
}


exports.byhost = async (req, res) => {
    try {

        const _id = req.params.id;
        const ClassData = await Classroom.findById(_id);

        if (!ClassData) {
            return res.status(404).json({
                success: false,
                error: "Class Not Found",
            });
        } else {
            res.status(201).json({
                success: true,
                classroom: ClassData
            })
        }

    } catch (e) {

        res.status(400).json({
>>>>>>> 429b636b28d4bf408655f51b12bb9187b67488b1
            success: false,
            error: e.message
        })
    }
}


<<<<<<< HEAD
exports.bycid = async(req,res) => {
    try{
=======
exports.bystudent = async (req, res) => {
    try {

>>>>>>> 429b636b28d4bf408655f51b12bb9187b67488b1
        const _id = req.params.id;
        const ClassData = await Classroom.findById(_id);

        if (!ClassData) {
            return res.status(404).json({
                success: false,
                error: "Class Not Found",
            });
        } else {
            res.status(201).json({
                success: true,
                classroom: ClassData
            })
        }

<<<<<<< HEAD
    }catch(e){
=======
    } catch (e) {

        res.status(400).json({
            success: false,
            error: e.message
        })
    }
}

exports.list = async (req, res) => {
    try {
        const ClassList = await Classroom.find();

        res.status(201).json({
            success: true,
            classroom: ClassList
        });

    } catch (e) {

>>>>>>> 429b636b28d4bf408655f51b12bb9187b67488b1
        res.status(400).json({
            success: false,
            error: e.message
        })
    }
}


exports.Delete = async (req, res) => {
    try {

        const _id = req.params.id;
        const DeleteClass = await Classroom.findByIdAndDelete(_id);

        if (!_id) {
            return res.status(404).json({
                success: false,
                error: "Class Not Found",
            });
        } else {
            res.status(201).json({
                success: true,
                classroom: DeleteClass
            })
        }

    } catch (e) {

        res.status(400).json({
            success: false,
            error: e.message
        })
    }
}

exports.update = async (req, res) => {
    try {
        const _id = req.params.id;
        const updateClass = await Classroom.findByIdAndUpdate(_id, req.body, { new: true });
        res.status(201).json({
            success: true,
            classroom: updateClass
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            error: e.message
        })
    }
}