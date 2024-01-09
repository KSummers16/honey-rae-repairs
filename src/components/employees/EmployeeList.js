import { getStaffUsers } from "../../services/userService.js"
import { User } from "../../users/User.js"
import { useState, useEffect } from "react"

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
                return <User user={employeeObj} key={employeeObj.id} />
                
            })}
        </div>
    )
}





