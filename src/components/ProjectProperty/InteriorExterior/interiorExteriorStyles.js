import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  toggleButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    columnGap: 24,
    rowGap: 8,
    marginBottom: 16,
  },
  btn: {
    fontFamily: 'OpenSans_600SemiBold',
    fontSize: 16,
    color: '#b7b8bc',
  },
  btnActive: {
    color: '#333863',
    textDecorationLine: 'underline',
  },
  sliderContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  slideItem: {
    width: 284,
    height: 220,
    borderRadius: 16,
    overflow: 'hidden'
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
})

export default styles