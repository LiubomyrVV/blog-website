export let initialBurgerState = {
    isOpen: false,
}

export const BURGER_ACTIONS = {
  TOGGLE: {type: 'TOGGLE'},
  OPEN: {type: 'OPEN'},
  CLOSE: {type: 'CLOSE'},
}
  const burgerReducer = (state = initialBurgerState, action) => {
    switch (action.type) {
    
      case BURGER_ACTIONS.TOGGLE.type:
        initialBurgerState = {
          ...state,
          isOpen: !state.isOpen,
        };
        return {
          ...state,
          isOpen: !state.isOpen,
        };
        
      case BURGER_ACTIONS.OPEN.type:
        initialBurgerState = {
          ...state,
          isOpen: true,
        };
        return {
          ...state,
          isOpen: true,
        };
      case BURGER_ACTIONS.CLOSE.type:
        initialBurgerState = {
          ...state,
          isOpen: false,
        };
        return {
          ...state,
          isOpen: false,
        };
      default:
        return state;
    }
  };
  
export default burgerReducer;