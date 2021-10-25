import {
    StyleSheet
} from 'react-native';
import color from '../../asset/color';

const LoginScreenStyles = StyleSheet.create({
    cardBackGround: {
        height: 350,
        width: '90%',
        borderRadius: 10,
        backgroundColor: color.login_card,
        opacity: .9,
        justifyContent: 'center',
        alignItems: 'center'
    },
    credentialContainer: {
        height: "80%",
        width: '90%',
        borderRadius: 10
    },
    userNameContainer: {
        height: 100,
        width: '100%',
        borderRadius: 10,
        backgroundColor: color.white,
        opacity: 1
    },
    passwordContainer: {
        height: 100,
        width: '100%',
        borderRadius: 10,
        backgroundColor: color.white,
        marginTop: 20,
        marginBottom: 30
    },
    direction: {
        flexDirection: 'row',
        padding: 20
    },
    label: {
        fontSize: 20,
        marginTop: 10
    },
    input: {
        height: 30,
        borderRadius: 2,
        margin: 12,
        padding:5,
        borderWidth: 1,
        width: '50%'
    }
})
export default LoginScreenStyles;