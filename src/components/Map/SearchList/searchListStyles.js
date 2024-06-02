import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  searchList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  inputBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
  },
  projects: {
    gap: 12,
    marginBottom: 90,
  },
  project: {
    borderRadius: 16,
    overflow: 'hidden',
  }
})

export default styles
