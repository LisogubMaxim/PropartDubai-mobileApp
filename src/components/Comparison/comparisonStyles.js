import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingHorizontal: 20,
    paddingBottom: 20,
    flex: 1,
  },
  mainTitle: {
    fontFamily: 'OpenSans_600SemiBold',
    textAlign: 'center',
    fontSize: 20,
    color: '#333863',
    marginBottom: 32,
  },
  items: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'top',
  },
  block: {
    maxWidth: '50%',
    display: 'flex',
    alignItems: 'center',
  },
  itemsTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333863',
    marginBottom: 20,
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    gap: 16,
    marginBottom: 56,
  },
  itemText: {
    fontSize: 14,
    color: '#0F1121',
    textAlign: 'center',
    paddingHorizontal: 15,
  },
});

export default styles;
