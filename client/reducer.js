
const itemApp = (state = [], action) => {
  switch (action.type){
      case "ADD_ITEM":
          return [
              ...state,
              action.text
          ];
          break;
      default:
          return state;
  }
};

export default itemApp;