import React from 'react';
import { TouchableOpacity } from 'react-native';

import HeartIconSvg from '../../../../assets/svg/buttonIcons/HeartIconSvg';
import HeartFillSvg from '../../../../assets/svg/buttonIcons/HeartFillSvg';
import DeleteSvg from '../../../../assets/svg/buttonIcons/DeleteSvg';
import ArrowLeftSvg from '../../../../assets/svg/buttonIcons/ArrowLeftSvg';
import ShareSvg from '../../../../assets/svg/buttonIcons/ShareSvg';
import MoreSvg from '../../../../assets/svg/buttonIcons/MoreSvg';

import styles from './circleButtonStyles';

const CircleButton = ({
  type = 'like',
  isLiked = false,
  position = { top: 12, right: 12 },
  onClick = () => {},
}) => {
  return (
    <TouchableOpacity style={[styles.btn, position]} onPress={onClick}>
      {type === 'like' ? isLiked ? <HeartFillSvg /> : <HeartIconSvg /> : null}
      {type === 'delete' && <DeleteSvg />}
      {type === 'goBack' && <ArrowLeftSvg />}
      {type === 'share' && <ShareSvg />}
      {type === 'more' && <MoreSvg />}
    </TouchableOpacity>
  );
};

export default CircleButton;
