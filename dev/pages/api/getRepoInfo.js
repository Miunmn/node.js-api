import getUser from '../services/github_api/getUser';
import getRepo from "../services/github_api/getRepo";

export default async function getRepoInfo(req, res) {
  let repoName = req.query.repoName
  if(req.query.repoName === "")
    res.status(404).json({error: "Repo name is required"})
    
  try{
    const repo = await getRepo(repoName);
    res.status(200).json(repo)
    // const branches = await getBranches(repos[0].name);    
  }
  catch(err){
    console.log('err', err);
    res.status(500).json({ message: err.message });
  }
};
