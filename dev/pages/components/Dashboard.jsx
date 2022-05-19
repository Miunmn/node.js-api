import styles from '../../styles/Dashboard.module.css'
import Grid from '@mui/material/Grid';


const Dashboard = ({repository_info}) => {

  return (
    <div className={styles['dashboard-container']}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
            <h6 className={styles['dashboard-title']}>Selected Repository</h6>
            <div className={styles['repository-info']}> 
            dasdasdsad
            </div>
        </Grid>
      </Grid>
    </div>
  )
}


export default Dashboard;