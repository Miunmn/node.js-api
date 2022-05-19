import getCommits from "../services/github_api/getCommits";

export default async function getBranchCommits(req, res) {

  let repoName = req.query.repoName
  let branchName = req.query.branchName

  if(repoName === "")
    res.status(404).json({error: "Repo name is required"})

  try{
    const commits = await getCommits(repoName, branchName);
    return res.status(200).json(commits);
  }
  catch(err){
    console.log('err', err);
    res.status(500).json({ message: err.message });
  }
};
