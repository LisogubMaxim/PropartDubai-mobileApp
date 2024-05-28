import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  amenities: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    rowGap: 20,
    columnGap: 8,
  },
  amenity: {
    flexDirection: 'row',
    width: 160,
    alignItems: 'center',
    gap: 12,
  },
  amenityText: {
    lineHeight: 22,
    fontSize: 16
  },
})

export default styles