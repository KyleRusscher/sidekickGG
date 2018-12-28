import React, { Component } from 'react';
import championKeys from "../data/championKeys.json";
class SideKicks extends Component {
    render() {
        return (
            <div className="sidekickOptions">
            
                {this.props.sk.map((sidekick, index) =>
                    <div onClick={() => this.props.handleClick(index)} className={"iconBackground"} style={{ background: "url(./images/place"+ (index + 1 <= 3 ? index + 1 : "transparent") + ".jpg), url(./images/" + sidekick.tier + "_Wrap.png), url(http://ddragon.leagueoflegends.com/cdn/8.23.1/img/champion/" + championKeys[3][sidekick.championId] + ".png)" }} />

                )}
                
            </div>
        );
    }
}

export default SideKicks; 