const weatherReducer = (state, action) => {

  switch (action.type) {
    case 'GET_WEATHER_DATA':
      return {
        ...state,
        weatherData: action.payload,
        noLocation: false,
        loading: false,
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      };

    case 'SET_NO_LOCATION':
      return {
        ...state,
        noLocation: true
      };

    case 'CLEAR_WEATHER_DATA':
      return {
        ...state,
        weatherData: []
      };

    default:
      return state;
  }

};

export default weatherReducer;