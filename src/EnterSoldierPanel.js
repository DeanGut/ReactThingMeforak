import React from "react";

export class EnterSoldierPanel extends React.Component {
  addSoldier(e) {
    const txt = e.target.value;
    if (txt) {
      this.setState({
        soldierList: [...this.state.soldierList, txt]
      });
    }
    if (this.state.soldierList.length !== 0)
      this.state.soldierList.map(soldier => (
        <div
          onClick={() => {
            var array = [...this.state.soldierList];
            var index = array.indexOf(soldier);

            if (index !== -1) {
              array.splice(index, 1);
              console.log(array);
              this.setState({ soldierList: array });
            }
          }}
          className="btn btn-secondary p-2"
        >
          {soldier}
        </div>
      ));
  }

  render() {
    return (
      <div>
        <h1 className="mb-5">Duties Shuffler</h1>
        <h4>Enter Soldier Name</h4>
        <input
          onSubmit={this.addSoldier}
          className="mb-1"
          style={{ height: "2rem" }}
        />
        <div className="d-flex justify-content-center text-center">
          <div
            onClick={this.addSoldier}
            className="btn btn-secondary pl-3 pr-3 mr-3"
          >
            +
          </div>
          <div className="btn btn-secondary pl-3 pr-3">-</div>
        </div>
        <div />
      </div>
    );
  }
}
