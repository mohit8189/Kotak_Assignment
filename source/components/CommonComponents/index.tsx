import React from 'react';
import { TouchableWithoutFeedback, View, Image, Text } from 'react-native';
import icons from '../../asset/icons';
import UIStore from '../../screens/store/UIStore';
import { observer } from 'mobx-react';
import Constants from '../../Util/constants/constants';
import CommonStyles from '../../styles/CommonStyles'

export const BackButton = (props) => {
    return <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
        <Image source={icons.arrowLeft} />
    </TouchableWithoutFeedback>
}

const ShoppingCart = (props) => {
    return <TouchableWithoutFeedback onPress={() => {
        UIStore.clearFinalData();
        UIStore.cartItem.filter((v, i, a) => a.findIndex(t => (t.id === v.id)) === i).forEach((item) => {
            let data = UIStore.cartItem.filter(elem => elem.id == item.id)
            item.count = data.length
            UIStore.setFinalData(item)
        })
        props.navigation.navigate(Constants.screens.view_cart)
    }
    }>
        <View style={{ height: 40 }}>
            <Text style={CommonStyles.shopping_cart_text}>{UIStore._cartItem.length}</Text>
            <Image style={CommonStyles.shopping_cart_image} source={icons.shopping_cart} />

        </View>
    </TouchableWithoutFeedback>
}

export default observer(ShoppingCart);