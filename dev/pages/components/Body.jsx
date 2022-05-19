import styles from '../../styles/Home.module.css'
import Sidebar from './Sidebar';
import Grid from '@mui/material/Grid';
import Dashboard from './Dashboard';


const Body = ({repos, loadingRepos, selectedRepo}) => {
  return (
    <div className={styles.container}>
    <Grid container spacing={1}>
      <Grid item xs={3} className={styles.sidebar}>
        <Sidebar repos={repos} loadingRepos={loadingRepos}/>
      </Grid>
      <Grid item xs={9} className={styles.dashboard}>
        <Dashboard selectedRepo={selectedRepo}/>
      </Grid>        
    </Grid>
  </div>
  )
}

export default Body;
