import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SectionHeader from './../component/section-header';
import Price1 from './../component/price1';
import Price2 from './../component/price2';
import './../css/pricing-section.css';

// header section content
const title = <h3 className='mb--15'>Standard Price  for Premium Services</h3>;
const subtitle = <h6>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo<br />justo. Nullam dictum felis eu pede mollis pretium.</h6>;
const alignment = 'section-header text-center pb--60';

class PricingSection extends Component {
    render() { 
        let tab1 = "Monthly";
        let tab2 = "Yearly";
        return (
            <section id="pricing" className="pricing-section pt--50 pb--50">
                <div className="container p-lg-0">
                    <SectionHeader 
                        title={ title } 
                        subtitle={ subtitle }
                        alignment={alignment}
                    />
                </div>

                <div className="container p-lg-0">
                <Tabs>
                    <TabList  className="nav axsis-price-control justify-content-center">
                        <Tab>{tab1}</Tab>
                        <Tab>{tab2}</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="pricing-tab-content-body">
                            <Price1></Price1>
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="pricing-tab-content-body">
                            <Price2></Price2>
                        </div>
                    </TabPanel>
                </Tabs>
                </div>
            </section>
        )
    }
}

export default PricingSection;