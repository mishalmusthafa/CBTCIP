const weatherReducer = (state, action) => {

  switch (action.type) {
    case 'GET_WEATHER_DATA':
      return {
        ...state,
        weatherData: action.payload,
        loading: false,
        error: null
      };

    case 'SET_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: true
      };

    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };

    case 'CLEAR_WEATHER_DATA':
      return {
        ...state,
        weatherData: {}
      };

    default:
      return state;
  }

};

export default weatherReducer;