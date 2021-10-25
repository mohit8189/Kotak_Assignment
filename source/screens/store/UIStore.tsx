import { observable, action, makeAutoObservable } from "mobx";


class UIStore {
    @observable _isSignedIn: boolean = false;
    @observable _userName: string = null;
    @observable _password: string = null;

    @observable _itemData: any = [];
    @observable _cartItem: any = [];

    @observable _finalData: any = [];

    constructor() {
        makeAutoObservable(this);
    }

    get isSignedIn() {
        return this._isSignedIn;
    }

    @action setIsSignedIn(val: boolean) {
        this._isSignedIn = val;
    }

    get userName() {
        return this._userName;
    }

    @action setUserName(val: string) {
        this._userName = val;
    }

    get itemData() {
        return this._itemData;
    }

    @action setItemData(val: any) {
        this._itemData = val;
    }

    get cartItem() {
        return this._cartItem;
    }

    @action setCartItem(val: any) {
        this._cartItem.push(val);
    }

    @action removeCartItem(val: any) {
        let index = this._cartItem.findIndex(elem => elem.id === val.id)
        if (index >= 0)
            this._cartItem.splice(index, 1);
    }

    get finalData() {
        return this._finalData;
    }

    @action setFinalData(val: any) {
        this._finalData.push(val);
    }

    @action clearFinalData() {
        this._finalData = [];
    }

    @action addItemToFinal(val: any) {
        let itemToAdd = this._finalData.find(elem => elem.id === val.id)
        itemToAdd.count++;
    }

    @action removeItemFromFinal(val: any) {
        let itemToRemove = this._finalData.find(elem => elem.id === val.id)
        if(itemToRemove.count >=1)
        itemToRemove.count--
    }

}

export default new UIStore();