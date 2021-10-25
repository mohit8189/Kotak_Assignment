import {
    Alert
} from 'react-native';
import validator from 'validator';
import Constants from '../../../../Util/constants/constants';
import Service from '../../../../Util/services/service';
import UIStore from '../../../store/UIStore';

export default class LoginPresenter {

    handleNavigation(navigation, userName, password) {
        if (validator.isEmpty(userName)) {
            return Alert.alert(Constants.localization.user_name_empty)
        }
        if (!validator.isAlpha(userName)) {
            return Alert.alert(Constants.localization.user_name_invalid)
        }

        if (validator.isEmpty(password)) {
            return Alert.alert(Constants.localization.password_invalid)
        }

        if (!validator.isLength(password, {
            min: 4,
            max: 10
        })) {
            return Alert.alert(Constants.localization.password_invalid)
        }

        Service.fetchItems(navigation);
        UIStore.setUserName(userName);
    }


}