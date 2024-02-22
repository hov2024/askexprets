import React from 'react';
import { Collapse } from 'antd';

const text = `
  A dog is a type of domesticated animal.
`;

const items = [
  {
    key: '1',
    label: '24/7 system monitoring',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'Security management',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'Secure finance backup',
    children: <p>{text}</p>,
  },
  {
    key: '4',
    label: 'Remote support',
    children: <p>{text}</p>,
  },
];


const YourPlanCollaps = () => {
  return <Collapse defaultActiveKey={['1']} ghost items={items} />
}

export default YourPlanCollaps