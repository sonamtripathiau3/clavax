import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router";

const Edit = (props) => {

  const history = useHistory()
  console.log("props", props)
  useEffect(() => {
    console.log("hello")
    axios.get(`http://localhost:8000/student?id=${props.match.params.id}`)
      .then(res => {
        console.log(res)
        setstudentName(res.data.studentName);
        setclassNo(res.data.classNo);
        setphoneNumber(res.data.phoneNumber)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const [studentName, setstudentName] = useState("");
  const [classNo, setclassNo] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const onSubmit = (e) => {
    e.preventDefault()
    const data = {
      studentName,
      classNo,
      phoneNumber
    };
    console.log(data)
    axios.put(`http://localhost:8000/updatestudent/${props.match.params.id}`, data)
      .then((res) => {
        console.log(res.data)
        console.log('Student successfully updated')
      }).catch((error) => {
        console.log(error)
      })
    window.location.replace('/')
  }
  return (
    <div class="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      <div class="card ">
        <div class="card-body ">
          <form >
            <h4 class="text-center">Edit Student</h4>
            <div class={`form-group `} >
              <label for="text">Name</label>
              <input type="text" class="form-control" name="name" value={studentName} id="name" onChange={e => setstudentName(e.target.value)} placeholder="Enter name" />
            </div>
            <div class={`form-group `} >
              <label for="exampleInputEmail1">Class</label>
              <input type="Number" class="form-control" name="class" value={classNo} id="class" onChange={e => setclassNo(e.target.value)} placeholder="Enter email" />
            </div>
            <div class={`form-group `} >
              <label for="number">Phone Number</label>
              <input type="number" class="form-control" name="phonenumber" value={phoneNumber} id="phonenumber" onChange={e => setphoneNumber(e.target.value)} placeholder="Enter number" />
            </div>
            <button class="btn btn-primary" onClick={(e) => onSubmit(e)}>Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Edit;

