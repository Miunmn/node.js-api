import axios from 'axios';
import auth_header from '../../api/auth';

async function getRepo(repoName){
  let repoInformation = {}
  return new Promise( function (resolve, reject) {
     axios.get(`https://api.github.com/users/Miunmn/repos`, auth_header)
     .then((response) =>{
      let repo = response.data.filter(repo => repo.name === repoName)
      repoInformation = {...repoInformation, ...repo};
      console.log(`https://api.github.com/repos/Miunmn/${repoName}/branches`)
      axios.get(`https://api.github.com/repos/Miunmn/${repoName}/branches`, auth_header)
      .then((response) =>{
        repoInformation = {...repoInformation, ...response.data};
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