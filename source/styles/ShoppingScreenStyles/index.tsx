import { Dimensions, Platform, StyleSheet } from 'react-native';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const IS_IOS = Platform.OS === 'ios';

const ShoppingScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemImage: { height: '70%', width: '100%' },
    add_remove_container: { justifyContent: IS_IOS ? "center":'space-around', flexDirection: 'row', marginBottom: 10},
    gridItemContainer: { height: IS_IOS ? HEIGHT / 4  : HEIGHT / 3, width: (WIDTH / 2) - 10, marginTop: 10, marginLeft: 5, marginRight: 5, borderColor: '#99CCFF', borderWidth: 1, paddingBottom: 10 }
})
export default ShoppingScreenStyles;