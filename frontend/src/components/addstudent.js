import React, {useState} from "react";
import axios from "axios"


const AddStudent = () => {
    const [studentName, setstudentName] = useState("");
    const [fatherName, setfatherName] = useState("");
    const [email, setemail] = useState("");
    const [pin, setpin] = useState("");
    const [marks, setmarks] = useState("");
    const [dob, setdob] = useState("");
    const [classNo, setclassNo] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [city, setcity] = useState("");
    const [address, setaddress] = useState("");
    const [state, setstate] = useState("");

    const onSubmit = (e) => {
        e.preventDefault()
        const data = {
            studentName,
            email,
            fatherName,
            classNo,
            marks,
            pin,
            phoneNumber,
            address,
            city,
            state,
            dob
        };
        console.log(data)
        axios.post('http://localhost:8000/addStudent', data)
            .then(res => console.log(res.data)
            );
        window.location.replace("/")
    }
    return (
        <div class="container d-flex justify-content-center align-items-center" style={{ width: "100vh" }}>
            <div class="card ">
                <div class="card-body ">
                    <form >
                        <h4 class="text-center">AddStudent</h4>
                        <div class={`form-group `} >
                            <label for="text">Student Name</label>
                            <input type="text" class="form-control" name="studentname" value={studentName} id="name" onChange={e => setstudentName(e.target.value)} />
                        </div>
                        <div class={`form-group `} >
                            <label for="text">Father Name</label>
                            <input type="text" class="form-control" name="fathername" value={fatherName} id="name" onChange={e => setfatherName(e.target.value)} />
                        </div>
                        <div class={`form-group `} >
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" name="email" value={email} id="email" onChange={e => setemail(e.target.value)}/>
                        </div>
                        <div class={`form-group `} >
                            <label for="number">Phone Number</label>
                            <input type="number" class="form-control" name="phone_number" value={phoneNumber} id="phone_number" onChange={e => setphoneNumber(e.target.value)}  />
                        </div>
                        <div class={`form-group `} >
                            <label for="number">class</label>
                            <input type="number" class="form-control" name="class" value={classNo} id="class" onChange={e => setclassNo(e.target.value)}  />
                        </div>
                        <div class={`form-group `} >
                            <label for="text">DOB</label>
                            <input type="text" class="form-control" name="dob" value={dob} id="dob" onChange={e => setdob(e.target.value)}  />
                        </div>
                        <div class={`form-group `} >
                            <label for="text">City</label>
                            <input type="text" class="form-control" name="city" value={city} id="city" onChange={e => setcity(e.target.value)}  />
                        </div>
                        <div class={`form-group `} >
                            <label for="text">Address</label>
                            <input type="text" class="form-control" name="address" value={address} id="address" onChange={e => setaddress(e.target.value)}/>
                        </div>
                        <div class={`form-group `} >
                            <label for="number">Marks</label>
                            <input type="number" class="form-control" name="marks" value={marks} id="marks" onChange={e => setmarks(e.target.value)}  />
                        </div>
                        <div class={`form-group `} >
                            <label for="number">Pincode</label>
                            <input type="number" class="form-control" name="pincode" value={pin} id="pincode" onChange={e => setpin(e.target.value)}  />
                        </div>
                        <div class={`form-group `} >
                            <label for="text">State</label>
                            <input type="text" class="form-control" name="state" value={state} id="state" onChange={e => setstate(e.target.value)}  />
                        </div>
                        <button class="btn btn-primary" value="signup" onClick={(e)=>onSubmit(e)}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default AddStudent