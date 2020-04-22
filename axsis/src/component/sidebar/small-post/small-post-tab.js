import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SmallPost1 from './small-post1';
import SmallPost2 from './small-post2';
import './../../../css/component/small-post-tab.css';



class SmallPostTab1 extends Component {
    render() {
        let tab1 = "Recent";
        let tab2 = "Popular";
        return (
            <Tabs>
                <TabList  className="nav widget-tab d-flex text-center">
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                </TabList>

                <TabPanel>
                    <div className="nav widget-tab-body">
                        <SmallPost1 />
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="pricing-tab-content-body">
                        <SmallPost2 />
                    </div>
                </TabPanel>
            </Tabs>
        )
    }
}

export default SmallPostTab1