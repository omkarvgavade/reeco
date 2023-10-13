
import promiseState from "../reduxUtils/ReduxReducerHelper";
import { getProductsActionType } from "./ProductsActions";
import { updateProductStatusActionType } from "./ProductsActions";
import { editProductDetailsActionType } from "./ProductsActions";
const initState = {
  productsData: {
    ...promiseState(false, false, false, []),
  },
  updatedProductData: {
    ...promiseState(false, false, false, {}),
  },
  editedProductData: {
    ...promiseState(false, false, false, {}),
  }
};

const ProductsReducer = (state = initState, action) => {
  switch (action.type) {
    case getProductsActionType.pending:
      return {
        ...state,
        productsData: {
          ...promiseState(true, false, false, []),
        },
      };
    case getProductsActionType.fulfilled:
      return {
        ...state,
        productsData: {
          ...promiseState(false, true, false, action.payload),
        },
      };
    case getProductsActionType.rejected:
      return {
        ...state,
        productsData: {
          ...promiseState(false, false, true, []),
        },
      };
      case updateProductStatusActionType.pending:
        return {
          ...state,
          productsData: {
            ...promiseState(true, false, false, {}),
          },
        };
      case updateProductStatusActionType.fulfilled:
        return {
          ...state,
          productsData: {
            ...promiseState(false, true, false, action.payload),
          },
        };
      case updateProductStatusActionType.rejected:
        return {
          ...state,
          productsData: {
            ...promiseState(false, false, true, {}),
          },
        };
        case editProductDetailsActionType.pending:
          return {
            ...state,
            productsData: {
              ...promiseState(true, false, false, {}),
            },
          };
        case editProductDetailsActionType.fulfilled:
          return {
            ...state,
            productsData: {
              ...promiseState(false, true, false, action.payload),
            },
          };
        case editProductDetailsActionType.rejected:
          return {
            ...state,
            productsData: {
              ...promiseState(false, false, true, {}),
            },
          };
    default:
      return state;
  }
};

export default ProductsReducer;

