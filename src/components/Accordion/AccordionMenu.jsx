import React, { useState } from 'react';
import { Text, View } from 'react-native';

import AccordionItem from './AccordionItem';

const AccordionMenu = ({ data }) => {
  const [openId, setOpenId] = useState(null);

  return data.map((item, id) => (
    <AccordionItem
      key={id}
      title={item.title}
      subtitle={item.subtitle}
      img={item.img}
      onPress={() => (id === openId ? setOpenId(null) : setOpenId(id))}
      isOpen={id === openId}
    />
  ));
};

export default AccordionMenu;
