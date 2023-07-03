import { Routes ,Route } from "react-router-dom"
//import ScheduledAcquisitions from "../pages/acquisitions-scheduled"
import Login from "../pages/login";
import Page1 from "../pages/page1";

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path='/page1' element={<Page1 />} /> 
      <Route path='login' element={<Login />} />
    </Routes>
  )
}