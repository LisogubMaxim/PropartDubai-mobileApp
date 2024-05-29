import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  aboutContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  qrCode: {
    flexGrow: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 8,
  },
  qrImg: {
    width: 143,
    height: 143,
    alignSelf: 'center'
  },
  developerInfo: {
    flexGrow: 1,
    gap: 8,
  },
  infoItem: {
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#f1f1f1',
    borderRadius: 8,
  },
  infoText: {
    fontFamily: 'OpenSans_400Regular',
    lineHeight: 18,
    color: '#222222',
  },
  text: {
    lineHeight: 18,
    color: '#B7B8BC',
  }
})

export default styles