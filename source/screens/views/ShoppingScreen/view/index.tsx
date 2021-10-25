import React from 'react';
import UIStore from '../../../store/UIStore';
import {
  FlatList,
  SafeAreaView,
} from 'react-native';

import { observer } from 'mobx-react';
import { FLatListItem, FlatListItemSeparator } from '../../../../components/Items';
import ShoppingScreenStyles from '../../../../styles/ShoppingScreenStyles';

interface ShoppingScreenProp {
  navigation: any;
}


@observer
class ShoppingScreen extends React.Component<ShoppingScreenProp> {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView style={ShoppingScreenStyles.container}>

        <FlatList data={UIStore._itemData} numColumns={2} keyExtractor={(item, index) => item.id + index}
          ItemSeparatorComponent={() => <FlatListItemSeparator />}
          renderItem={({ item, index }) => <FLatListItem navigation={this.props.navigation} itemData={item} />}
        />

      </SafeAreaView>
    );
  }
}

export default ShoppingScreen;