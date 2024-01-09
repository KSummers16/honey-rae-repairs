
import "./App.css"
import { CustomerList } from "./components/customers/CustomersList.js"
import { EmployeeList } from "./components/employees/EmployeeList.js"
import { TicketList } from "./components/tickets/TicketList.js"


export const App = () => {
 return <>
 {/* <TicketList /> */}
 {/* <CustomerList /> */}
 <EmployeeList />
 </>
}