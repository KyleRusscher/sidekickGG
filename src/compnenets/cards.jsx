import React, { Component } from "react";
import championKeys from "../data/championKeys.json";
class Cards extends Component {

  constructor(props) {
    super(props);
    //this.handleChampionChange = this.handleChampionChange.bind(this);
    this.state = {
        prevIndexes: this.props.isClicked,
    };
}

componentDidUpdate(){
  this.state.prevIndexes = this.props.isClicked;
}

  render() {
    console.log(this.props.roleData)
    return (
      <React.Fragment>
        {this.props.skData.map((sidekick, index) => (
          
          <div key={sidekick.championId} className={this.props.isClicked[index] ? "clicked cardBackground" : "notClicked cardBackground"} style={(this.props.isClicked[index] || this.state.prevIndexes[index])?{
              background: "url(../images/" + sidekick.tier + "_Border.png), url(http://ddragon.leagueoflegends.com/cdn/img/champion/loading/" + championKeys[3][sidekick.championId] + "_0.jpg)",} :
              {background: "url(../images/" + sidekick.tier + "_Border.png)"}}>

            <div className={"skName"}> {championKeys[3][sidekick.championId]} </div>
            <div className={"AWRTC"}>{championKeys[3][sidekick.championId]}'s Winrate: {Math.round((this.props.roleData[championKeys[3][sidekick.championId]].winRate) * 10000) / 100}%</div>
            <div  className={"skTier"}>Combined Winrate: <span style={numColor(sidekick.duoWinRate)}>{sidekick.duoWinRate >= .50 ? "+ " : " "}{(Math.round((sidekick.duoWinRate - .5) * 10000) / 100) }% </span></div>
            <div className={"BPT"}>Blind Pick Tier: {this.props.roleData[championKeys[3][sidekick.championId]].blindPickTier}</div>

          </div>


        ))}
      </React.Fragment>
    );
  }
}
//Takes in a decimal like .50
function numColor(value) {
  if (value <= .50) { 
      return {color: `rgb(240,72,72)`} // red
  }
  return {color: `rgb(124, 219, 165)`} // green
}

export default Cards;
