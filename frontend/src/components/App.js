import React from 'react';
import AllStudents from './allstudents';
import AddStudent from"./addstudent";
import Edit from "./edit";
import {Route, Switch,BrowserRouter as Router} from 'react-router-dom'

function APP () {
    return(
        <div>
            <Router>
             <Switch>
             <Route exact path='/' component={AllStudents} ></Route>
             <Route path='/addStudent' component={AddStudent} ></Route>
             <Route path="/update/:id" component={Edit}></Route>
             </Switch>
            </Router>
        </div>
    )
}
export default APP
