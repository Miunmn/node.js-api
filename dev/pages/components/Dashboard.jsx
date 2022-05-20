
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../../styles/Dashboard.module.css'
import Grid from '@mui/material/Grid';

import { AtomSpinner } from 'react-epic-spinners'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dashboard = ({selectedRepo}) => {
  const [branch, setBranch] = useState("");
  const [branches, setBranches] = useState([]);
  const [commits, setCommits] = useState([]);

  const handleChange = (event) => {
    setBranch(event.target.value);
  };
  const getDate = (dateObj) =>{
    return dateObj.toLocaleDateString()
  }
  useEffect(()=>{
    console.log('selectedRepoDetected')
    if(!selectedRepo.branches)
      return
    setCommits([])
    setBranch("")
    setBranches(selectedRepo.branches);
      

  }, [selectedRepo] )
  useEffect(()=>{

    if(Object.keys(selectedRepo).length === 0 || branch === ""){
      return
    }

    axios.get(`api/getBranchCommits?repoName=${selectedRepo.name}&branchName=${branch}`)
    .then(response=>{
      setCommits(response.data)
    })
    .catch(error=>{
      console.log(error)
    })

  },[branch])

  return (
    <>
      {
        Object.keys(selectedRepo).length === 0 ?
        <AtomSpinner/>
        :
      <div className={styles['dashboard-container']}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={styles['repository-info-container']}>
              <h6 className={styles['dashboard-title']}>Selected Repository</h6>
              <div className={styles['repository-info']}> 
                <div><a href={selectedRepo.html_url} target="_blank">{selectedRepo.name}</a></div>
                <div className={styles['repository-info-sub-headings']}>{selectedRepo.owner?selectedRepo.owner.login:''}</div>
                <div className={styles['repository-info-sub-headings']}>{selectedRepo.description?selectedRepo.description:''}</div>  
                <div className={styles['repository-dates']}>Creation date: {selectedRepo.created_at?getDate(new Date(selectedRepo.created_at)):''}</div> 
                <div className={styles['repository-dates']}>Last Update date: {selectedRepo.updated_at?getDate(new Date(selectedRepo.updated_at)):''}</div> 
              </div>  
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles['repository-info-container']}>
            <h6 className={styles['dashboard-title']}>Branches</h6>
            <Box>
              <FormControl>
                <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={branch}
                  style={{minWidth: '200px'}}
                  defaultValue={selectedRepo.default_branch}
                  label="Branch"
                  onChange={handleChange}
                >
                  {
                    branches.map((branch, index)=>{
                      return <MenuItem key={index} value={branch.name}>{branch.name}</MenuItem>
                    })
                  }
                </Select>
              </FormControl>
            </Box>
            <div className={styles['commit-container']}>
              {
                commits.length === 0 ? <></>:
                commits.map((item, index) => {
                  return (
                    <div className={styles['commit-item']} key={index}> 
                      <a className={styles['commit-item-headings']} href={item.html_url} rel="noreferrer" target="_blank">
                        {item.commit.message}
                      </a>
                      <div className={styles['commit-item-author']}>
                        {item.author.login}
                      </div>
                      <div className={styles['commit-item-author']}>
                        {getDate(new Date(item.commit.author.date))}
                      </div>
                    </div>
                  )})
              }
            </div>
            </div>
          </Grid>
        </Grid>
      </div>
      }
      
</>
  )
}

export default Dashboard;
