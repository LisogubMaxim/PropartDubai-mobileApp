import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  details: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 32
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 6
  },
  mainText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#676767',
  },
  section: {
    marginBottom: 40
  },
  secondTitle: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 16,
    marginBottom: 16,
  },
  titleWithMore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  more: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 14,
    color: '#333863',
    textDecorationLine: 'underline',
  },
  sliderContainer: {
    flexDirection: 'row',
    gap: 12,
  },
});

export default styles;