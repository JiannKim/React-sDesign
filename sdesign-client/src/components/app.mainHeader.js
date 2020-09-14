import React from 'react';
import '../style/app.mainHeader.css';

function MainHeader() {
    return(
        <div className="Home-header" >
                <div className="Home-mainImg">
                </div>
                <div className="Home-mainContents"></div>
                <div className="mainText">
                    <h1>완벽한 사운드를 찾아보세요.</h1>
                    <p>매주 업데이트되는 280,000 개 이상의 음향효과 라이브러리를 무제한 다운로드하세요.</p> 
                    <button className="mbtn">음향효과 듣기</button>
                </div>
        </div>
    );
}

export default MainHeader;