import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const Overview = () => (
  <Footer>
    <div className="describe">
      <div className="title-box">
        <div className="title">外觀</div>
        <div className="decorate"></div>
      </div>
      <div className="content">
        白頭鵯體長約17到22公分，額至頭頂純黑色而富有光澤，兩眼上方至後枕白色，形成一白色枕環。耳羽後部有一白斑，此白環與白斑在黑色的頭部均極為醒目，老鳥的枕羽(後頭部)更潔白，所以又叫「白頭翁」。
      </div>
    </div>
    <div className="describe">
      <div className="title-box">
        <div className="title">棲地</div>
        <div className="decorate"></div>
      </div>
      <div className="content">
        白頭翁和麻雀、綠繡眼合稱「城市三寶」，常成群出現在平原區灌木叢、丘陵樹林地帶，以及校園、公園、庭院、行道中的各種高高的電線與樹上。
      </div>
    </div>
    <div className="describe">
      <div className="title-box">
        <div className="title">食性</div>
        <div className="decorate"></div>
      </div>
      <div className="content">
        以果樹的漿果和種子為主食，並時常飛入果園偷吃果實，還會吃嫩葉嫩芽，尤其是胡蝶蘭的嫩葉嫩芽葉，偶爾啄食昆蟲。
      </div>
    </div>
  </Footer>
);

export default Overview;
