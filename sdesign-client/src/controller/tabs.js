import React, { useState } from "react";

export const content = [
  {
    tab: "최신",
    content:
    <div className="home-categories latest">
        <div className="browse-container">
            <a href="#">
                <img src="https://i.ibb.co/8KBMxX2/theme-Park.png" alt="walla sound effects" />
                <h3><span>theme park</span></h3>
            </a>
        </div>
        <div className="browse-container">
            <a href="#">
                <img src="https://i.ibb.co/YD33HH5/GFX.png" alt="whoosh sound effects" />
                <h3><span>gfx animation</span></h3>
            </a>
        </div>
        <div className="browse-container">
            <a href="#">
                <img src="https://i.ibb.co/6RYyQWc/final-Round.png" alt="walla sound effects" />
                <h3><span>final round</span></h3>
            </a>
        </div>
        <div className="browse-container">
            <a href="#">
                <img src="https://i.ibb.co/zVDXFhL/quiet.png" alt="walla sound effects" />
                <h3><span>quiet streets</span></h3>
            </a>
        </div>
    </div>
  },
  {
    tab: "장소",
    content:
    <div className="home-categories location">
        <div className="browse-container">
            <a href="#">
                <img src="https://i.ibb.co/s5VyDf8/seoul.png" alt="walla sound effects" />
                <h3><span>서 울</span></h3>
            </a>
        </div>
        <div className="browse-container">
            <a href="#">
                <img src="https://i.ibb.co/CH6yPL9/shanghai.png" alt="whoosh sound effects" />
                <h3><span>상 하 이</span></h3>
            </a>
        </div>
        <div className="browse-container">
            <a href="#">
                <img src="https://i.ibb.co/0sQ6w2r/london.png" alt="walla sound effects" />
                <h3><span>런 던</span></h3>
            </a>
        </div>
        <div className="browse-container">
            <a href="#">
                <img src="https://i.ibb.co/qryWT7S/india.png" alt="walla sound effects" />
                <h3><span>인 도</span></h3>
            </a>
        </div>
    </div>
  },
  {
    tab: "태그",
    content:
    <div className="home-categories tags">
        <div className="tags-container">
            <a href="#">
                <h3><span>적막한</span></h3>
            </a>
        </div>
        <div className="tags-container">
            <a href="#">
                <h3><span>시원한</span></h3>
            </a>
        </div>
        <div className="tags-container">
            <a href="#">
                <h3><span>음악</span></h3>
            </a>
        </div>
        <div className="tags-container">
            <a href="#">
                <h3><span>신비로운</span></h3>
            </a>
        </div>
        <div className="tags-container">
            <a href="#">
                <h3><span>습지</span></h3>
            </a>
        </div>
        <div className="tags-container">
            <a href="#">
                <h3><span>소름끼치는</span></h3>
            </a>
        </div>
        <div className="tags-container">
            <a href="#">
                <h3><span>광활한</span></h3>
            </a>
        </div>
        <div className="tags-container">
            <a href="#">
                <h3><span>기계음</span></h3>
            </a>
        </div>
    </div>
  }
];

export const useTabs = (initialTabs, allTabs) => {
  const [contentIndex, setContentIndex] = useState(initialTabs);
  return {
    contentItem: allTabs[contentIndex],
    contentChange: setContentIndex
  };
};

export const useTabColorChange = (index) => {
    const [tabColor] = useState(index);
    return { tabColor : 0 };
};
