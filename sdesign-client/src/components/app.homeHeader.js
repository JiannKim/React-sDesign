import React from 'react';
import '../style/app.homeHeader.css';

function HomeHeader() {
    return(
        <div className="Home-header" >
            {/* <img src="https://i.ibb.co/p6HBSw4/denisse-leon-OVEWb-Igff-Dk-unsplash.jpg" alt="denisse-leon-OVEWb-Igff-Dk-unsplash" width="5184" height="3456" data-load="full" style=""/> */}
            <img className="Home-mainImg" src="https://i.ibb.co/LDTX3R9/denisse-leon-OVEWb-Igff-Dk-unsplash.jpg" alt="denisse-leon-OVEWb-Igff-Dk-unsplash" />
            {/* <img className="Home-mainImg" src="https://i.ibb.co/fYR6vW6/Home-main-Image.png" alt="Home-main-Image" /> */}
            {/* <img className="Home-mainImg" src="https://i.ibb.co/t4tLvW1/Home-main-Image.png" alt="Home-main-Image" /> */}
        </div>
    );
}

export default HomeHeader;