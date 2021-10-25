import {
    StyleSheet
} from 'react-native';

const CommonStyles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    shopping_cart_text: {
        position: 'absolute',
        width: 50,
        marginLeft: 15,
        fontSize: 15,
        color: 'black',
        fontWeight: 'bold'
    },
    shopping_cart_image: {
        height: 40,
        width: 40
    }
})
export default CommonStyles;