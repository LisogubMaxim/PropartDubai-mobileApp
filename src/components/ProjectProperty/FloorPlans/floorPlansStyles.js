import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  selectContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    marginBottom: 20,
  },
  chooseRoomText: {
    maxWidth: 172,
    lineHeight: 22,
    color: '#6f707a',
  },
  dropdown: {
    height: 40,
    width: 138,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
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
    fontSize: 14,
    color: '#6F707A',
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#B7B8BC',
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
  sliderContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  slideItem: {
    width: 252,
    padding: 16,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'rgba(15, 17, 33, 0.1)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 5,
  },
  infoIcon: {
    position: 'absolute',
    top: 12,
    right: 16,
    zIndex: 2,
  },
  planInfo: {
    alignSelf: 'center',
    maxWidth: 222,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12
  },
  planInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 12,
    rowGap: 6
  },
  planInfoText: {
    fontFamily: 'OpenSans_400Regular',
    lineHeight: 18,
    color: '#6F707A',
  }
})

export default styles