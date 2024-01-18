import { getEmployeeByUserId } from "../../services/employeeService.js"
import { useEffect, useState } from "react"
import "./Form.css"
import { useNavigate } from "react-router-dom"
import { updateEmployee } from "../../services/employeeService.js"


export const EmployeeForm = ({currentUser}) => {
    const [employee, setEmployee] = useState({})

    useEffect(()=>{
        getEmployeeByUserId(currentUser.id).then((data) => {
            const employeeObj = data[0]
            setEmployee(employeeObj)
        })
    },[currentUser])

const navigate = useNavigate()


    const handleSave = (event) => {
        event.preventDefault()
        console.log("clicked")

        const editedEmployee = {
            id: employee.id,
            specialty: employee.specialty,
            rate: employee.rate,
            userId: employee.userId,
        }
        updateEmployee(editedEmployee).then(()=>{
            navigate(`/employees/${currentUser.id}`)
        })

    }

    return (
        <form className="profile">
            <h2>Update Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label>Specialty:</label>
                    <input
                        type="text"
                        value={employee.specialty}
                        onChange={(event)=>{
                            const copy = {...employee}
                            copy.specialty= event.target.value
                            setEmployee(copy)
                        }}
                        required
                        className="form-control" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Hourly Rate:</label>
                    <input
                        type="number"
                        value={employee.rate}
                        onChange={(event)=>{
                            const copy = {...employee}
                            copy.rate=event.target.value
                            setEmployee(copy)
                        }}
                        required
                        className="form-control" />
                </div>
                <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-primary" onClick={handleSave}>Save Profile</button>
                </div>
            </fieldset>
            </fieldset>
        </form>
    )
}