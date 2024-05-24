import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  rangeContainer: {
    flex: 1,
    height: 56,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#CFCFD3',
  },

  range: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 16,
    paddingRight: 16,
  },

  rangeActive: {
    borderBottomWidth: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },

  text: {
    color: '#B7B8BC',
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
  },

  rangeTypeText: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 12,
    color: '#B7B8BC',
  },

  container: {
    top: '100%',
    left: -1,
    right: -1,
    position: 'absolute',
    borderWidth: 1,
    borderTopWidth: 0,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: '#CFCFD3',
    backgroundColor: '#fff',
    maxHeight: 170,
  },

  buttonValue: {
    height: '100%',
    justifyContent: 'center',
    paddingLeft: 16,
  },

  value: {
    height: 56,
    borderTopWidth: 1,
    borderColor: '#CFCFD3',
  },

  textValue: {
    color: '#6F707A',
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
  },
});

export default styles;
