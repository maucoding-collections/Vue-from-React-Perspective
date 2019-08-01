import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  render() {
    return (
      <div>
        <h1>This Is React App</h1>
        <Child />
      </div>
    );
  }
}

export default Parent;
