import axios from 'axios'

export const getSecretWord = () => {

   //TODO: update function for app in Redux/context
   return axios.get('http://localhost:3030')
      .then(response => response.data);
}