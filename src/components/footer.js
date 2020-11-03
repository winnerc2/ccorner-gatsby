import React from "react"

const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 12);
    }
  };


export default function Footer(props) {
return (<div id="footer">
    <button onClick={scrollToTop}>^</button>
    <p>Created by Caleb Winner: https://github.com/winnerc2/ccorner-gatsby</p>
</div>);
}