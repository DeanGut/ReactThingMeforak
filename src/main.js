import React from "react";
import { Table } from "reactstrap";
import Hol from "./Hol";
import ShuffleButton from "./ShuffleButton";
import { EnterSoldierPanel } from "./EnterSoldierPanel";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      soldierList: [],
      shuffled: false
    };
  }

  render() {
    return (
      <div>
        <EnterSoldierPanel />
        <ShuffleButton />
        {this.state.shuffled && (
          <div>
            <h1>clicked</h1>
          </div>
        )}
      </div>
    );
  }
}
