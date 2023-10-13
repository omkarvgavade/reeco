import {
  asyncActionCreator,
  asyncActionTypeCreator,
} from "../reduxUtils/ReduxActionHelper";
import { apiPaths } from "../../utils/ApiPaths";
import { environment } from "../../environments/environment";
const getProductsActionType = asyncActionTypeCreator("GET_PRODUCTS");
const getProductsAction = asyncActionCreator(getProductsActionType);

const updateProductStatusActionType = asyncActionTypeCreator("UPDATE_PRODUCT_STATUS");
const updateProductStatusAction = asyncActionCreator(updateProductStatusActionType);

const editProductDetailsActionType = asyncActionTypeCreator("EDIT_PRODUCT_DETAILS");
const editProductDetailsAction = asyncActionCreator(editProductDetailsActionType)
const getProducts = () => {
  const axiosConfig = {
    url: environment.serverUrl + apiPaths.FETCH_PRODUCTS,
    method: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      requireCreds: true,
    },
  };
  return getProductsAction.action(axiosConfig);
};

const updateProductStatus = ({id,status},successCallback,errorCallback) => {
    const axiosConfig = {
        url: environment.serverUrl + apiPaths.UPDATE_PRODUCT_STATUS +`/${id}`,
        method: "PATCH",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          requireCreds: true,
        },
        data:{
         status:status
        }
      };
      return updateProductStatusAction.action(axiosConfig,successCallback,errorCallback);  
}

const editProductDetails = ({id,price,quantity,total,status},successCallback,errorCallback) => {
    const axiosConfig = {
        url: environment.serverUrl + apiPaths.UPDATE_PRODUCT_STATUS +`/${id}`,
        method: "PATCH",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          requireCreds: true,
        },
        data:{
         price:price,
         quantity:quantity,
         total:total,
         status:status
        }
      };
      return editProductDetailsAction.action(axiosConfig,successCallback,errorCallback);  
}
export { getProducts,getProductsActionType,updateProductStatus,updateProductStatusActionType,editProductDetailsActionType,editProductDetails};
