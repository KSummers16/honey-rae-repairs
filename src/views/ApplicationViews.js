import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar.js"
import { Welcome} from "../components/welcome/Welcome.js"
import { TicketList} from "../components/tickets/TicketList.js"
import { EmployeeList } from "../components/employees/EmployeeList.js"
import { EmployeeDetails } from "../components/employees/EmployeeDetails.js"
import { CustomerList } from "../components/customers/CustomersList.js"
import { CustomerDetails } from "../components/customers/CustomerDetails.js"

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
      path="/"
      element={
        <>
          <NavBar />
          <Outlet />
        </>
      }
      >
      
        <Route index element={<Welcome />} />
        <Route path="tickets" element={<TicketList />} />
          <Route path="employees">
            <Route index element={<EmployeeList />} />
            <Route path=":employeeId" element={<EmployeeDetails />} />
        </Route>
          <Route path="customers">
            <Route index element={<CustomerList />} />
            <Route path=":customerId" element={<CustomerDetails />} />
          </Route>
        </Route>

    </Routes>
  )
}
