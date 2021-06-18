import React from "react";
import { Input, Checkbox } from "antd";

export default class FormInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      className,
      label,
      name,
      value,
      onChange,
      placeholder,
      type,
      option,
    } = this.props;
    return (
      <>
        <label>{label}</label>

        {option ? (
          <Checkbox.Group
            options={option}
            onChange={(e) => onChange(e, name)}
          />
        ) : (
          <Input
            type={type}
            name={name}
            value={value}
            onChange={(e) => onChange(e, name)}
            placeholder={placeholder}
            className={className}
          />
        )}
      </>
    );
  }
}
