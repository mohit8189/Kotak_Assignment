import React from 'react';
import {
  SafeAreaView, View, Text, Button, ScrollView
} from 'react-native';

import { observer } from 'mobx-react';
import color from '../../../../asset/color';
import YouTube from 'react-native-youtube';
import Constants from '../../../../Util/constants/constants';
import ItemDetailsScreenPresenter from '../presenter/ItemDetailsScreenPresenter';
import CommonStyles from '../../../../styles/CommonStyles';
import ItemDetailsStyles from '../../../../styles/ItemDetailsStyles';


const ItemDetailsScreen = ({ route, navigation }) => {
  const { itemDetails } = route.params;
  const video = itemDetails.video.split('/')
  const presenter = new ItemDetailsScreenPresenter();

  return (
    <SafeAreaView style={CommonStyles.screenContainer}>
      <View style={CommonStyles.screenContainer}>
        <YouTube
          apiKey="AIzaSyDSO9v2o1sSQ3hdOWsqaganNDsRA4GAFiU"
          videoId={video[video.length - 1]}
          play
          fullscreen
          loop
          style={ItemDetailsStyles.youtube_container}
        />

        <ScrollView style={ItemDetailsStyles.production_description}>
          <Text style={ItemDetailsStyles.item_description}>{itemDetails.productName}</Text>
          <Text style={ItemDetailsStyles.item_description}><Text style={{ color: color.login_button }}>INR:</Text> {itemDetails.price}</Text>
          <Text style={ItemDetailsStyles.item_description}><Text style={{ color: color.login_button }}>CPU:</Text> {itemDetails.cpu}</Text>
          <Text style={ItemDetailsStyles.item_description}><Text style={{ color: color.login_button }}>RAM:</Text> {itemDetails.ram}</Text>
          <Text style={ItemDetailsStyles.item_description}><Text style={{ color: color.login_button }}>Storage:</Text> {itemDetails.storage}</Text>
          <Text style={ItemDetailsStyles.item_description}><Text style={{ color: color.login_button }}>Resolution:</Text> {itemDetails.screen}</Text>
          <Text style={ItemDetailsStyles.item_description}><Text style={{ color: color.login_button }}>Description: </Text>{itemDetails.description}</Text>
        </ScrollView>
      </View>

      <Button
        onPress={() => {
          presenter.addItemToCart(itemDetails);
        }}
        title={Constants.localization.addToCart}
        color={color.login_button}
      />

    </SafeAreaView>
  );
}

export default observer(ItemDetailsScreen);