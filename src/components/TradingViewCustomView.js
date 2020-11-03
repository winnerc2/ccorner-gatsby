import React from "react"
//import Parser from 'rss-parser';
import { css } from "@emotion/core";
import TradingViewWidget from 'react-tradingview-widget';
// TODO Restructure setState calls to only change state after the component has been mounted.
// TODO Restrcuture to work as a watch list pulling from database
class TradingViewCustomView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            activeSymbol: null,
            positionList: props.positions,
            watchList: props.watchList,
            symbolList: null,
            isSymbolListBuilt: false,
        }
        this.buildSymbolList(this.state.positionList);
    }

    buildSymbolList(positions) {
        if (!this.state.isSymbolListBuilt) {
            let marketNameList = []
            positions.forEach(pos => {
                marketNameList.push(pos['market_name'])
            });
            this.setActiveSymbol(marketNameList[0])
            this.setState({isSymbolListBuilt: true, symbolList: marketNameList});
        } else {
            return
        }
        
    }

    setActiveSymbol(sym) {
        this.setState({activeSymbol: sym});
    }
    
    displayWidget() {
        this.buildSymbolList(this.state.positionList);
        if (this.state.isSymbolListBuilt) {    
            if (!this.state.activeSymbol) {
                return(
                    <div>
                        <div>
                            {this.state.symbolList.map(sym => {
                                    return(
                                        <li key={'pre_loaded_' + sym}><button onClick={(e) => {this.setActiveSymbol(sym)}}>{sym}</button></li>
                                    );
                                })}
                        </div>Please select a ticker.</div>)
            } else {
                return(
                    <div>
                        <ul>
                            {this.state.symbolList.map(sym => {
                                return(
                                    <li key={sym}><button onClick={(e) => {this.setActiveSymbol(sym)}}>{sym}</button></li>
                                );
                            })}
                            <h3>{this.state.activeSymbol}</h3>
                            <div css={css`height: 360px;`}>
                                <TradingViewWidget symbol={this.state.activeSymbol} autosize></TradingViewWidget>
                            </div>
                        </ul>
                    </div>
                );
            }
        } else {
            return(<div>Loading...</div>)
        }
    }

    render() {
        return(
            <div>
                <ul>
                    <h3>{this.state.title}</h3>
                    {this.displayWidget()}                   
                </ul>
            </div>
        );
    } 
} export default (TradingViewCustomView)


// const cardItemCss = css`
//     .feed-item{
//         background-color: #7fc8f8;
//         border: solid, 1px, #A8A8A8;
//         border-radius: 25%;
//     }

// `;

