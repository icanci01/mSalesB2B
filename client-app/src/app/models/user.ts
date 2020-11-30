import { IOrderActivity } from "./activity";
import { ICart } from "./cart";
import { IProductList } from "./product";
import { IProviderList } from "./provider";
import { ISession } from "./session";
export interface IUser {
    username: string;
    password: string;
    JWTAuth: string;
    cart: ICart;
    providerList: IProviderList;
    productsList: IProductList;
    orderHistory: IOrderActivity;
    sessionTimeout: ISession;
}