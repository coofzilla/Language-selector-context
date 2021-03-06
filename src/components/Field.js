import { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context.language === "english" ? "Name" : "이름";

    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
