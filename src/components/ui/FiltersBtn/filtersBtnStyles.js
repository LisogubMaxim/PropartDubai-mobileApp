import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    backgroundColor: '#fff',
    borderRadius: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#0F1121',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.06,
        shadowRadius: 30,
      },
      android: {
        elevation: 10,
        shadowColor: 'rgba(15, 17, 33, 0.2)',
      },
    }),
  },
});

export default styles;
