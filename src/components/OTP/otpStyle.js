import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  root: {},
  title: { textAlign: 'center', fontSize: 30 },
  codeFiledRoot: {},
  cell: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 78.5,
    height: 56,
    lineHeight: 38,
    fontSize: 16,
    fontWeight: 'Nunito_500Medium',
    color: '#333863',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#B7B8BC',
    textAlign: 'center',
    padding: 8,
  },
  focusCell: {
    borderColor: '#000',
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
    flex: 1,
  },
  title: {
    fontSize: 24,
    color: '#333863',
    fontFamily: 'OpenSans_600SemiBold',
    marginBottom: 24,
  },

  text: {
    fontSize: 14,
    fontFamily: 'Nunito_400Regular',
    color: '#0F1121',
    marginBottom: 40,
  },
  confirm: {
    marginTop: 16,
  },
  invalidText: {
    textAlign: 'center',
    color: '#F14336',
    marginTop: 8,
  },
  invalidCode: {
    color: '#F14336',
    borderColor: '#F14336',
  },
  resend: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Nunito_400Regular',
    color: '#6F707A',
    marginTop: 24,
  },
});

export default styles;
