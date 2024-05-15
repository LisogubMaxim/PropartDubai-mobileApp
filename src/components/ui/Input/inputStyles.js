import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    height: 56,
    borderWidth: 1,
    borderColor: '#B7B8BC',
    borderRadius: 100,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textInput: {
    flex: 1,
    color: '#0F1121',
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    placeholderTextColor: '#6F707A',
    marginRight: 15,
  },
  error: {
    borderColor: '#F14336',
  },
});

export default styles;
