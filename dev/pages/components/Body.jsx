import {  useState } from 'react';
import styles from '../../styles/Home.module.css'
import Sidebar from './Sidebar';
import Grid from '@mui/material/Grid';
import Dashboard from './Dashboard';
import { AtomSpinner } from 'react-epic-spinners';

const Body = ({repos, loadingRepos, selectedRepo, handleSelectedRepo, checked}) => {
  const [loading, setLoading] = useState(false);

  return (<>
    {
      loading? <AtomSpinner />:
     <div className={styles.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} className={styles.sidebar}>
            <Sidebar repos={repos} handleSelectedRepo={handleSelectedRepo} loadingRepos={loadingRepos}/>
          </Grid>
          <Grid item xs={12} sm={9}  className={styles.dashboard}>
            <Dashboard selectedRepo={selectedRepo}/>
          </Grid>        
        </Grid>
      </div> 
    }
      </>
   
  )
}

export default Body;
