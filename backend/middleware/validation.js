const Joi = require("joi");
const validation = async (req, res, next) => {
    const schema = Joi.object({
      studentName: Joi.string().required(),
      fatherName: Joi.string().required(),
      email: Joi.string().email().min(6).required(),
      phoneNumber: Joi.number().min(10).required(),
      address: Joi.string(),
      state: Joi.string(),
      city: Joi.string(),
      classNo: Joi.number().required(),
      marks: Joi.string(),
      pin: Joi.number().min(6).required(),
      dob:Joi.string(),
    });
    //   Validating User
    const { error } = schema.validate(req.body);
    if (error) return res.send({ message: error.details[0].message });
    try {
        if(!error){
      req.user =true;
        }
      next();
    } catch (error) {
      return res.send(500);
    }
  };
  module.exports={validation}