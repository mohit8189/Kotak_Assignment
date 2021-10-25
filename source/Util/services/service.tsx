import { Alert } from "react-native";
import image from "../../asset/image";
import UIStore from "../../screens/store/UIStore";
import Constants from "../constants/constants";

const axios = require('axios');
axios.defaults.baseURL = 'https://mocki.io/'

export default class Service {
    static fetchItems(navigation) {
        axios.get(`/v1/d46dc365-f752-46ee-b0cd-c136aec38e00`)
            .then((response) => {
                let itemData = response.data;
                itemData.map(item => {
                    switch (item.id) {
                        case "0": item.images_source = image.huwai
                            break;
                        case "1": item.images_source = image.apple
                            break;

                        case "2": item.images_source = image.dell
                            break;

                        case "3": item.images_source = image.asus
                            break;

                        case "4": item.images_source = image.samsung
                            break;

                    }
                })
                UIStore.setItemData(itemData);
                navigation.navigate(Constants.screens.shopping_screen);
            })
            .catch((error) => {
                return Alert.alert(error.message)
            })
    }
}
