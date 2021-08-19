import { createAction, handleActions } from 'redux-actions';

const AVAILABLE = '@ui/available';
const NOT_FOUND = '@ui/not-found';

export const available = createAction(AVAILABLE);
export const notFound = createAction(NOT_FOUND);

const initialState = {
  status: 'AVAILABLE',
};

export default handleActions(
  {
    [AVAILABLE]: (state, action) => {
      return {
        ...state,
        status: 'AVAILABLE',
      };
    },
    [NOT_FOUND]: (state, action) => {
      return {
        ...state,
        status: 'NOT_FOUND',
      };
    },
  },
  initialState
);
