import axios from 'axios';
import auth_header from '../../api/auth';

async function getBranches(repoName){
  return new Promise( function (resolve, reject) {
     axios.get(`https://api.github.com/users/Miunmn/${repoName}/branches`, auth_header)
     .then((response) =>{
      return resolve(response.data);
     })
     .catch((err) => {
       let error = new Error('Error while fetching repos')
       return reject(error);
     });
  });
}
export default getBranches;