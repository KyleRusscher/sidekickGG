
import React, { Component } from 'react';

class MobileTable extends Component {
    render() {
        return (
            <div id="check" className={"iq80"} onClick={this.props.notActive}> 
            {this.props.champs.slice(0,5).map(champ => 
                <div onClick={() => this.props.mobileClick(champ.name, champ.role)} className="option" >
                 <img className="mtCI" src={"./images/" + champ.role + ".svg"} alt="pears" height="18px" width="18px"/>
                 <img  src={"http://ddragon.leagueoflegends.com/cdn/8.23.1/img/champion/" + champ.name + ".png "} alt="pears" height="25px" width="25px"/>
                <span>{champ.name}</span>
            
            
        </div>
        )}
      </div>
        );
    }
}

export default MobileTable; 