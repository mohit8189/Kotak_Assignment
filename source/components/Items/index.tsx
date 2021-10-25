import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react'
import { View, Image, Button, Text, Platform } from 'react-native';
import color from '../../asset/color';
import UIStore from '../../screens/store/UIStore';
import ViewCartScreenPresenter from '../../screens/views/ViewCartScreen/presenter/ViewCartScreenPresenter';
import ShoppingScreenStyles from '../../styles/ShoppingScreenStyles';
import ViewCartStyles from '../../styles/ViewCartStyles';
import Constants from '../../Util/constants/constants';

export const FlatListItemSeparator = () => {
    return (
        <View
            style={{
                height: 10,
                backgroundColor: "#F0F0F0",
            }}
        />
    );
}

export const FLatListItem = (props) => {
    return <View style={ShoppingScreenStyles.gridItemContainer}>

        <Image style={ShoppingScreenStyles.itemImage} source={props.itemData.images_source} />
        <Text style={{ marginLeft: 10 }}>{props.itemData.productName}</Text>
        <Text style={{ marginLeft: 10 }}>INR: {props.itemData.price}</Text>

        <View style={ShoppingScreenStyles.add_remove_container}>

            <Button
                onPress={() => {
                    props.navigation.navigate(Constants.screens.item_details, { itemDetails: props.itemData })
                }}
                title={Constants.localization.detail}
                color={color.login_button}
            />

            <Button
                onPress={() => {
                    UIStore.setCartItem(props.itemData);
                }}
                title={Constants.localization.addToCart}
                color={color.login_button}
            />

        </View>

    </View>
}

const IS_IOS = Platform.OS === 'ios';
const ListItems = (props) => {

    const presenter = new ViewCartScreenPresenter();

    return <View style={ViewCartStyles.cartItem}>

        <View style={ViewCartStyles.itemDescription}>
            <Image style={ViewCartStyles.imageStyle} source={props.itemData.images_source} />
            <View style={ViewCartStyles.itemDetailContainer}>
                <Text style={{ marginLeft: 20 }}>{props.itemData.productName}</Text>
                <Text style={{ marginLeft: 20 }}>INR: {props.itemData.price}</Text>
            </View>

        </View>

        <View style={ShoppingScreenStyles.add_remove_container}>

            <Button
                onPress={() => {
                    presenter.addItemToList(props.itemData)
                }}
                title="Add"
                color={color.login_button}
            />

            <Text style={{fontSize:15,marginTop:10}}>{props.itemData.count}</Text>

            <Button
                onPress={() => {
                    presenter.removeItemFromList(props.itemData)
                }}
                title="Remove"
                color={color.login_button}
            />

        </View>

    </View >

}

export default observer(ListItems);