import { useState, useEffect } from 'react';
import Body from './components/Body'
import Header from './components/Header'
import axios from 'axios';

export default function Home() {
  const [repos, setRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true)
  const [selectedRepo, setSelectedRepo] = useState({})
  const [selectedRepoName, setSelectedRepoName] = useState('')
  const [checked, setChecked] = useState(false);
  
  const handleChangeChecked = (e) => {
    setChecked((prev) => !prev);
  }

  const handleSelectedRepo = (e) => {
    setSelectedRepoName(e.target.innerText)
  }

  useEffect(()=>{
    if(selectedRepoName === ""){
      return 
    }

    axios.get(`api/getRepoInfo?repoName=${selectedRepoName}`)
    .then(response=>{
      setSelectedRepo(response.data)
    })
    .catch(error=>{
      console.log(error)
    })

  },[selectedRepoName])
  
  useEffect(() => { 
    setLoadingRepos(false)
    axios.get('api/getUserInfo')
      .then(res => {
        setLoadingRepos(false)
        setRepos(res.data.repos);
        setSelectedRepoName(res.data.repos[0].name)
      })
      .catch(err=>{
        console.log(err)
        setLoadingRepos(false)
      })
    
  },[])

  return (
    <>
      <Header handleChangeChecked={handleChangeChecked}/>
      <Body checked={checked} handleSelectedRepo={handleSelectedRepo} selectedRepo={selectedRepo} repos={repos} loadingRepos={loadingRepos} />
    </>

  )
}