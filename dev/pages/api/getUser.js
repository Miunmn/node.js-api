import axios from 'axios'; 
import auth_header from './auth';

export default function getUser(req, res) {
  axios.get(`https://api.github.com/users/Miunmn`, auth_header)
  .then((response) =>{
    res.status(200).json(response.data);
  })
  .catch((error) => {
    console.log(error);
    res.status(500).json({ error: 'An error has occured' });
  });
};