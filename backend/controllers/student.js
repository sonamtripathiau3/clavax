const Student = require("../models/Student");


exports.addStudent= async(req,res)=>{
      try{
      const{
        email,
        phoneNumber,
        studentName,
        fatherName,
        dob,
        address,
        city,
        state,
        classNo,
        marks,
        pin,
      }=req.body

      student = new Student({
        email,
        phoneNumber,
        studentName,
        fatherName,
        dob,
        address,
        city,
        state,
        classNo,
        marks,
        pin,
    });
    if(req.user){
    const emailExist = await Student.findOne({ email: req.body.email });
    if (emailExist) {
        return res.send({ message: "Email already exist" });
    }else{
        await student.save()
        res.status(200).json({
          msg: "registered",
          status:true
        });
    }  
    } else{
        res.status(500).json({
            msg:"user is not validated"
        })
    }   
        } catch (err) {
            console.log(err.message);
            res.status(500).send("Error in Saving");
        }
}
exports.getStudents=async(req,res)=>{
      var pageNo = parseInt(req.query.pageNo)
      var size = parseInt(req.query.size);
      try{
        let skip =size*(pageNo-1)
        console.log(skip)
        let limit = size;
        let students = await Student.find({}).skip(skip).limit(limit)
        res.json({students})
      }catch (err){
        console.log(err.message);
        res.status(500).send("Error in Fetching");
      }
}

exports.getStudent=async(req,res)=>{
    var id = req.query.id
    try{
      let student = await Student.findOne({_id:id})
      res.status(200).json(student)
    }catch (err){
      console.log(err.message);
      res.status(500).send("Error in Fetching");
    }
}

exports.updateStudent= async (req, res) => {
    const foundUser = await Student.findById(req.params.id);
    console.log(foundUser)
    const user = await Student.updateOne(
      { _id: req.params.id },
      {
        $set: {
        studentName: req.body.studentName ? req.body.studentName : foundUser.studentName,
        email: req.body.email ? req.body.email : foundUser.email,
        classNo:req.body.classNo ? req.body.classNo : foundUser.classNo,
        phoneNumber:req.body.phoneNumber ? req.body.phoneNumber : foundUser.phoneNumber,
        },
      }
    );
    res.send({ user });
  };

