import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  mainTitle: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'OpenSans_600SemiBold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#B7B8BC',
    marginBottom: 2,
  },
  title: {
    fontSize: 16,
    color: '#0F1121',
    fontFamily: 'OpenSans_600SemiBold',
  },
  text: {
    fontSize: 14,
    color: '#0F1121',
    marginTop: 16,
  },
  banner: {
    width: '100%',
  },
  bannerDescr: {
    position: 'absolute',
    bottom: 18,
    left: 20,
    zIndex: 999,
  },
  more: {
    fontSize: 14,
    color: '#333863',
    fontFamily: 'OpenSans_600SemiBold',
    textDecorationLine: 'underline',
  },
  block: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  sliderContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  getHelp: {
    fontSize: 16,
    color: '#0F1121',
    fontFamily: 'OpenSans_600SemiBold',
    marginTop: 48,
    marginBottom: 16,
  },
});

export default styles;
