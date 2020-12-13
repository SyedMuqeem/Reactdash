import React from "react"
import Right4 from "./Right4"
import chart from "./Apexchart1"
import ApexChart from "./Apexchart1"
import ApexChart2 from "./Apexchart2"


 
const Rightdash= () => {
    return(
        <div className="right">
            <div className="right1">
                <div className="dashboard"><b>Dashboard</b></div>
                <div className="searchicon"><i class="fas fa-search"></i></div>
            </div>
            <div className="right2">
                <div className="box1">
                    <div className="boxinsideleft">
                        <div className="boxtop"><b>Today</b></div>
                        <div className="boxbottom1">$5,572</div>
                    </div>
                    <div className="boxinsideright"><div className="numberbox"><b>6 orders</b></div>
                    </div>
                </div>
                <div className="box">
                <div className="boxinsideleft">
                        <div className="boxtop"><b>Yesterday</b></div>
                        <div className="boxbottom">$6,373</div>
                    </div>
                    <div className="boxinsideright"><div className="numberbox"><b>4 orders</b></div>
                    </div>
                </div>
                <div className="box">
                <div className="boxinsideleft">
                        <div className="boxtop"><b>Last week</b></div>
                        <div className="boxbottom">$46k</div>
                    </div>
                    <div className="boxinsideright"><div className="numberbox"><b>62 orders</b></div>
                    </div>
                </div>
                <div className="box">
                <div className="boxinsideleft">
                        <div className="boxtop"><b>Last month</b></div>
                        <div className="boxbottom">~$106k</div>
                    </div>
                    <div className="boxinsideright"><div className="numberbox"><b>126 orders</b></div>
                    </div>
                </div>
            </div>
            <div className="right3">
                <div className="revenuebox">
                    <div className="revenuebox1">
                        <div className="revenuecolor">
                            <div className="colorbar"></div>
                        </div>
                        <div className="revenuecontent">
                            <div className="revenuecontentword">Revenue</div>
                            <div className="revenuecontentamount">$5,712</div>
                            <div className="revenuecontentbutton">5(36%); &#8599;</div>
                        </div>
                    </div>
                    <div className="revenuebox1">
                        <div className="revenuecolor">
                            <div className="colorbar1"></div>
                        </div>
                        <div className="revenuecontent">
                            <div className="revenuecontentword">Order</div>
                            <div className="revenuecontentamount">6</div>
                            <div className="revenuecontentbutton1">5(36%);  &#8600;</div>
                        </div>
                    </div>
                </div>

                <div className="revenuegraph"> <div><ApexChart/></div>
                                                <div><ApexChart2/></div>
                </div>
            </div>
            <Right4/>
            

        </div>
    )
}
export default Rightdash;
