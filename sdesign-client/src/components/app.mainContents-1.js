import React from 'react';
import '../style/app.mainContents copy.css';

function MainContents() {
    return(
        <section className="Home-content">
            <h1>음향효과 찾아보기</h1>
            <div className="home-categories">
                <div className="browse-container">
                    <a href="#">
                        <img src="https://i.ibb.co/X8NkVLQ/walla.png" alt="walla sound effects" />
                    </a>
                    <h3>walla</h3>
                </div>
                <div className="browse-container">
                    <a href="#">
                        <img src="https://i.ibb.co/Gp7Rzb2/whoosh.png" alt="whoosh sound effects" />
                    </a>
                    <h3>whoosh</h3>
                </div>
                <div className="browse-container">
                    <a href="#">
                        <img src="https://i.ibb.co/C90RPzt/wind.png" alt="walla sound effects" />
                    </a>
                    <h3>wind</h3>
                </div>
                <div className="browse-container">
                    <a href="#">
                        <img src="https://i.ibb.co/4sQCBYB/footsteps.png" alt="walla sound effects" />
                    </a>
                    <h3>footsteps</h3>
                </div>
            </div>
        </section>
    );
}

export default MainContents;