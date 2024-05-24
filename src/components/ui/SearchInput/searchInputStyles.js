import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    position: 'relative',
  },
  input: {
    minWidth: 294,
    height: 48,
    paddingLeft: 48,
    paddingRight: 16,
    fontSize: 16,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#f1f1f1',
    borderRadius: 40,
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
  searchIcon: {
    position: 'absolute',
    width: 24,
    height: 24,
    left: 16,
    top: 12,
    zIndex: 999,
  },
});

export default styles;
