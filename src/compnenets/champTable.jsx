import React, { Component } from "react";
import championKeys from "../data/championKeys.json";

class ChampTable extends Component {
  
  render() {
    return (
      <div className="allTable">
        <div className="fullTable">
          <div className="tableColumn">
            <div className={"headPadding tableColumn-role tableHeader-role " } onClick={() => this.props.sortData("role", 0)}> Role </div>
            <div className={"headPadding tableColumn-name tableHeader-name "} onClick={() => this.props.sortData("name", 1)}><div>Champion</div></div>
            <div className={"headPadding tableColumn-blindPickTierValue tableHeader-blindPickTierValue"} onClick={() => this.props.sortData("blindPickTierValue", 2)}><div>Blind Pick Tier</div></div>
            <div className={"headPadding tableColumn-winRate tableHeader-winRate"} onClick={() => this.props.sortData("winRate", 3)}><div>Win Rate</div></div>
            <div className={"headPadding tableColumn-playRate tableHeader-playRate activeRole "} onClick={() => this.props.sortData("playRate", 4)}><div>Play Rate</div></div>
            <div className={"headPadding tableColumn-banRate tableHeader-banRate"} onClick={() => this.props.sortData("banRate", 5)}> <div>Ban Rate</div> </div>
            <div className="headPadding tableSK "> <div>SideKicks</div> </div>
          </div>
          <div className="tableScroll">
          {this.props.champs.map((champ, index) => (
            <div >
              <div className="tableColumn " onClick={() => this.props.handleChange(champ.name, champ.role)}>
                <div className={((this.props.selectedHeaderName === "role")?"selectedTableItem ":"")+((this.props.selectedChampion === champ.id && this.props.selectedTableItemRole === champ.role) ? "select ":"") + "tableRows tableColumn-role "}>{<img src={"./images/" + champ.role + ".svg"} alt={champ.role} height="20px" width="20px" />}</div>
                <div className={((this.props.selectedHeaderName === "name")?"selectedTableItem ":"")+((this.props.selectedChampion === champ.id && this.props.selectedTableItemRole === champ.role) ? "select ":"") +  "tableRows tableLeft tableColumn-name"}> <img className="tableImg" src={"http://ddragon.leagueoflegends.com/cdn/8.23.1/img/champion/" + champ.name + ".png "} alt={champ.name} height="30px" width="30px" /> {champ.name}</div>
                <div className={((this.props.selectedHeaderName === "blindPickTierValue")?"selectedTableItem ":"")+((this.props.selectedChampion === champ.id && this.props.selectedTableItemRole === champ.role) ? "select ":"") +  "tableRows tableColumn-blindPickTierValue"}>{champ.blindPickTier} </div>
                <div className={((this.props.selectedHeaderName === "winRate")?"selectedTableItem ":"")+((this.props.selectedChampion === champ.id && this.props.selectedTableItemRole === champ.role) ? "select ":"") +  "tableRows tableColumn-winRate"} style={numColor(champ.winRate)} >{Math.round(champ.winRate * 10000) / 100 + "%"} </div>
                <div className={((this.props.selectedHeaderName === "playRate")?"selectedTableItem ":"")+((this.props.selectedChampion === champ.id && this.props.selectedTableItemRole === champ.role) ? "select ":"") +  "tableRows tableColumn-playRate"}>{Math.round(champ.playRate * 10000) / 100 + "%"} </div>
                <div className={((this.props.selectedHeaderName === "banRate")?"selectedTableItem ":"")+((this.props.selectedChampion === champ.id && this.props.selectedTableItemRole === champ.role) ? "select ":"") +  "tableRows tableColumn-banRate"}>{Math.round(champ.banRate * 10000) / 100 + "%"}</div>
                <div className={((this.props.selectedChampion === champ.id && this.props.selectedTableItemRole === champ.role) ? "select ":"") +  "tableRows tableSK"}>{champ.sidekicks.slice(0, 5).map(sk => <img className="skImg" src={"http://ddragon.leagueoflegends.com/cdn/8.23.1/img/champion/" + championKeys[3][sk.championId] + ".png "} alt={championKeys[3][sk.championId]} height="25px" width="25px" /> )}</div>
              </div>
            </div>
          ))}
          </div>
          </div>
        </div>
    );
  }
}
//Takes in a decimal like .50
function numColor(number) {
  let red = 232;
  let green = 215;
  let blue = 30;


  let value = number - .5; //.1,.5,0,-.5,-.1 .6
  //Green rgb(124, 219, 165)
  //Red  rgb(240,72,72)

  if (value <= 0) { //Red Numbers (Value is neg)
      red = red - value * 80 * 2; //-8
      green = green + (value * 1430 * 2); //143
      blue = blue - (value * 420 * 2) //-42
      if (red > 240) red = 240;
      if (green < 72) green = 72;
      if (blue < 72) blue = 72;
  }
  else {
      red = red - value * 1080 * 2; //108
      green = green + (value * 740 * 2); //-74
      blue = blue + (value * 40 * 2) //-4
      if (red < 124) red = 124;
      if (green > 219) green = 219;
      if (blue > 165) blue = 165;
  }

  if (red < 0) red = 0;
  if (green < 0) green = 0;
  if (blue < 0) blue = 0;

  return { color: `rgb(${red},${green},${blue})` };
}

export default ChampTable;
