import axios from 'axios';
import auth_header from '../../api/auth';

async function getUser(){
  return new Promise( function (resolve, reject) {
     axios.get(`https://api.github.com/users/Miunmn`, auth_header)
     .then((response) =>{
      return resolve(response.data);
     })
     .catch((err) => {
       console.log(err)
       let error = new Error('Error while fetching user')
       return reject(error);
     });
  });
}
export default getUser;