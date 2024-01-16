import { useParams } from "react-router-dom"
import "./Employees.css"

export const EmployeeDetails = () => {


    const {employeeId} = useParams()


    return <div>Employee #{employeeId}</div>
}