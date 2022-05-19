import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Home.module.css'
import Sidebar from './Sidebar';
import Grid from '@mui/material/Grid';
import Dashboard from './Dashboard';
import { AtomSpinner } from 'react-epic-spinners';


const Body = ({repos, loadingRepos, selectedRepo, handleSelectedRepo}) => {
  const [loading, setLoading] = useState(false);



  return (<>
    {
      loading? <AtomSpinner color="red"/>:
           <div className={styles.container}>
        <Grid container spacing={1}>
          <Grid item xs={3} className={styles.sidebar}>
            <Sidebar repos={repos} handleSelectedRepo={handleSelectedRepo} loadingRepos={loadingRepos}/>
          </Grid>
          <Grid item xs={9} className={styles.dashboard}>
            <Dashboard selectedRepo={selectedRepo}/>
          </Grid>        
        </Grid>
      </div>
    }
 
      
      </>
   
  )
}

export default Body;
