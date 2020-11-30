// import logo from "./logo.svg";
import React, { Component } from "react";
import "./styles.css";
import axios from "axios";
import { IUser } from "../models/user";
import { IOrderActivity } from "../models/activity";

interface IState {
  user: IUser[];
  activities: IOrderActivity[];
}

class App extends Component<{}, IState> {
  state: IState = {
    user: [],
    activities: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/login").then((response) => {
      this.setState({
        user: response.data,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <button className="btn btn-primary"> PRESS TO START THE APP!</button>
        <button className="btn btn-danger">Credits!.2</button>
      </div>
    );
  }
}

export default App;
