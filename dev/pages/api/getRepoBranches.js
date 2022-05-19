import axios from 'axios'; 
import auth_header from './auth';

export default function getRepoBranches(req, res) {
  let repoName = req.query.repoName
  if(req.query.repoName === "")
    res.status(404).json({error: "Repo name is required"})

  axios.get(`https://api.github.com/repos/Miunmn/${repoName}/branches`, auth_header)
  .then((response) =>{
    res.status(200).json(response.data);
  })
  .catch((error) => {
    console.log(error);
    res.status(500).json({ error: 'An error has occured' });
  });
};