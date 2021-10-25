import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppLoginScreen from '../screens/views/LoginScreen/view';
import ShoppingScreen from '../screens/views/ShoppingScreen/view';
import ItemDetailsScreen from '../screens/views/ItemDetailsScreen/view';
import ViewCartScreen from '../screens/views/ViewCartScreen/view';
import Constants from '../Util/constants/constants';
import ShoppingCart, { BackButton } from '../components/CommonComponents';
import UIStore from '../screens/store/UIStore';


const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Constants.login_screen}>
        <Stack.Screen name={Constants.screens.login_screen} component={AppLoginScreen}
          options={({ navigation }) => ({
            title: 'Kotak'
          })}
        />
        <Stack.Screen name={Constants.screens.shopping_screen} component={ShoppingScreen}
          options={({ navigation }) => ({
            title: UIStore._userName,
            headerLeft: () => <BackButton navigation={navigation} />,
            headerRight: () => <ShoppingCart navigation={navigation} />,
            animationEnabled: false,
          })}
        />
        <Stack.Screen name={Constants.screens.item_details} component={ItemDetailsScreen}
          options={({ navigation }) => ({
            title: UIStore._userName,
            headerLeft: () => <BackButton navigation={navigation} />,
            headerRight: () => <ShoppingCart navigation={navigation} />,
            animationEnabled: false,
          })}

        />
        <Stack.Screen name={Constants.screens.view_cart} component={ViewCartScreen}
          options={({ navigation }) => ({
            title: UIStore._userName,
            headerLeft: () => <BackButton navigation={navigation} />,
            headerRight: () => <ShoppingCart navigation={navigation} />,
            animationEnabled: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;