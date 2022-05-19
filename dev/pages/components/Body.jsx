import styles from '../../styles/Home.module.css'
import Sidebar from './Sidebar';
import Grid from '@mui/material/Grid';
import Dashboard from './Dashboard';


const Body = ({repos}) => {
  return (
    <div className={styles.container}>
    <Grid container spacing={1}>
      <Grid item xs={3} className={styles.sidebar}>
        <Sidebar repos={repos}/>
      </Grid>
      <Grid item xs={9} className={styles.dashboard}>
        <Dashboard />
      </Grid>        
    </Grid>
  </div>
  )
}

export default Body;
