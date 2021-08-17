import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
// const App = () => {
//   return <div className="ui container">Hi</div>;
// };

// export default App;
class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (language) => {
    //can abbreviate because key and value are same, but this is clearer for now
    this.setState({ language: language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag us"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag kr"
            onClick={() => this.onLanguageChange("korean")}
          />
        </div>
        <ColorContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
