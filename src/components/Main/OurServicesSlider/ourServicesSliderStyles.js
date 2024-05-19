import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: 169,
    height: 120,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    display: 'flex',
    paddingRight: 12,
    paddingLeft: 16,
  },
  text: {
    fontSize: 14,
    color: '#0F1121',
    textAlign: 'left',
    paddingRight: 30,
    marginTop: 12,
  },
  infoIcon: {
    position: 'absolute',
    top: 12,
    right: 16,
  },
  block: {
    display: 'flex',
    alignItems: 'left',
    marginTop: 28,
  },
  sliderContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
    marginBottom: 16,
  },
});

export default styles;
