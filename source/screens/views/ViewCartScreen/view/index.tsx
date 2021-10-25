import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView, View, Text, Button, FlatList
} from 'react-native';
import color from '../../../../asset/color';
import ListItems, { FlatListItemSeparator } from '../../../../components/Items';
import CommonStyles from '../../../../styles/CommonStyles';
import ViewCartStyles from '../../../../styles/ViewCartStyles';
import Constants from '../../../../Util/constants/constants';
import UIStore from '../../../store/UIStore';
import ViewCartScreenPresenter from '../presenter/ViewCartScreenPresenter';

const ViewCartScreen = () => {

  const presenter = new ViewCartScreenPresenter();

  return <SafeAreaView style={CommonStyles.screenContainer }>

    <View style={ViewCartStyles.subTotalContainer}>
      <Text style={ViewCartStyles.subTotal}>Sub Total: INR {UIStore.finalData.reduce((prev, next) => {
        return prev + (Number(next.price.replace(/,/g, ''))) * next.count
      },0)}</Text>

      <Button
        onPress={() => {
          presenter.availableSoon();
        }}
        title={Constants.localization.proceed}
        color={color.login_button}
      />

      <FlatList data={UIStore.finalData} keyExtractor={(item, index) => item.id + index}
        ItemSeparatorComponent={() => <FlatListItemSeparator />}
        renderItem={({ item, index }) => <ListItems itemData={item} />}
      />
    </View>
  </SafeAreaView>
}

export default observer(ViewCartScreen);
