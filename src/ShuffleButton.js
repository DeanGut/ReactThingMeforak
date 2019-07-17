import React from "react";

class ShuffleButton extends React.Component {
  constructor(props) {
    super(props);

    this.shuffleFunction = this.shuffleFunction.bind(this);
  }
  shuffleFunction() {
    let numDuties = 20;
    console.log(this.props.soldierList);
    //create a copy of original solider list
    if (this.props.soldierList.length > 0) {
      let soldierListShuffled = this.props.soldierList.slice();
      shuffleArray(soldierListShuffled);

      function shuffleArray(array) {
        for (var i = 0; i < array.length; i++) {
          distributeHol(i, array);
        }
      }

      function distributeHol(i, array) {
        //randomize list
        var diceOutcome = Math.floor(Math.random() * array.length);
        [array[i], array[diceOutcome]] = [array[diceOutcome], array[i]];
      }
      //duplicate soldier list if smaller than duties
      while (soldierListShuffled.length < numDuties) {
        let soldierListShuffledCopy = soldierListShuffled.slice();
        //shuffle the copy
        shuffleArray(soldierListShuffledCopy);
        soldierListShuffled = soldierListShuffledCopy.concat(
          soldierListShuffled
        );
      }
      soldierListShuffled = soldierListShuffled.slice(0, numDuties);
      //Fill table
      for (var i = 0; i < soldierListShuffled.length; i++) {
        const soldier = soldierListShuffled[i];
        console.log(soldierListShuffled);
      }
      return soldierListShuffled;
    }
  }

  render() {
    return (
      <div className="btn btn-primary p-3 mt-5" onClick={this.shuffleFunction}>
        SHUFFLE
      </div>
    );
  }
}
export default ShuffleButton;
