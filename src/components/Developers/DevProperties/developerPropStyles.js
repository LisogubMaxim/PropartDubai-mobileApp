import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    paddingHorizontal: 20,
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#0F1121',
    fontFamily: 'OpenSans_600SemiBold',
  },
  //   more: {
  //     fontSize: 14,
  //     color: '#333863',
  //     fontFamily: 'OpenSans_600SemiBold',
  //     textDecorationLine: 'underline',
  //   },
  block: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },

  //   sliderContainer: {
  //     flexDirection: 'row',
  //     gap: 12,
  //     marginBottom: 40,
  //   },

  //   areasContainer: {
  //     display: 'flex',
  //     flexDirection: 'row',
  //     gap: 12,
  //     marginBottom: 40,
  //   },
  getHelp: {
    fontSize: 16,
    color: '#0F1121',
    fontFamily: 'OpenSans_600SemiBold',
    marginTop: 48,
    marginBottom: 16,
  },
});

export default styles;
