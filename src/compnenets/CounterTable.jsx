import React, { Component } from 'react';
import $ from 'jquery';

const defaultSortDirection = { counterRank: false, counterName: false, count: true, counterWinRate: false }; //True means lower numbers come first


class CounterTable extends Component {

    constructor(props) {
        super(props);
        this.handleCountersSort = this.handleCountersSort.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.filterChampions = this.filterChampions.bind(this);
        this.styleSortHeaders = this.styleSortHeaders.bind(this);
        //this.handleChampionChange = this.handleChampionChange.bind(this);
        this.state = {
            sortedTable: 'left',
            sortedField: 'counterRank',
            counterSearchString: '',
            leftCounters: [],
            rightCounters: [],
            sortHeader: { counterRank: false, counterName: false, count: false, counterWinRate: false },
            sortDirection: { counterRank: true, counterName: false, count: true, counterWinRate: false }
        };
    }



    isBestBan(name){
        const banPlace = this.props.bestBans.reduce((acc,banItem,index ) =>{
            //if(name == "Fiora") console.log("index: " + index + "banItem"+ banItem.championName)
            if( this.props.bestBans[index-1].championName == name && index-1 === 0) return "1st";
            if( this.props.bestBans[index-1].championName == name && index-1 === 1) return "2nd";
            if( this.props.bestBans[index-1].championName == name && index-1 === 2) return "3rd";

            return acc;
        });
        //console.log("name: "+name + "banplace"+ JSON.stringify(this.props.bestBans.slice(0,3)));
        if(banPlace.length === undefined) return false;
        return banPlace;
    }

    handleSearch(e) {
        this.setState({counterSearchString: e.target.value},this.filterChampions(this.state.sortedTable,this.state.sortedField,e.target.value))
    }

    componentWillReceiveProps(prevProps, prevState) { //takes in RoleData and SideKick & role and championName. The 

        const field = "counterRank";
        const sortSide = "left";
        let championData = prevProps.roleData[prevProps.championName];
        let sideKickData = prevProps.roleData[prevProps.sideKick.championName];
        
        let championCounters = championData.counters;
        let sideKickCounters = sideKickData.counters;
        let sortHighToLow = false;

        if (sortSide === 'left') {
            championCounters.sort((a, b) => {
                if (sortHighToLow && a[field] >= b[field]) return -1;
                if (!sortHighToLow && a[field] >= b[field]) return 1;
                if (sortHighToLow && a[field] < b[field]) return 1;
                if (!sortHighToLow && a[field] < b[field]) return -1;
            });
            sideKickCounters = [];
            championCounters.forEach(counter => {
                (sideKickData.matchups[counter.counterName]) ? sideKickCounters.push(sideKickData.matchups[counter.counterName]) : sideKickCounters.push({ counterRank: "-", counterName: counter.counterName, counterWinRate: "- -.- -" })
            });
        }
        else {
            sideKickCounters.sort((a, b) => {
                if (sortHighToLow && a[field] >= b[field]) return -1;
                if (!sortHighToLow && a[field] >= b[field]) return 1;
                if (sortHighToLow && a[field] < b[field]) return 1;
                if (!sortHighToLow && a[field] < b[field]) return -1;
            });
            championCounters = [];
            sideKickCounters.forEach(counter => {
                (championData.matchups[counter.counterName]) ? championCounters.push(championData.matchups[counter.counterName]) : console.log("HIT")//championCounters.push({counterRank: "-",counterName: counter.counterName, counterWinRate: "--.--%"})
            });
        }
        $('.linked-scrollbar-fixed').scrollTop(0);
        this.setState({ sortedTable: 'left',
        sortedField: 'counterRank',
        counterSearchString: '',
        leftCounters: championCounters,
        rightCounters: sideKickCounters,
        sortHeader: { counterRank: true, counterName: false, count: false, counterWinRate: false },
        sortDirection: { counterRank: false, counterName: false, count: true, counterWinRate: false }});  
      }

    filterChampions(sortSide, field,css) {

        let championData = this.props.roleData[this.props.championName];
        let sideKickData = this.props.roleData[this.props.sideKick.championName];
        
        let championCounters = championData.counters;
        let sideKickCounters = sideKickData.counters;
        let sortHighToLow = true;

         championCounters = championCounters.filter(champ => {
            return champ.counterName.match( new RegExp(css, 'giy'))
          });
         sideKickCounters = sideKickCounters.filter(champ => {
            return champ.counterName.match( new RegExp(css, 'giy'))
          });

        if (this.state.sortHeader[field] !== true || this.state.sortedTable !== sortSide) {
            let sortHeader = Object.assign({}, Object.keys(this.state.sortHeader).forEach(v => this.state.sortHeader[v] = false));    //creating copy of object with all false
            
            sortHeader[field] = true;          
            this.setState({ sortHeader});              //updating value
            sortHighToLow = !defaultSortDirection[field];
        } else {
            let sortDirection = Object.assign({}, this.state.sortDirection);
            sortDirection[field] = !sortDirection[field];
            sortHighToLow = !sortDirection[field];
        }

        if (sortSide === 'left') {
            championCounters.sort((a, b) => {
                if (sortHighToLow && a[field] >= b[field]) return -1;
                if (!sortHighToLow && a[field] >= b[field]) return 1;
                if (sortHighToLow && a[field] < b[field]) return 1;
                if (!sortHighToLow && a[field] < b[field]) return -1;
            });
            sideKickCounters = [];
            championCounters.forEach(counter => {
                (sideKickData.matchups[counter.counterName]) ? sideKickCounters.push(sideKickData.matchups[counter.counterName]) : sideKickCounters.push({ counterRank: "-", counterName: counter.counterName, counterWinRate: "- -.- -" })
            });
        }
        else {
            sideKickCounters.sort((a, b) => {
                if (sortHighToLow && a[field] >= b[field]) return -1;
                if (!sortHighToLow && a[field] >= b[field]) return 1;
                if (sortHighToLow && a[field] < b[field]) return 1;
                if (!sortHighToLow && a[field] < b[field]) return -1;
            });
            championCounters = [];
            sideKickCounters.forEach(counter => {
                (championData.matchups[counter.counterName]) ? championCounters.push(championData.matchups[counter.counterName]) : console.log("HIT")//championCounters.push({counterRank: "-",counterName: counter.counterName, counterWinRate: "--.--%"})
            });
        }
        
        this.setState({rightCounters: sideKickCounters, leftCounters: championCounters});

          
    }

    handleCountersSort(sortSide, field) {
        let championData = this.props.roleData[this.props.championName];
        let sideKickData = this.props.roleData[this.props.sideKick.championName];
        let championCounters = [];
        let sideKickCounters = [];

        if(this.state.counterSearchString === ''){
        championCounters = championData.counters;
        sideKickCounters = sideKickData.counters;
        }
        else {
            championCounters = this.state.leftCounters;
            sideKickCounters = this.state.rightCounters;
        }

        let sortHighToLow = true;

        if (this.state.sortHeader[field] !== true || this.state.sortedTable !== sortSide) {
            let sortHeader = Object.assign({}, Object.keys(this.state.sortHeader).forEach(v => this.state.sortHeader[v] = false));    //creating copy of object with all false
            sortHeader[field] = true;                        //updating value
            this.setState({ sortHeader, sortDirection: defaultSortDirection });
            sortHighToLow = defaultSortDirection[field];
        } else {
            let sortDirection = Object.assign({}, this.state.sortDirection);
            sortDirection[field] = !sortDirection[field];
            this.setState({ sortDirection })
            sortHighToLow = sortDirection[field];
        }

        if (sortSide === 'left') {
            this.setState({ sortedTable: "left" });
            championCounters.sort((a, b) => {
                if (sortHighToLow && a[field] >= b[field]) return -1;
                if (!sortHighToLow && a[field] >= b[field]) return 1;
                if (sortHighToLow && a[field] < b[field]) return 1;
                if (!sortHighToLow && a[field] < b[field]) return -1;
            });
            sideKickCounters = [];
            championCounters.forEach(counter => {
                (sideKickData.matchups[counter.counterName]) ? sideKickCounters.push(sideKickData.matchups[counter.counterName]) : sideKickCounters.push({ counterRank: "-", counterName: counter.counterName, counterWinRate: "- -.- -" })
            });
        }
        else {
            this.setState({ sortedTable: "right" });
            sideKickCounters.sort((a, b) => {
                if (sortHighToLow && a[field] >= b[field]) return -1;
                if (!sortHighToLow && a[field] >= b[field]) return 1;
                if (sortHighToLow && a[field] < b[field]) return 1;
                if (!sortHighToLow && a[field] < b[field]) return -1;
            });
            championCounters = [];
            sideKickCounters.forEach(counter => {
                (championData.matchups[counter.counterName]) ? championCounters.push(championData.matchups[counter.counterName]) : console.log("HIT")//championCounters.push({counterRank: "-",counterName: counter.counterName, counterWinRate: "--.--%"})
            });
        }
        
        this.setState({rightCounters: sideKickCounters, leftCounters: championCounters, sortedField: field});

    }


    styleSortHeaders(field, side) {
        if (this.state.sortHeader[field] && this.state.sortedTable === side) {
            return (this.state.sortDirection[field] !== defaultSortDirection[field]) ? "selectedCounterTableItem activeReverseRole " : "selectedCounterTableItem activeRole "
        }
        else return "";
    }

    styleSortColumns(field, side) {
        if (this.state.sortHeader[field] && this.state.sortedTable === side) {
            return "selectedCounterTableItem"
        }
        else return "";
    }

    componentWillMount() {
        this.handleCountersSort("left", "counterRank")
    }


    componentDidMount() {

        $('.linked-scrollbar-fixed').attr("data-scrolling", "false");

        $('.linked-scrollbar-fixed').scroll(function () {
            if ($(this).attr("data-scrolling") === "false") {
                $('.linked-scrollbar-fixed').not(this).attr("data-scrolling", "true");
                $('.linked-scrollbar-fixed').not(this).scrollTop($(this).scrollTop());
            }
            $(this).attr("data-scrolling", "false");
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="counterTable leftTable" >
                    <div className="counterTableTitle">
                    
                        <div className="cttImage"><img className="tableImg" src={"http://ddragon.leagueoflegends.com/cdn/8.23.1/img/champion/" + this.props.championName + ".png "} alt={this.props.championName} height="45px" width="45px" /></div>
                        <div className="cttText"><h1 >{ this.props.championName}'s Matchups</h1> <h2>( 8.21 - current )</h2></div>
                        <input className="counterSearchBar" type="text" value={this.state.counterSearchString} onChange={this.handleSearch} placeholder="Search" />  
                    </div>
                    <div className="counterTableHeader">
                        <div className={this.styleSortHeaders("counterRank", "left") + " counterRankTitle"} onClick={() => this.handleCountersSort("left", "counterRank")} >Counter<br />Rank</div>
                        <div className={this.styleSortHeaders("counterName", "left") + " counterNameTitle"} onClick={() => this.handleCountersSort("left", "counterName")}>    Champion</div>
                        <div className={this.styleSortHeaders("count", "left") + " counterMatchesTitle"} onClick={() => this.handleCountersSort("left", "count")}>Games <br /> Played</div>
                        <div className={this.styleSortHeaders("counterWinRate", "left") + " counterWRTitle"} onClick={() => this.handleCountersSort("left", "counterWinRate")}>{this.props.championName}'s<br />Win Rate<br />
                        </div>
                    </div>

                    <div className="counterData linked-scrollbar-fixed" >
                        {this.state.leftCounters.map((champ, index) => (
                            <div className="counterDataItem">
                                <div className={this.styleSortColumns("counterRank","left") +" counterRank"} >{(champ.counterRank) ? champ.counterRank : "-"}<h1 className="greySmall">/ {this.props.roleData[this.props.championName].counters.length}</h1> </div>

                                <div className={this.styleSortColumns("counterName","left") +" counterName"}><img className="tableImg" src={"http://ddragon.leagueoflegends.com/cdn/8.23.1/img/champion/" + champ.counterName + ".png "} alt={champ.counterName} height="30px" width="30px" />{champ.counterName}<div className={(this.isBestBan(champ.counterName))? "bestBanText" : "hiddenText"}>{this.isBestBan(champ.counterName) + " Ban"} </div></div>

                                <div className={this.styleSortColumns("count","left") +" counterMatches"}>{champ.count}</div>

                                <div className={this.styleSortColumns("counterWinRate","left") +" counterWR"} style={numColor(1 - champ.counterWinRate)}>{(100 * (1 - champ.counterWinRate)).toFixed(2)}% </div>

                            </div>
                        ))}
                    </div>
                </div>
                <div className="counterTable" >
                    <div className="counterTableTitle">
                        <div className="cttTextSK">
                            <div className="cttImageSK"><img className="tableImg" src={"http://ddragon.leagueoflegends.com/cdn/8.23.1/img/champion/" + this.props.sideKick.championName + ".png "} alt={this.props.sideKick.championName} height="45px" width="45px" /></div>
                            <div className="cttText1"><h1>{`${this.props.sideKick.championName}'s Matchups`}</h1><h2>( 8.21 - current )</h2></div>
                        </div>
                        <input className="counterSearchBar" type="text" value={this.state.counterSearchString} onChange={this.handleSearch} placeholder="Search" />  
                    </div>
                    <div className="counterTableHeader">
                        <div className={this.styleSortHeaders("counterRank", "right") + " counterRankTitle"} onClick={() => this.handleCountersSort("right", "counterRank")}>Counter<br />Rank</div>
                        <div className={this.styleSortHeaders("counterName", "right") + " counterNameTitle"} onClick={() => this.handleCountersSort("right", "counterName")}>Champion</div>
                        <div className={this.styleSortHeaders("count", "right") + " counterMatchesTitle"} onClick={() => this.handleCountersSort("right", "count")}>Games <br /> Played</div>
                        <div className={this.styleSortHeaders("counterWinRate", "right") + " counterWRTitle"} onClick={() => this.handleCountersSort("right", "counterWinRate")}>{this.props.sideKick.championName}'s<br />Win Rate<br />
                        </div>
                    </div>

                    <div className="counterData linked-scrollbar-fixed" >
                        {this.state.rightCounters.map((champ, index) => (
                            <div className="counterDataItem">
                                <div className={this.styleSortColumns("counterRank","right") +" counterRank"} >{(champ.counterRank) ? champ.counterRank : "-"}<h1 className="greySmall">/ {this.props.roleData[this.props.sideKick.championName].counters.length}</h1> </div>
                                <div className={this.styleSortColumns("counterName", "right") + " counterName"}><img className="tableImg" src={"http://ddragon.leagueoflegends.com/cdn/8.23.1/img/champion/" + champ.counterName + ".png "} alt={champ.counterName} height="30px" width="30px" />{champ.counterName}<div className={(this.isBestBan(champ.counterName))? "bestBanText" : "hiddenText"}>{this.isBestBan(champ.counterName) + " Ban"} </div></div>
                                <div className={this.styleSortColumns("count","right") +" counterMatches"}>{(champ.count) ? champ.count : "-"}</div>
                                <div className={this.styleSortColumns("counterWinRate","right") +" counterWR"} style={( champ.counterWinRate && champ.counterWinRate !==  "- -.- -") ? numColor(1 - champ.counterWinRate) : { color: "yellow" }}>{(champ.counterWinRate && champ.counterWinRate !== "- -.- -") ? (100 * (1 - champ.counterWinRate)).toFixed(2) : champ.counterWinRate}% </div>
                            </div>
                        ))}

                    </div>

                </div>

            </React.Fragment >

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

export default CounterTable; 