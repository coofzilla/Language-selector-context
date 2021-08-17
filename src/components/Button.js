import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  //consumer used with multiple context objects
  renderSubmit(value) {
    return value === "english" ? "Submit" : "검색";
  }
  //consumer only argument is return function
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => this.renderSubmit(value)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

//context way
// class Button extends React.Component {
//   static contextType = LanguageContext;

//   render() {
//     const text = this.context === "english" ? "Submit" : "검색";
//     return <button className="ui button primary">{text}</button>;
//   }
// }
