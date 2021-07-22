import { REQUEST_API, REQUEST_API_ERROR, REQUEST_API_SUCCESS } from "../actions";

const INITIAL_STATE = {
  character: {
    url: '',
    name: '',
    gender: '',
    culture: '',
    born: '',
    died: '',
    titles: [],
    aliases: [],
    father: '',
    mother: '',
    spouse: '',
    allegiances: [],
    books: [],
    povBooks: [],
    tvSeries: [],
    playedBy: [],
  },
  error: '',
  loading: false,
}

function characterReducer(state = INITIAL_STATE, { type, payload }) {
  switch(type) {
  case REQUEST_API:
    return {
      ...state,
      loading: true,
    };
  
  case REQUEST_API_SUCCESS:
    return {
      ...state,
      character: payload.character[0],
      loading: false,
    };

  case REQUEST_API_ERROR:
    return {
      ...state,
      error: payload.error,
      loading: false,
    };

  default:
    return state;
  };
}

export default characterReducer;