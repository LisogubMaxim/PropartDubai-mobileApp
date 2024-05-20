import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  searchInput: {
    position: 'relative',
  },
  input: {
    width: 294,
    height: 48,
    paddingLeft: 48,
    paddingRight: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 40,
  },
  searchIcon: {
    position: 'absolute',
    width: 24,
    height: 24,
    left: 16,
    top: 12,
  },
});

export default styles;
