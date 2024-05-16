import React from 'react';

import Accordion from './Accordion/Accordion';

import {
  title,
  subtitle,
  mainlandAccordionData,
} from '../data/accordionData/mainland/mainlandData';

const Mainland = () => {
  return (
    <Accordion title={title} subtitle={subtitle} data={mainlandAccordionData} />
  );
};

export default Mainland;
