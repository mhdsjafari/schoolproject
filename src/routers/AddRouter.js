import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import MainForm from "../components/MainForm";
import RegistrationForm from "../components/RegistrationForm";
import SchoolForm from "../components/SchoolForm";
import StudentForm from "../components/StudentForm";
import TeacherForm from "../components/TeacherForm";
const AddRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={MainForm} exact={true} />
        <Route path="/RegistrationForm" component={RegistrationForm} />
        <Route path="/SchoolForm" component={SchoolForm} exact={true}  />
        <Route path="/StudentForm" component={StudentForm} exact={true} />
        <Route path="/TeacherForm" component={TeacherForm} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);
export default AddRouter;
