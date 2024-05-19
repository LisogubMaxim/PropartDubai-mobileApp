import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 169,
    height: 128,
    borderWidth: 1,
    borderColor: '#F1F1F1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 23,
  },
  text: {
    fontSize: 16,
    color: '#0F1121',
    textAlign: 'center',
    marginTop: 16,
  },
  sliderContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
    marginBottom: 40,
  },
});

export default styles;
