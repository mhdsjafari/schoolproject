import React from "react";
import FormInput from "./FormInput";
import { Button } from "antd";
export default class TeacherForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolcode: "",
      teacherIDnumbr: "",
      teachername: "",
      teacherfamily: "",
      teachernumber: "",
      teacherpass: "",
      teacherimage: "",
      gradeteacher: "",
      fieldteacher: "",
      classteacher: "",
      namelessonsteacher: "",
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
      case "teacherIDnumbr": {
        this.setState({
          teacherIDnumbr: event.target.value,
        });
        break;
      }
      case "teachername": {
        this.setState({
          teachername: event.target.value,
        });
        break;
      }
      case "teacherfamily": {
        this.setState({
          teacherfamily: event.target.value,
        });
        break;
      }
      case "teachernumber": {
        this.setState({
          teachernumber: event.target.value,
        });
        break;
      }
      case "teacherpass": {
        this.setState({
          teacherpass: event.target.value,
        });
        break;
      }
      case "teacherimage": {
        this.setState({
          teacherimage: event.target.value,
        });
        break;
      }
      case "gradeteacher": {
        this.setState({
          gradeteacher: event,
        });
        break;
      }
      case "fieldteacher": {
        this.setState({
          fieldteacher: event,
        });
        break;
      }
      case "classteacher": {
        this.setState({
          classteacher: event,
        });
        break;
      }
      case "namelessonsteacher": {
        this.setState({
          namelessonsteacher: event.target.value,
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
      { label: "پیش دانشگاهی", value: "پیش دانشگاهی" },
      { label: "دبیرستان", value: "دبیرستان" },
      { label: "راهنمایی", value: "راهنمایی" },
      { label: "دبستان", value: "دبستان" },
    ];
    const majors = [
      { label: "ریاضی", value: "ریاضی" },
      { label: "تجربی", value: "تجربی" },
      { label: "انسانی", value: "انسانی" },
    ];
    const teacherform = [
      {label: "کد مدرسه",
        onChange: this.handleChangeInput,
        type: "number",
        name: "schoolcode",
        value: this.state.schoolcode,
      },
      {label: "شماره ملی", onChange: this.handleChangeInput, type: "number", name: "teacherIDnumbr", value: this.state.teacherIDnumbr, },
      {label: "نام", onChange: this.handleChangeInput, type: "text", name: "teachername", value: this.state.teachername, },
      {label: "نام خانوادگی", onChange: this.handleChangeInput, type: "text", name: "teacherfamily", value: this.state.teacherfamily, },
      {label: "شماره موبایل", onChange: this.handleChangeInput, type: "number", name: "teachernumber", value: this.state.teachernumber, },
      {label: "رمز عبور", onChange: this.handleChangeInput, type: "password", name: "teacherpass", value: this.state.teacherpass, },
      {label: "عکس", onChange: this.handleChangeInput, type: "file", name: "teacherimage", value: this.state.teacherimage, },
      {label: "پایه", onChange: this.handleChangeInput, type: "select", name: "gradeteacher", value: this.state.gradeteacher, option: basiceducation, },
      {label: "رشته", onChange: this.handleChangeInput, type: "select", name: "fieldteacher", value: this.state.fieldteacher, option: majors, },
      {label: "کلاس", onChange: this.handleChangeInput, type: "select", name: "classteacher", value: this.state.classteacher, option: degree, },
      {label: "نام دروس", onChange: this.handleChangeInput, type: "text", name: "namelessonsteacher", value: this.state.namelessonsteacher, },
    ];

    return (
      <>
        <div className="teacher_form-container">
          <div className="teacher_form">
            <div className="form2">
              <form autocomplete="off">
                {teacherform.map((item, index) => {
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
                  ثبت
                </Button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
