import React, { useState } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import "./tab.css";
import { tabs } from '../../content';
import { tabContent } from '../../content'
import Card from '../Cards/Card';

const TabCard = () => {
  const [selectedTab, setSelectedTab] = useState('tab-1');

  return (
    <Tabs selecteditem={selectedTab} onChange={setSelectedTab}>

      <TabList>
        {tabs.map(tab => (
          <Tab key={tab.id} item={tab.id}>{tab.name}</Tab>
        ))}
      </TabList>

      {tabContent.map(tab => (
        <TabPanel item={tab.id} key={tab.id}>
          <Card tab={tab}/>
        </TabPanel> 
      ))}


    </Tabs>
  );
};

export default TabCard;
