import { getStaffUsers } from "../../services/userService.js"
import { User } from "../../users/User.js"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Employees.css"

export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(()=>{
        getStaffUsers().then((employeeArray)=>{
            setEmployees(employeeArray)
        })
    },[])

    return (
        <div className="employees">
            {employees.map(employeeObj=> {
                return (
                <Link to={`/employees/${employeeObj.id}`}>
                    <User user={employeeObj} key={employeeObj.id} /> 
                </Link>
                )
            })}
        </div>
    )
}





