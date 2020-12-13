import React from "react"
import Hexagon from 'react-hexagon'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Left=()=>{
    return(
        
        <div className="left">
            <div className="profile">Leaane Simpson
            </div>
            <div className="leftcontents">
                    <div className="linksalign"><Link className="links" to="/">Dashboard</Link></div>
                    <div className="linksalign"><Link className="links" to="/report">Orders</Link></div>
                    <div className="linksalign"><Link className="links" to="/setting">Reports</Link></div>
                    <div className="linksalign"><Link className="links" to="/order">Settings</Link></div>
                    <div className="linksalign"><Link className="links" to="/help">Help</Link></div>
            </div>

            <div className="trapezoid"></div>
            <div className="circleshape"></div>
            <div className="circleshape1"></div>
            <div className="rectangle"></div>
            <div className="rectangle1"></div>
            <div className="circleshape2"></div>
            <div className="triangle"></div>
            <div className="triangle1"></div>
            <div className="triangle2"></div>
            <div className="triangle3"></div>
            <Hexagon className="hexagone"
                style={{stroke: 'rgb(240, 197, 57)',}}
                backgroundImage="muqeem.jpg"
                href="http://espen.codes/"kjd
            />
            <div className="triangle4"></div>
            <div className="rectangle2"></div>
            {/* <div className="rectangle3"></div> */}
            <Hexagon className="hexagone1"
                style={{stroke: 'rgb(37, 26, 97)'}}
                backgroundImage="color.png"
                href="http://espen.codes/"
            />
            <div className="cicledesign">
                <div className="topcircle">
                        <div className="circlesmall one"></div>
                </div>
                <div className="topcircle">
                    <div className="circlesmall two"></div>
                    <div className="circlesmall three"></div>
                    <div className="circlesmall four"></div>
                </div>
                    
                    
                <div className="topcircle">
                        <div className="circlesmall one"></div>
                </div>
            </div>
            <div className="cicledesign1">
                <div className="topcircle">
                        <div className="circlesmall1 one"></div>
                        <div className="circlesmall1 two"></div>
                </div>
                <div className="topcircle">
                    
                    <div className="circlesmall1 three"></div>
                </div>
                    
                    
                <div className="topcircle">
                         <div className="circlesmall1 four"></div>
                        <div className="circlesmall1 one"></div>
                </div>
            </div>
            <div className="cicledesign2">
                <div className="topcircle">
                        <div className="circlesmall1 one"></div>
                        <div className="circlesmall1 two"></div>
                </div>
                <div className="topcircle">
                    
                    <div className="circlesmall1 three"></div>
                </div>
                    
                    
                <div className="topcircle">
                         <div className="circlesmall1 four"></div>
                        <div className="circlesmall1 one"></div>
                </div>
            </div>


            

        </div>
    )
}

export default Left;