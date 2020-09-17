import { useReducer, useCallback } from 'react';

const initialState = {
  data: null
};

const httpReducer = (initialState, action) => {
  switch (action.type) {
    case 'SEND':
      return {
       data: null
      }; 
    default:
      throw new Error('Should not be reached!');
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);
  const sendRequest = useCallback(
    (url, method, body) => {
      dispatchHttp({ type: 'SEND'});
      fetch(url, {
        method: method,
        body: body,
        headers: {
          'Content-Type': 'application/json'
        }
      })
       },
    []
  );

  return {
   
    data: httpState.data,
    sendRequest: sendRequest
  };
};

export default useHttp;
