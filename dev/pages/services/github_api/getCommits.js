import axios from 'axios';
import auth_header from '../../api/auth';

async function getCommits(repoName, branchName){
  return new Promise( function (resolve, reject) {
     axios.get(`https://api.github.com/repos/Miunmn/${repoName}/commits?sha=${branchName}&per_page=100`, auth_header)
     .then((response) =>{
      return resolve(response.data);
     })
     .catch((err) => {
       console.log('err', err);
       let error = new Error('Error while fetching commits')
       return reject(error);
     });
  });
}
export default getCommits;