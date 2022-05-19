import getUser from '../services/github_api/getUser';
import getRepos from "../services/github_api/getRepos";

export default async function getUserInfo(req, res) {
  let userInfo = {};
  try{
    const user = await getUser();
    userInfo.user = user;
    const repos = await getRepos();
    userInfo.repos = repos;
    userInfo.selectedRepo = repos[0];
    return res.status(200).json(userInfo);
    // const branches = await getBranches(repos[0].name);    
  }
  catch(err){
    console.log('err', err);
    res.status(err.status).json({ message: err.message });
  }
};
