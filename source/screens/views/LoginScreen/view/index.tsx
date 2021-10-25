import React from 'react';
import {
  SafeAreaView, View, Text, ImageBackground, Button, TextInput, Alert
} from 'react-native';

import { observer } from 'mobx-react';
import image from '../../../../asset/image';
import CommonStyles from '../../../../styles/CommonStyles';
import LoginScreenStyles from '../../../../styles/LoginScreenStyles';
import LoginPresenter from '../presenter/LoginPresenter';
import color from '../../../../asset/color';
import Constants from '../../../../Util/constants/constants';


interface AppLoginScreenProp {
  navigation: any;
}

interface AppLoginScreenState {
  user_name: string,
  password: string
}

@observer
class AppLoginScreen extends React.Component<AppLoginScreenProp, AppLoginScreenState> {

  private presenter = new LoginPresenter();


  constructor(props) {
    super(props)
    this.state = { user_name: '', password: '' }
  }


  render() {
    return (
      <SafeAreaView style={CommonStyles.screenContainer}>
        <ImageBackground style={CommonStyles.backgroundImage} source={image.backgroundImage} resizeMode="cover">

          <View style={LoginScreenStyles.cardBackGround}>
            <View style={LoginScreenStyles.credentialContainer} >
              <View style={LoginScreenStyles.userNameContainer}>

                <View style={LoginScreenStyles.direction}>
                  <Text style={LoginScreenStyles.label}>UserName:</Text>

                  <TextInput onChangeText={(input) => this.setState({ user_name: input })} style={LoginScreenStyles.input}></TextInput>
                </View>

              </View>

              <View style={LoginScreenStyles.passwordContainer}>

                <View style={LoginScreenStyles.direction}>
                  <Text style={LoginScreenStyles.label}>Password:</Text>

                  <TextInput onChangeText={(input) => this.setState({ password: input })} secureTextEntry={true} style={LoginScreenStyles.input}></TextInput>
                </View>

              </View>

              <Button
                onPress={() => {
                  this.presenter.handleNavigation(this.props.navigation, this.state.user_name, this.state.password);
                }}
                title={Constants.localization.login}
                color={color.login_button}
              />

            </View>
          </View>

        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default AppLoginScreen;