import axios from 'axios';
import auth_header from '../../api/auth';

async function getRepo(repoName){
  let repoInformation = {}
  return new Promise( function (resolve, reject) {
     axios.get(`https://api.github.com/users/Miunmn/repos`, auth_header)
     .then((response) =>{
      let repo = response.data.filter(repo => repo.name === repoName)[0];
      
      repoInformation = {...repoInformation, ...repo};

      axios.get(`https://api.github.com/repos/Miunmn/${repoName}/branches`, auth_header)
      .then((response) => {
        let branches = response.data;
        repoInformation = {...repoInformation, branches: branches};
        return resolve(repoInformation);
      })      
      .catch((err) => {
        let error = new Error('Error while fetching branches')
        return reject(error);
      })
    })
     .catch((err) => {
       let error = new Error('Error while fetching repos')
       return reject(error);
     });
  });
}
export default getRepo;