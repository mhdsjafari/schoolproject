// import React from "react";
// import { NavLink } from "react-router-dom";
// import StudentForm from "./StudentForm";
// import TeacherForm from "./TeacherForm";
// import SchoolForm from "./SchoolForm";
// import FormInput from "./FormInput";

// export default class RegistrationForm extends React.Component {
//   state = {
//     show: 1,
//     school: "",
//     teacher: "",
//     student: "",
//   };
//   _renderForm = () => {
//     switch (this.state.show) {
//       case 1:
//         return <SchoolForm />;

//       case 2:
//         return <TeacherForm />;

//       case 3:
//         return <StudentForm />;
//       default:
//     }
//   };

//   render() {
//     const registrationforms = [
//       {
//         label: "مدرسه ",
//         onChange: () => this.setState({ show: 1 }),
//         type: "radio",
//         name: "fieldteacher",
//         value: this.state.school,
//       },
//       {
//         label: "معلم ",
//         onChange: () => this.setState({ show: 2 }),
//         type: "radio",
//         name: "fieldteacher",
//         value: this.state.teacher,
//       },
//       {
//         label: "دانش آموز ",
//         onChange: () => this.setState({ show: 3 }),
//         type: "radio",
//         name: "fieldteacher",
//         value: this.state.student,
//       },
//     ];
//     return (
//       <>
//         {registrationforms.map((item, index) => {
//           return (
//             <FormInput
//               key={index}
//               label={item.label}
//               name={item.name}
//               type={item.type}
//               option={item.option}
//               placeholder=""
//               value={item.value}
//               onChange={item.onChange}
//             />
//           );
//         })}
//         {this._renderForm()}
//       </>
//     );
//   }
// }
