import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function AllStudents() {
    const [allStudents ,setallStudents] = useState([])
    const [pageNo, setPageNo] = useState(1)

    useEffect(() => {
        axios.get(`http://localhost:8000/allStudents?pageNo=${pageNo}&size=5`)
          .then(res => {
              setallStudents([...res.data.students])
            console.log(res)
          })
          .catch(err => {
              console.log(err)
          })
    }, [])


  const prev = (e) => {
      console.log("hello")
    if(pageNo === 1){
      document.getElementById('prev').disabled = true
      return;
    }
    else{
        console.log(pageNo)
      setallStudents([])
      setPageNo(pageNo - 1)
      axios.get(`http://localhost:8000/allStudents?pageNo=${pageNo-1}&size=5`)
      .then(res => {
          console.log(res)
        setallStudents([...res.data.students])
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  const next = (e) => {
    setallStudents([])
    setPageNo(pageNo + 1)
    axios.get(`http://localhost:8000/allStudents?pageNo=${pageNo+1}&size=5`)
    .then(res => {
        console.log(res)
      setallStudents([...res.data.students])
    })
    .catch(err => {
      console.log(err)
    })
  }
  
 return (
    <div className="container mt-5">
        <div>
            <Link className="btn btn-info ml-4" to={"/addStudent"}>Add Student</Link>
        </div>
        <div className="row col-md-12 mt-2 justify-content-center">
          {allStudents.length > 0 ?
      <div>
       <table className="table table-hover ">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Class</th>
            <th>Marks</th>
            <th>Edit</th>
          </tr>
        </thead>
        
         {allStudents.map((item, index) => 
   
          <tbody key={index}> 
          
          <tr id={item._id}>
            <td>{item.studentName}</td>
            <td>{item.email}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.classNo}</td>
            <td>{item.marks}</td>
            <td><Link to={`/update/${item._id}`}>Edit</Link></td>
          </tr> 
          </tbody>

        
          )}
      </table>
      <div className="btn-group">
        {pageNo === 1 ? 
        
        <button id="prev" onClick={(e)=>prev(e)}className="btn btn-outline-info disabled">
          Previous
        </button> 
        
        : 
    
        <button id="prev" onClick={(e)=>prev(e)} className="btn btn-outline-info">
          Previous
        </button>}
       
        <button id="next" onClick={(e)=>next(e)} className="btn btn-outline-info">
          Next
        </button>
      </div>
      </div>
      : <p className="m-5">Data loading..</p>}
    </div>
        </div>

  );
}

export default AllStudents;