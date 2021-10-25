import { Dimensions, Platform, StyleSheet } from 'react-native';


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const IS_IOS = Platform.OS === 'ios';

const ViewCartStyles = StyleSheet.create({
    subTotalContainer:{ flex: 1, marginTop: 20 },
    subTotal:{ alignSelf: 'center', marginBottom: 20 },
    itemDescription: { marginTop: 20, marginLeft: 20, flexDirection: 'row', marginBottom: 10 },
    imageStyle:{ height: 120, width: 120, borderColor: 'grey', borderWidth: 1 },
    itemDetailContainer:{ justifyContent: "center", marginBottom: 10 },
    cartItem: {  height: IS_IOS ? HEIGHT / 4.5 :  HEIGHT / 3.5, marginTop: 10, marginLeft: 5, marginRight: 5, borderColor: '#99CCFF', borderWidth: 1, paddingBottom: 10 }
})
export default ViewCartStyles;