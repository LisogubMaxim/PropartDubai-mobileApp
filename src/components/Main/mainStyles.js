import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#0F1121',
    fontFamily: 'OpenSans_600SemiBold',
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

  //   text: {
  //     fontSize: 14,
  //     fontFamily: 'Nunito_400Regular',
  //     color: '#0F1121',
  //     marginBottom: 40,
  //   },
  //   continue: {
  //     marginTop: 24,
  //   },
  //   incorrect: {
  //     textAlign: 'center',
  //     color: '#F14336',
  //     marginTop: 8,
  //   },
  //   divider: {
  //     flexDirection: 'row',
  //     marginTop: 24,
  //     marginBottom: 24,
  //     alignItems: 'center',
  //   },
  //   line: {
  //     flex: 1,
  //     height: 1,
  //     backgroundColor: '#b7b8bc',
  //     marginHorizontal: 8,
  //     marginTop: 8,
  //   },
  //   or: {
  //     color: '#6f707a',
  //   },
  //   btns: {
  //     gap: 12,
  //   },
});

export default styles;
