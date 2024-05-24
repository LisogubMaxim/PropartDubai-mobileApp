import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 26,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
    color: '#0F1121',
  },

  button: {
    height: 56,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderColor: '#CFCFD3',
  },
});

export default styles;
