
import { useState, useEffect } from 'react';
import styles from '../../styles/Dashboard.module.css'
import Grid from '@mui/material/Grid';

import { AtomSpinner } from 'react-epic-spinners'

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dashboard = ({selectedRepo}) => {
  const [branch, setBranch] = useState(selectedRepo.default_branch);
  const [branches, setBranches] = useState([]);

  const handleChange = (event) => {
    setBranch(event.target.value);
  };
  const getDate = (dateObj) =>{
    return dateObj.toLocaleDateString()
  }

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
                <div><a>{selectedRepo.name}</a></div>
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
            <Box >
              <FormControl>
                <InputLabel id="demo-simple-select-label">Branch</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={branch}
                  defaultValue={selectedRepo.default_branch}
                  label="Branch"
                  onChange={handleChange}
                >
                  <MenuItem value={'main'}>main</MenuItem>
                  {/* <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
            </Box>
            </div>
          </Grid>
        </Grid>
      </div>
      }
      
</>
  )
}

export default Dashboard;
