const router = require('express').Router();
const studentController = require('../../controllers/student');
const {validation}  = require('../../middleware/validation');

router.post('/addStudent', validation, studentController.addStudent);
router.get('/allStudents',  studentController.getStudents);
router.get('/student',  studentController.getStudent);
router.put('/updatestudent/:id',  studentController.updateStudent);

module.exports = {
    router: router,
    basePath: '/'
  };