import React from "react";
import FormInput from "./FormInput";
import { Button } from "antd";
export default class StudentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolcode: "",
      studentIDnumbr: "",
      studentname: "",
      studentfamily: "",
      studentnumber: "",
      studentpass: "",
      studentimage: "",
      studentbase: "",
      studentmajor: "",
      studentclass: "",
    };
  }

  handleChangeInput = (event, name) => {
    switch (name) {
      case "schoolcode": {
        this.setState({
          schoolcode: event.target.value,
        });
        break;
      }
      case "studentIDnumbr": {
        this.setState({
          studentntionalnumbr: event.target.value,
        });
        break;
      }
      case "studentname": {
        this.setState({
          studentname: event.target.value,
        });
        break;
      }
      case "studentfamily": {
        this.setState({
          studentfamily: event.target.value,
        });
        break;
      }
      case "studentnumber": {
        this.setState({
          studentnumber: event.target.value,
        });
        break;
      }
      case "studentpass": {
        this.setState({
          studentpass: event.target.value,
        });
        break;
      }
      case "studentimage": {
        this.setState({
          studentimage: event.target.value,
        });
        break;
      }
      case "studentbase": {
        this.setState({
          studentbase: event,
        });
        break;
      }
      case "studentmajor": {
        this.setState({
          studentmajor: event,
        });
        break;
      }
      case "studentclass": {
        this.setState({
          studentclass: event,
        });
        break;
      }
      default:
    }
  };

  handleChangeButton = () => {
    console.log(this.state);
  };
  render() {
    const degree = [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
    ];
    const basiceducation = [
      { label: "?????? ????????????????", value: "?????? ????????????????" },
      { label: "????????????????", value: "????????????????" },
      { label: "????????????????", value: "????????????????" },
      { label: "????????????", value: "????????????" },
    ];
    const majors = [
      { label: "??????????", value: "??????????" },
      { label: "??????????", value: "??????????" },
      { label: "????????????", value: "????????????" },
    ];
    const studentform = [
      {label: "???? ??????????", onChange: this.handleChangeInput, type: "number", name: "schoolcode", value: this.state.schoolcode, },
      {label: "?????????? ??????", onChange: this.handleChangeInput, type: "number", name: "studentIDnumbr", value: this.state.studentIDnumbr, },
      {label: "??????", onChange: this.handleChangeInput, type: "text", name: "studentname", value: this.state.studentname, },
      {label: "?????? ????????????????", onChange: this.handleChangeInput, type: "text", name: "studentfamily", value: this.state.studentfamily, },
      {label: "?????????? ????????????", onChange: this.handleChangeInput, type: "number", name: "studentnumber", value: this.state.studentnumber, },
      {label: "?????? ????????", onChange: this.handleChangeInput, type: "password", name: "studentpass", value: this.state.studentpass, },
      {label: "??????", onChange: this.handleChangeInput, type: "file", name: "studentimage", value: this.state.studentimage, },
      {label: "????????", onChange: this.handleChangeInput, type: "select", name: "studentbase", value: this.state.studentbase, option: basiceducation, },
      {label: "???????? ", onChange: this.handleChangeInput, type: "radio", name: "studentmajor", value: this.state.studentmajor, option: majors, },
      {label: "????????", onChange: this.handleChangeInput, type: "select", name: "studentclass", value: this.state.studentclass, option: degree, },
    ];

    return (
      <>
        <div className="student_form-container">
          <div className="student_form">
            <div className="form2">
              <form autocomplete="off">
                {studentform.map((item, index) => {
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
                <Button
                  className="btn-form"
                  onClick={this.handleChangeButton}
                  type="primary"
                  ghost
                >
                  ??????
                </Button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
