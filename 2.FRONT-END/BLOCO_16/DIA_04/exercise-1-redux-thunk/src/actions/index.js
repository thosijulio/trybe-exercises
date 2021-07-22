export const REQUEST_API = 'REQUEST_API';
export const GET_PICTURE = 'GET_PICTURE';

export const requestAPI = () => ({ type: REQUEST_API });

export const getPicture = (data) => ({ type: GET_PICTURE, data });

export function fetchAPI() {
  return (dispatch) => {
    dispatch(requestAPI());
    return fetch('https://api.thecatapi.com/v1/images/search')
      .then((result) => result.json())
      .then((resolve) => dispatch(getPicture(resolve.url)))
      .catch((error) => alert('Erro ao baixar imagem'));
  }
}
