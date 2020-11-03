import React from "react"
import Container from "../components/container";
import FirebaseTest from "../components/firebaseTest";
import Layout from "../components/layout";
import Rssfeed from "../components/Rssfeed";

export default function Home() {
  return (
  <div>
    <Layout pageTitle="">
    <Container>
    <div>
      <FirebaseTest></FirebaseTest>
      <h2>News</h2>
      <Rssfeed feedURL="https://feeds.a.dj.com/rss/RSSWSJD.xml" title="WSJ Tech news" feedType="WSJ"></Rssfeed>
      <Rssfeed feedURL="https://www.reddit.com/.rss" title="Reddit Front Page" feedType="REDDIT_TYPE"></Rssfeed>
      <Rssfeed feedURL="https://www.reddit.com/r/wallstreetbets.rss" title="r/WSB" feedType="REDDIT_TYPE"></Rssfeed>
      <Rssfeed feedURL="https://www.reddit.com/r/investing.rss" title="r/investing" feedType="REDDIT_TYPE"></Rssfeed>
      <Rssfeed feedURL="https://www.cnbc.com/id/10001147/device/rss/rss.html" title="CNBC Finace"></Rssfeed>

    </div>
    </Container>
    </Layout>
  </div>);
}
