import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Sidebar(props) {
    return (
        <div>
            <div className="column1">
                <NavLink to={'/employee'} exact activeClassName="active" className="nav-link">
                   Employee
                </NavLink>
                <hr></hr>
                <NavLink to={'/department'} exact activeClassName="active" className="nav-link">
                    Department
                </NavLink>
                <hr></hr> 
                <NavLink to={'/leave'} exact activeClassName="active" className="nav-link">
                    Leave
                </NavLink>
                <hr></hr>
            </div>

        </div>
    )
}














// import React from 'react';
// import Header from './Header'
// import Department from "./Department"
// import Employee from "./Employee"
// import Leave from "./Leave"
// import Footer from './Footer';


// export default class DefaultLayout extends React.Component {

//     constructor(props) {
//         super();
//         this.state = {
//             isEmployeeRender: false,
//             isDepartmentRender: false,
//             isLeaveRender: false,
//         }
//     }

//     handleClickEmployee = () => {
//         this.setState({
//             isEmployeeRender: true,
//             isDepartmentRender: false,
//             isLeaveRender: false,

//         })
//     }

//     handleClickDepartment = () => {
//         this.setState({
//             isEmployeeRender: false,
//             isDepartmentRender: true,
//             isLeaveRender: false,
//         })

//     }
//     handleClickLeave = () => {
//         this.setState({
//             isEmployeeRender: false,
//             isDepartmentRender: false,
//             isLeaveRender: true,
//         })

//     }

//     render() {
//         return (
//             <div>
//                 <Header />
//                 <div className="row">
//                     <div className="column1">
//                         <a href="#" className="nav-link" onClick={this.handleClickEmployee}>Employee</a>
//                         <hr></hr>
//                         <a href="#" className="nav-link" onClick={this.handleClickDepartment}>Department</a>
//                         <hr></hr>
//                         <a href="#" className="nav-link" onClick={this.handleClickLeave}>Leave</a>
//                         <hr></hr>

//                     </div>
//                     <div className="column2">
//                         {this.state.isEmployeeRender ? <Employee /> : 
//                         null}
//                         {this.state.isDepartmentRender ? <Department /> : null}
//                         {this.state.isLeaveRender ? <Leave /> : null}
//                     </div>

//                     <button onClick={()=>{this.props.history.push('/employee')}}>clicl</button>
//                 </div>
//                 <Footer />
//             </div>

//         );
//     }
// }    



