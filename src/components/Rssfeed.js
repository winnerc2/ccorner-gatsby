import React from "react"
import Parser from 'rss-parser';
import { css } from "@emotion/core";
import checkmarkLogo from "../../assets/checkmark.png"
const regex_url =/(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/ig;
const regex_wth =/(https:\/\/.{23}.jpg)/ig;
const regex_img =/https:\/\/.*.(?:(jpg|png|gif))/igm;

class RssFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            isExpanded: false,
            feedData: [],
            feedURL: props.feedURL,
            title: props.title,
            feedType: props.feedType,
        }
    }

    fetch = async function fetchRSS() {
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
        let parser = new Parser();

        return await parser.parseURL(CORS_PROXY + this.state.feedURL);

    };

    parseContent(content) {
        var result = "";
        var matchA = [];
        switch (this.state.feedType) {
            case "REDDIT_TYPE":
                matchA = content.match(regex_url);
                result = "";
                for (const s in matchA) {
                    if (regex_img.test(matchA[s])) {
                        result = matchA[s]
                    }
                }
                break;
            case "WSJ":
                // no content requires parsing
                break;
            default:
                result = "";
        }
        return result
    }

    getFeedItemImg(dataContent) {
        let url;
        url = this.parseContent(dataContent)
        return url;
    }
    
    filterFeedResponse(itemsArray) {
        let resultArray = [];
        switch (this.state.feedType) {
            case "REDDIT_TYPE":
                for (const k in itemsArray) {
                    var feedItem = itemsArray[k]
                    var filteredFeedArray = [];
                    filteredFeedArray.push(feedItem.title);
                    filteredFeedArray.push(feedItem.link);
                    filteredFeedArray.push(feedItem.author);

                    var imgURL = this.getFeedItemImg(feedItem.content);
                    filteredFeedArray.push(imgURL ? true : false); // hasImage?
                    filteredFeedArray.push(imgURL); // img url
                    filteredFeedArray.push(feedItem.id);
                    filteredFeedArray.push(''); // Reddit doesn't preview text currently.
                    resultArray.push(filteredFeedArray);
                }
                break;
            case "DJ_TYPE":
                break;
            case "WSJ":
                for (const k in itemsArray) {
                    var feedItem = itemsArray[k];
                    var filteredFeedArray = [];
                    filteredFeedArray.push(feedItem.title);
                    filteredFeedArray.push(feedItem.link);
                    filteredFeedArray.push('');// wsj gives no author
                    filteredFeedArray.push(false);// wsj gives no image
                    filteredFeedArray.push('');// img url
                    filteredFeedArray.push(feedItem.guid);
                    filteredFeedArray.push(feedItem.content); // WSJ content holds article beginning.
                    resultArray.push(filteredFeedArray);
                }

                break;
            default:
                resultArray = [];
        }
        return resultArray;
    }

    displayFeed() {
        let myRssLoaded = this.fetch();  // get rss feed data and parse into object
        if(this.state.loading) {
            // once rss data has loaded...
            myRssLoaded.then(data => {
                console.log(data)
                var formattedData = [];
                formattedData = this.filterFeedResponse(data.items);    // filter data based on the feedType props property.
                this.setState({loading: false, feedData: formattedData}); // update data; no longer loading.
            })
        }
    
        if(this.state.loading) {
            return("loading...")
        } else if (!this.state.isExpanded) {
            // return button to expand rss feed
            return(
                <button onClick={(e) => {this.setState({isExpanded: true})}}><img src={checkmarkLogo} alt="checkmark-loaded"></img> Expand News</button>
            );

        } else {
            return([
                <button onClick={(e) => {this.setState({isExpanded: false})}}>Collapse</button>,
                this.state.feedData.map( itm => {
                    console.log(itm)
                    const imgHTMLStr = <img src={itm[4]} alt="Reddit Post img Content"></img>
                    const dummyImgHTMLStr = <div></div>
                    const textContentHTMLStr = <p>{itm[6]}</p>
                    // itm array = [title, post link, author, hasImage, image url, key, text content, ...]
                    return(<li className="feed-item" key={itm[5] ? itm[5] : 'Key Error'}>
                                <a href={itm[1]}> <h3>{itm[0]}</h3>{itm[3] ? imgHTMLStr : dummyImgHTMLStr}</a>
                                <span>  {(itm[2] ? "Author: " + itm[2] : '')}</span>
                                {itm[3] ? '' : textContentHTMLStr}
                            </li>);
                }),
                <button onClick={(e) => {this.setState({isExpanded: false})}}>Collapse</button>
            ]);
        }
    }

    render() {
        return(
            <div css={cardItemCss}>
                <div className="rssfeed">
                <ul className="feed-list">
                    <h3>{this.state.title}</h3>
                    {this.displayFeed()}                   
                </ul>
                </div>
            </div>
        );
    } 
} export default (RssFeed)


const cardItemCss = css`
    {
        padding: 1rem;
        width: 95%;
    }

    h3 {
        text-align: center;
        font-size: 2rem;
    }

    ul {
        margin: 0 auto;
        padding: 0;
        width: 90%;
        padding-inline-start: 0;
    }

    button img {
        max-width: 2em;
    }

    .rssfeed{
        background-color: #f9f9f9;

    }
    .feed-item{
        background-color: beige;
        padding: 1em;
        margin: .3em 0.5em;
        list-style: none;
    }
    .feed-item img{
        max-width: 100%;
    }

`;