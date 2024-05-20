import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import heartIcon from '../../../../assets/images/buttonIcons/heartIcon.png';
import heartFill from '../../../../assets/images/buttonIcons/heartFill.png';
import deleteIcon from '../../../../assets/images/buttonIcons/delete.png';
import goBackIcon from '../../../../assets/images/buttonIcons/arrowLeft.png';
import shareIcon from '../../../../assets/images/buttonIcons/share.png';
import moreIcon from '../../../../assets/images/buttonIcons/more.png';

import styles from './circleButtonStyles';

const CircleButton = ({
  type = 'like',
  isLiked = false,
  position = { top: 12, right: 12 },
  onClick = () => {},
}) => {
  return (
    <TouchableOpacity style={[styles.btn, position]} onPress={onClick}>
      {type === 'like' ? (
        isLiked ? (
          <Image source={heartFill} />
        ) : (
          <Image source={heartIcon} />
        )
      ) : null}
      {type === 'delete' && <Image source={deleteIcon} />}
      {type === 'goBack' && <Image source={goBackIcon} />}
      {type === 'share' && <Image source={shareIcon} />}
      {type === 'more' && <Image source={moreIcon} />}
    </TouchableOpacity>
  );
};

export default CircleButton;
