import styles from '../../styles/Dashboard.module.css'
import Grid from '@mui/material/Grid';


const Dashboard = ({selectedRepo}) => {

  return (
    <div className={styles['dashboard-container']}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <h6 className={styles['dashboard-title']}>Selected Repository</h6>
            <div className={styles['repository-info']}> 
            <a>{selectedRepo.name}</a>
            </div>
        </Grid>
      </Grid>
    </div>
  )
}


export default Dashboard;