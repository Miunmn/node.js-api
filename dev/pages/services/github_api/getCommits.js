import axios from 'axios';
import auth_header from '../../api/auth';

async function getCommits(repoName, sha){
  return new Promise( function (resolve, reject) {
     axios.get(`https://api.github.com/users/Miunmn/${repoName}/commits?sha=${sha}&per_page=100`, auth_header)
     .then((response) =>{
      return resolve(response.data);
     })
     .catch((err) => {
       let error = new Error('Error while fetching commits')
       return reject(error);
     });
  });
}
export default getCommits;