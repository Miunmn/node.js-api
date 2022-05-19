import getCommits from "../services/github_api/getCommits";

export default async function getBranchCommits(req, res) {
  try{
    const commits = await getCommits(repoName, sha);
    return res.status(200).json(commits);
  }
  catch(err){
    console.log('err', err);
    res.status(err.status).json({ message: err.message });
  }
};
