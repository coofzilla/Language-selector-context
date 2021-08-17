import React from "react";

const Context = React.createContext("default");

export class LanguageStore extends React.Component {
  state = { language: "english" };
  // can short language: language to just language but this is clearer
  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageChange: this.onLanguageChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
