import { FETCH_WEATHER } from '../actions/index';


// never want to mutate state with reducer, rather return something new
// return state.concat([ action.payload.data ]); does same thing as line 12
// line 12 adds to front though


export default function(state = [], action) {
  switch( action.type ) {
    case FETCH_WEATHER:
      return [ action.payload.data, ...state ];
  }
  return state;
}
