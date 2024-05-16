import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 45,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontFamily: 'OpenSans_600SemiBold',
    textAlign: 'center',
    fontSize: 20,
    color: '#333863',
    marginBottom: 32,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 18,
    color: '#6f707a',
    marginBottom: 32,
  },
  text: {
    fontSize: 14,
    lineHeight: 18,
    color: '#0f1121',
    marginTop: 20,
  },
  accordion: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    marginBottom: 12,
    borderRadius: 16,
  },
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontFamily: 'OpenSans_600SemiBold',
    color: '#333863',
    fontSize: 20,
    marginLeft: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
  bodyTitle: {
    fontSize: 14,
    color: '#d6d7e0',
    paddingTop: 20,
  },
  active: {
    backgroundColor: '#333863',
    color: '#ffffff',
  },
});

export default styles;
