export const reducer = (state, action) => {
    switch (action.type) {
      case "sortPrice": {
        return { ...state, sortPrice: action.payload };
      }
      case "reValue": {
        return { ...state, sortPriceValue: action.payload };
      }
      case "reValueName": {
        return { ...state, sortNameValue: action.payload };
      }
      case "sortName": {
        return { ...state, sortName: action.payload };
      }
      default: {
        return state;
      }
    }
  };
  