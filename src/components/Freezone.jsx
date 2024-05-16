import React from 'react';

import Accordion from './Accordion/Accordion';

import {
  title,
  subtitle,
  freezoneAccordionData,
} from '../data/accordionData/freezone/freezoneData';

const Freezone = () => {
  return (
    <Accordion title={title} subtitle={subtitle} data={freezoneAccordionData} />
  );
};

export default Freezone;
