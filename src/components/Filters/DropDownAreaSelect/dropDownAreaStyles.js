import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#CFCFD3',
    borderRadius: 6,
    height: 300,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  text: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    color: '#0F1121',
  },
  dropdown: {
    height: 56,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#CFCFD3',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 17,
    marginBottom: 26,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#6F707A',
  },
  checkBox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#B7B8BC',
    borderRadius: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedBox: {
    backgroundColor: '#333863',
  },
});

export default styles;
