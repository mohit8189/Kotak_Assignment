import { Alert } from "react-native";
import UIStore from "../../../store/UIStore";
import Constants from '../../../../Util/constants/constants';

export default class ViewCartScreenPresenter {
    removeItemFromList(itemData: any) {
        UIStore.removeCartItem(itemData);
        UIStore.removeItemFromFinal(itemData);
    }
    addItemToList(itemData: any) {
        UIStore.setCartItem(itemData);
        UIStore.addItemToFinal(itemData);
    }
    availableSoon() {
        Alert.alert("not available now")
    }
}