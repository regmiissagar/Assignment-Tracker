import React from "react";

import Register from "../containers/Auth/register";
import Login from "../containers/Auth/login";
import UserDashboard from "../containers/User/dashboard"
import AdminDashboard from "../containers/Admin/dashboard"
import Orders from "../containers/User/orders";
import OrdersList from "../containers/User/ordersList";
import Assignment from "../containers/Admin/assignment"
import AssignmentList from "../containers/Admin/assignmentList"
import { useSelector } from "react-redux"
import {Routes,Route} from "react-router-dom";

const ConditionalRouting = ()=>{
  const {userRole} = useSelector(state=>state.user) //it is taking from state of redux 
  if(userRole==='user'){
    return <UserScreen/>
  }else if(userRole === 'admin'){
    return (<AdminScreen/>)
  }else{
    return <AuthScreens/>
  }
}

const AuthScreens=()=>{
  return(
    <Routes>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
    </Routes>
  )
}




const UserScreen=()=>{
  return(
    <Routes>
      <Route exact path='/' element={<UserDashboard/>}/>
      <Route exact path='/orders' element={<Orders/>}/>
      <Route exact path='/orderslist' element={<OrdersList/>}/>
    </Routes>
  )
}
const AdminScreen=()=>{
  return(
    <Routes>
      <Route exact path='/' element={<AdminDashboard/>}/>
      <Route exact path='/assignment' element={<Assignment/>}/>
      <Route exact path='/assignmentList' element={<AssignmentList/>}/>
    </Routes>
  )
}

export default ConditionalRouting
