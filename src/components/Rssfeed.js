import React from "react"
import Parser from 'rss-parser';
import { css } from "@emotion/core";

class RssFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isExpanded: false,
            feedData: {},
            feedURL: props.feedURL,
            title: props.title,
        }
    }

    fetch = async function fetchRSS() {
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
        let parser = new Parser();

        return await parser.parseURL(CORS_PROXY + this.state.feedURL);

    };
    
    displayFeed() {
        let myRssLoaded = this.fetch()
        if(this.state.loading) {
            myRssLoaded.then(data => {
                var formattedData = [];
                for (const k in data.items) {
                    var feedItem = data.items[k]
                    var filteredFeedArray = [];
                    for (const l in feedItem) {
                        if(  l === 'title' 
                                || l === 'link' 
                                || l === 'author' 
                                || l === 'id'   
                                || l === 'guid'
                            ) filteredFeedArray.push(feedItem[l]);
                    }
                    formattedData.push(filteredFeedArray);
                }
                this.setState({loading: false, feedData: formattedData});
            })
        }
    
        if(this.state.loading) {
            return("loading...")
        } else if (!this.state.isExpanded) {
            return(
                <button onClick={(e) => {this.setState({isExpanded: true})}}>Loaded! Click me to expand Rss Feed.</button>
            )

        } else {
            return([
                this.state.feedData.map( itm => {
                    return(<li className="feed-item" key={itm[3] ? itm[3] : itm[4]}><a href={itm[1]}> {itm[0]} </a><span> | Author: {(itm[2] ? itm[2] : 'None found ')}</span></li>);
                }),
                <button onClick={(e) => {this.setState({isExpanded: false})}}>Collapse</button>
            ]);
        }
    }

    render() {
        return(
            <div css={cardItemCss}>
                <ul>
                    <h3>{this.state.title}</h3>
                    {this.displayFeed()}                   
                </ul>
            </div>
        );
    } 
} export default (RssFeed)


const cardItemCss = css`
    .feed-item{
        background-color: #7fc8f8;
        border: solid, 1px, #A8A8A8;
        border-radius: 25%;
    }

`;

//const collapseButton = react.Element(<div><button onClick={(e) => {this.setState({isExpanded: false})}}>Collapse</button></div>)

// can get images via link below from rss initial data pull
// <media:content xmlns:media="http://search.yahoo.com/mrss/" url="https://images.wsj.net/im-247566/medium" type="image/jpeg" medium="image"></media>