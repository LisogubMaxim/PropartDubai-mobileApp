import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 20,
    paddingBottom: 8,
  },

  search: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 8,
  },

  body: {
    paddingHorizontal: 20,
    // marginBottom: 150,
  },

  property: {
    gap: 12,
    marginBottom: 46,
  },

  titleBody: {
    color: '#0F1121',
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 16,
    marginBottom: 16,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default styles;
