import UIStore from "../../../store/UIStore";

export default class ItemDetailsScreenPresenter {

    addItemToCart(item) {
        UIStore.setCartItem(item);
    }

}