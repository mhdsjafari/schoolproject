import React from "react";
import FormButton from "./FormButton";
import FormInput from "./FormInput";
import { NavLink } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import "antd/dist/antd.css";
export default class MainForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      IDNumber: "",
      password: "",
    };
  }
  handleChangeInput = (event, name) => {
    switch (name) {
      case "phonenumber":
        this.setState({
          phoneNumber: event.target.value,
        });
        break;

      case "IDNumber":
        this.setState({
          IDNumber: event.target.value,
        });
        break;

      case "password":
        this.setState({
          password: event.target.value,
        });
        break;
      default:
    }
  };
  render() {
    const mainform = [
      {label: "شماره موبایل", onChange: this.handleChangeInput, type: "number",name: "phonenumber",value: this.state.phoneNumber,},
      {label: "کد ملی", onChange: this.handleChangeInput, type: "text", name: "IDNumber", value: this.state.IDNumber,},
      {label: "رمز عبور", onChange: this.handleChangeInput, type: "password", name: "password", value: this.state.password,},
    ];
    return (
      <>
        <div className="main_form-container">
          <div className="main_form">
            <div className="form">
              <form autocomplete="off">
                {mainform.map((item, index) => {
                  return (
                    <FormInput
                      key={index}
                      label={item.label}
                      name={item.name}
                      type={item.type}
                      option={item.option}
                      placeholder=""
                      value={item.value}
                      onChange={item.onChange}
                      className="form_input"
                    />
                  );
                })}
                <FormButton
                  password={this.state.password}
                  IDNumber={this.state.IDNumber}
                  phonenumber={this.state.phoneNumber}
                />
                <p>
                  برای ثبت نام <CreateAccount />
                </p>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
