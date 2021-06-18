import React from "react";
import FormInput from "./FormInput";
import { Button } from "antd";
export default class SchoolForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolcode: "",
      schoolname: "",
      schoolnumber: "",
      schooladdrss: "",
      schoolformimage: "",
      schoolbasics: "",
      schoolfields: "",
      schoolclasses: "",
      schoolprincipalIDnumbr: "",
      schoolprincipalname: "",
      schoolprincipalnumbr: "",
      schoolprincipalpass: "",
      schooldeputyIDnumbr: "",
      schooldeputyname: "",
      schooldeputynumbr: "",
      schooldeputypass: "",
      administrtivafairsIDnumbr: "",
      administrtivafairsname: "",
      administrtivafairsnumbr: "",
      administrtivafairspass: "",
    };
  }
  handleChangeInput = (event, name) => {
    switch (name) {
      case "schoolcode":
        this.setState({
          schoolcode: event.target.value,
        });
        break;
      case "schoolname":
        this.setState({
          schoolname: event.target.value,
        });
        break;
      case "schoolnumber":
        this.setState({
          schoolnumber: event.target.value,
        });
        break;
      case "schooladdrss":
        this.setState({
          schooladdrss: event.target.value,
        });
        break;
      case "schoolformimage":
        this.setState({
          schoolformimage: event.target.value,
        });
        break;
      case "schoolbasics":
        this.setState({
          schoolbasics: event,
        });
        break;
      case "schoolfields":
        this.setState({
          schoolfields: event,
        });
        break;
      case "schoolclasses":
        this.setState({
          schoolclasses: event,
        });
        break;
      case "schoolprincipalIDnumbr":
        this.setState({
          schoolprincipalIDnumbr: event.target.value,
        });
        break;
      case "schoolprincipalname":
        this.setState({
          schoolprincipalname: event.target.value,
        });
        break;
      case "schoolprincipalnumbr":
        this.setState({
          schoolprincipalnumbr: event.target.value,
        });
        break;
      case "schoolprincipalpass":
        this.setState({
          schoolprincipalpass: event.target.value,
        });
        break;
      case "schooldeputyIDnumbr":
        this.setState({
          schooldeputyIDnumbr: event.target.value,
        });
        break;
      case "schooldeputyname":
        this.setState({
          schooldeputyname: event.target.value,
        });
        break;
      case "schooldeputynumbr":
        this.setState({
          schooldeputynumbr: event.target.value,
        });
        break;
      case "schooldeputypass":
        this.setState({
          schooldeputypass: event.target.value,
        });
        break;
      case "administrtivafairsIDnumbr":
        this.setState({
          administrtivafairsIDnumbr: event.target.value,
        });
        break;
      case "administrtivafairsname":
        this.setState({
          administrtivafairsname: event.target.value,
        });
        break;
      case "administrtivafairsnumbr":
        this.setState({
          administrtivafairsnumbr: event.target.value,
        });
        break;
      case "administrtivafairspass":
        this.setState({
          administrtivafairspass: event.target.value,
        });
        break;
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
    const schoolform = [
      {label: "کد مدرسه", onChange: this.handleChangeInput, type: "number", name: "schoolcode", value: this.state.schoolcode,},
      {label: "نام مدرسه", onChange: this.handleChangeInput, type: "text", name: "schoolname", value: this.state.schoolname, },
      {label: "تلفن", onChange: this.handleChangeInput, type: "text", name: "schoolnumber", value: this.state.schoolnumber, },
      {label: "آدرس", onChange: this.handleChangeInput, type: "text", name: "schooladdrss", value: this.state.schooladdrss, },
      {label: "عکس", onChange: this.handleChangeInput,type: "file",  name: "schoolformimage", value: this.state.schoolformimage, },
      {label: "پایه های مدرسه", onChange: this.handleChangeInput, type: "select", name: "schoolbasics", value: this.state.schoolbasics,  option: basiceducation, },
      {label: "رشته های مدرسه", onChange: this.handleChangeInput, type: "select", name: "schoolfields", value: this.state.schoolfields, option: majors, },
      {label: "کلاس های مدرسه", onChange: this.handleChangeInput, type: "select", name: "schoolclasses", value: this.state.schoolclasses, option: degree, },
      {label: "کد ملی مدیر ", onChange: this.handleChangeInput, type: "number", name: "schoolprincipalIDnumbr", value: this.state.schoolprincipalIDnumbr, },
      {label: "نام مدیر ", onChange: this.handleChangeInput, type: "text", name: "schoolprincipalname", value: this.state.schoolprincipalname, },
      {label: "شماره موبایل", onChange: this.handleChangeInput, type: "number", name: "schoolprincipalnumbr", value: this.state.schoolprincipalnumbr, },
      {label: "رمز عبور", onChange: this.handleChangeInput, type: "password", name: "schoolprincipalpass", value: this.state.schoolprincipalpass,},
      {label: "کد ملی معاون مدرسه", onChange: this.handleChangeInput, type: "number", name: "schooldeputyIDnumbr", value: this.state.schooldeputyIDnumbr,},
      {label: "نام معاون مدرسه", onChange: this.handleChangeInput, type: "text", name: "schooldeputyname", value: this.state.schooldeputyname,},
      {label: "شماره موبایل", onChange: this.handleChangeInput, type: "number", name: "schooldeputynumbr", value: this.state.schooldeputynumbr,},
      {label: "رمز عبور", onChange: this.handleChangeInput, type: "password", name: "schooldeputypass", value: this.state.schooldeputypass,},
      {label: "کد ملی امور اداری", onChange: this.handleChangeInput, type: "number", name: "administrtivafairsIDnumbr", value: this.state.administrtivafairsIDnumbr,},
      {label: "نام امور اداری", onChange: this.handleChangeInput, type: "text", name: "administrtivafairsname", value: this.state.administrtivafairsname, },
      {label: "تلفن امور اداری", onChange: this.handleChangeInput, type: "number", name: "administrtivafairsnumbr", value: this.state.administrtivafairsnumbr,},
      {label: "رمز عبور", onChange: this.handleChangeInput, type: "password",  name: "administrtivafairspass", value: this.state.administrtivafairspass,},
    ];

    return (
      <>
        <div className="school_form-container">
          <div className="school_form">
            <div className="form2">
              <form autocomplete="off">
                {schoolform.map((item, index) => {
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
