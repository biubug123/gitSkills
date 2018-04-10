import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import Demo from "./listViewExample";

export default class TabsExample extends React.Component{
    render() {
        const tabs = [
            { title: 'First Tab' },
            { title: 'Second Tab' },
            { title: 'Third Tab' },
        ];

        const TabsExample = () => (
            <div>
                <WhiteSpace />
                <StickyContainer>
                    <Tabs tabs={tabs}
                          initalPage={'t2'}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                            <Demo/>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                            Content of second tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
                            Content of third tab
                        </div>
                    </Tabs>
                </StickyContainer>
                <WhiteSpace />
            </div>
        );
        return(
            <TabsExample/>
        )
    }
}

