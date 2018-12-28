import React, { Component } from "react";
import ChampTable from "./componets/champTable";
import Cards from "./componets/cards";
import $ from 'jquery';

import newData from "./data/productionData.json";

import championKeys from "./data/championKeys.json";
import SideKicks from "./componets/sideKicks";
import "./App.css";

import SearchBar from "./componets/SearchBar";


import MobileTable from "./componets/MobileTable";
import RoleBar from "./componets/RoleBar";
import CounterTable from "./componets/CounterTable";


const defautlPostions = {
   role: true ,
   name: false ,
   blindPickTierValue: false ,
   winRate: true ,
   playRate: true ,
   banRate: true 
}

let password = [];
const code = "ieatpears";

window.addEventListener("keyup", addKeys);


function addKeys(e){
	password.push(e.key);
	password.splice(-code.length - 1, password.length - code.length);
	if(password.join('').includes(code)){
      const images = document.getElementsByTagName("IMG").length
      const names = Array.from(document.getElementsByClassName("tableColumn-name"))
      var audio = new Audio('./images/shout-out-to-all-the-pear.mp3');
      audio.play();
      let count = 0
      for(var i = 0; i < images; i++){
        if(count > 7){ count = 0}
        document.getElementsByTagName("IMG")[i].src = './images/ross' + count + '.jpg'
        count++
      }
      names.forEach(name =>{
        name.innerHTML = "Rick 'ROZAAAY' Ross"
      })  
      
    }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.child = React.createRef();
    this.state = {
      searchString: "",
      isClicked: [true, false, false, false, false],
      role: "MIDDLE",
      selectedTableItemRole: "MIDDLE",
      selectedHeaderName: "playRate",
      selectedChampion: 1,
      sideKickIndex: 0,
      positions: [
        { role: false },
        { name: false },
        { blindPickTierValue: false },
        { winRate: true },
        { playRate: true },
        { banRate: true }
      ],
      champs: this.setChamps(),
      get sidekicks() {
        return newData[this.role][championKeys[3][this.selectedChampion]].sidekicks;
      },
    };
  }

  componentWillMount() {
    this.setState({role: "ALL"});
    this.handleChange('',"TOP");
    this.handleSort('playRate',4);
}
componentDidMount() {
  this.handleChange(this.state.champs[0].name,this.state.champs[0].role);
  $(`.tableColumn-playRate`).addClass("selectedTableItem");
}


  handleChange = (e, role) => {
    $('.sidekickOptions').scrollTop(0);
    
    this.setState({selectedTableItemRole: role})
    let championArray = [...this.state.champs]
    console.log('this.state.selectedChampion: '+ this.state.selectedChampion);
    console.log('e: '+ e);
    const matchArray = this.findChampions(e, championArray);
    let searchString = matchArray[0];
    let filteredChampArray = this.findChampions(this.state.searchString,championArray)
    this.setState({champs: filteredChampArray, selectedChampion: searchString.id, sidekicks: newData[role][championKeys[3][searchString.id]].sidekicks, sideKickIndex: 0});
    this.setState({isClicked: [true, false, false, false, false]});

      $(".sChampImg").hide();
      $(".iconBackground").hide();
      $(".iconBackground").fadeIn(700);
      $(".sChampImg").fadeIn(700);
      

  }



  handleSearch = (e) => {
    this.setState({searchString: e});
    let roleArray = this.setChamps()
    if(this.state.role !== "ALL"){
    roleArray = roleArray.filter(position => position.role === this.state.role);
    }
    const matchArray = this.filterSearchedChampions(e, roleArray);
    console.log(matchArray)
    this.setState({champs: matchArray})
    // if(window.innerWidth <= 960 && matchArray.length > 0){
    //   this.setState({role: matchArray[0].role, selectedChampion: matchArray[0].id,sidekicks: newData[matchArray[0].role][championKeys[3][matchArray[0].id]].sidekicks, selectedTableItemRole: matchArray[0].role})
    // }

  }

  findChampions(wordToMatch, championArray) {
    console.log('this.state.selectedChampion: '+ this.state.selectedChampion + " role:" + this.state.selectedTableItemRole);
    return championArray.filter(champ => {
      const regex = new RegExp(wordToMatch, 'giy');
      return champ.name.match(regex)
    }); 
  }

  filterSearchedChampions(wordToMatch, championArray) {
    console.log('this.state.selectedChampion: '+ this.state.selectedChampion + " role:" + this.state.selectedTableItemRole);
    return championArray.filter(champ => {
      if (this.state.selectedChampion == champ.id &&this.state.selectedTableItemRole === champ.role && window.innerWidth >= 960) return true;
      const regex = new RegExp(wordToMatch, 'giy');
      return champ.name.match(regex)
    }); 
  }



  changeRole = (role) => {
    
    let roleArray = this.setChamps()
    if(role !== "ALL"){
     roleArray = roleArray.filter(position => position.role === role);
    }
    if(this.state.searchString !== ""){
      roleArray = this.findChampions(this.state.searchString,roleArray)
    }
    this.setState({role: role});
    this.setState({ champs: roleArray,positions:[
      { role: false },
      { name: false },
      { blindPickTierValue: false },
      { winRate: true },
      { playRate: true },
      { banRate: true }
    ] },()=>{this.handleSort("playRate",4)})

    if(roleArray.length !== 0)
    {
    this.setState({selectedChampion: roleArray[0].id} );
    this.setState({sidekicks: roleArray[0].sidekicks} );
    this.setState({sideKickIndex: 0} );
    this.setState({isClicked: [true, false, false, false, false]});
    this.setState({selectedTableItemRole: roleArray[0].role});
    $('.tableScroll').scrollTop(0);
    $('.sidekickOptions').scrollTop(0);
   }
    
    return roleArray
  }


  setChamps() {
    let champs = []
    for (var role in newData) {
      for(var champ in newData[role])

      champs.push({
        "name": championKeys[3][newData[role][champ].id],
        "id": newData[role][champ].id,
        "winRate": newData[role][champ].winRate,
        "key": newData[role][champ].id,
        "role": role,
        "banRate": newData[role][champ].banRate,
        "sidekicks": newData[role][champ].sidekicks,
        "playRate": newData[role][champ].playRate,
        "blindPickTier": newData[role][champ].blindPickTier,
        "blindPickTierValue": newData[role][champ].blindPickTierValue,
      })

      // if(newData[role][champ].id === champId){
      //   console.log("NAME: "+championKeys[3][newData[role][champ].id])
      // }
      
    }

    return champs
  }

  handleClick = index => {
    let reset = [false, false, false,false, false];
    reset[index] = true;
    this.setState({ sideKickIndex: index });
    this.setState({ isClicked: reset });
    
  };

  active = () => {
    $("#check").removeClass("notActive")
    $("#check").addClass("active")
  }
  notActive = () => {
    $("#check").removeClass("active")
    $("#check").addClass("notActive")
  }
  

  handleSort = (key, index) => {
    const positions = [...this.state.positions];
    const data = [...this.state.champs];
    data.sort(function (a, b) {
      if (a[key] < b[key] && positions[index][key] === true) return 1;
      if (a[key] > b[key] && positions[index][key] === true) return -1;
      if (a[key] < b[key] && positions[index][key] === false) return -1;
      if (a[key] > b[key] && positions[index][key] === false) return 1;
      return 0;
    });
    
    positions.forEach((item,index) => {
      if(item[key] !== undefined) {
        
        positions[index][key] = !positions[index][key];
        $(`.tableHeader-${key}`).addClass((item[key] !== defautlPostions[key]) ? "activeRole selectedTableItem" : "activeReverseRole selectedTableItem");
        $(`.tableHeader-${key}`).removeClass((item[key] === defautlPostions[key]) ? "activeRole" : "activeReverseRole");
      }
      else {
        $(`.tableHeader-${Object.keys(item)[0]}`).removeClass("selectedTableItem activeRole activeReverseRole");
        positions[index][Object.keys(item)[0]] = defautlPostions[Object.keys(item)[0]];
          }
    });
    
    
  
    this.setState({ champs: data, positions,selectedHeaderName: key });
  };
  
  render() {
    return (
      <div className="container"> 
      <div className="navbar">
         <div className="navChildren">
            <img className="navLogo" src={require('./images/SidekickggPB.png')} height='76px' width='340px' alt="The fuck did the logo go" />
         </div>
         <div className="navChildren pearz">
            <SearchBar
               title={this.state.searchString}
               handleSearch={this.handleSearch}
               active={this.active}
               />
               
            <RoleBar
               changeRole={this.changeRole}
               role={this.state.role}
               />
               <span className="mobileOff">
               <MobileTable
                champs={this.state.champs}
                mobileClick={this.handleChange}
                notActive={this.notActive}
                />
               </span>
            
         </div>
      </div>
               
      <div className="upper">
         <div className="championTable">
            <div className="flex">
            </div>
            <ChampTable
               champs={this.state.champs}
               key={this.state.champs.id}
               sortData={this.handleSort}
               handleChange={this.handleChange}
               selectedChampion={this.state.selectedChampion}
               selectedTableItemRole = {this.state.selectedTableItemRole}
               selectedHeaderName = {this.state.selectedHeaderName}
               />
         </div>
         <div className="iconContainer">
            <div className="relative">
               <img className="sChampImg" src={"http://ddragon.leagueoflegends.com/cdn/img/champion/splash/" + championKeys[3][this.state.selectedChampion] + "_0.jpg"} alt={"you broke it"}></img>
               <img className="navBanner" src={require('./images/purpleBanner.png')} alt={"banner"} height="78px" width="60px" />
               <img className="sRoleImg" src={"./images/" + this.state.selectedTableItemRole + ".svg"} alt={this.state.role} height="28px" width="28px" />
               <h1 className="name strokeme">{championKeys[3][this.state.selectedChampion]}'s</h1>
               <h1 className="name strokeme">Sidekicks</h1>
            </div>
            <div className="flex">
               <SideKicks
                  key={this.state.champs.key}
                  sk={this.state.sidekicks}
                  handleClick={this.handleClick}
                  isClicked={this.state.isClicked}
                  selected={this.selectedChampion}
                  />
               <div className="sideKickTable">
                  <Cards
                     skData={this.state.sidekicks}
                     roleData={newData[this.state.selectedTableItemRole]}
                     isClicked={this.state.isClicked}
                     selected={this.state.selectedChampion}
                     />
               </div>
            </div>
         </div>
      </div>
      <div className="bottomTable">
         <CounterTable 
            ref={this.child}
            selectedChampion={newData[this.state.selectedTableItemRole][championKeys[3][this.state.selectedChampion]]}
            bestBans={this.state.sidekicks[this.state.sideKickIndex].worstMatchups}
            championName={championKeys[3][this.state.selectedChampion]}
            sideKick={this.state.sidekicks[this.state.sideKickIndex]}
            roleData={newData[this.state.selectedTableItemRole]}
            />
      </div>
   </div>
    );
  }

}


export default App;
