const initialState = {
  value: 0,
};
export const counterReducer = (state = initialState, action: {type: any}) => {
  console.log(state);
  switch (action.type) {
    case 'Increase':
      return {...state, value: ++state.value};
    case 'Decrease':
      return {...state, value: --state.value};
    default:
      return state;
  }
};
