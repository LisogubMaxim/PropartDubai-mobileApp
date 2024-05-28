import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');

const styles = StyleSheet.create({
  sliderContainer: {
    flexDirection: 'row',
  },
  slideItem: {
    position: 'relative',
    width,
    height: 552,
  },
  heroImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
  },
  textContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    zIndex: 5,
  },
  title: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 20,
    color: '#fff',
    marginBottom: 4
  },
  text: {
    color: '#b7b8bc',
    lineHeight: 22
  },
})

export default styles;