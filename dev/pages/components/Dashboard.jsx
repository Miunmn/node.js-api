import styles from '../../styles/Dashboard.module.css'
import Grid from '@mui/material/Grid';


const Dashboard = ({selectedRepo}) => {
  console.log(selectedRepo )
  const getDate = (dateObj) =>{
    return dateObj.toLocaleDateString()
  }

  return (
    <div className={styles['dashboard-container']}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={styles['repository-info-container']}>
            <h6 className={styles['dashboard-title']}>Selected Repository</h6>
            <div className={styles['repository-info']}> 
              <div><a>{selectedRepo.name}</a></div>
              <div className={styles['repository-info-sub-headings']}>{selectedRepo.owner?selectedRepo.owner.login:''}</div>
              <div className={styles['repository-info-sub-headings']}>{selectedRepo.description?selectedRepo.description:''}</div>  
              <div className={styles['repository-dates']}>Creation date: {selectedRepo?getDate(new Date(selectedRepo.created_at)):''}</div> 
              <div className={styles['repository-dates']}>Last Update date: {selectedRepo?getDate(new Date(selectedRepo?.updated_at)):''}</div> 
            </div>  
          </div>
        </Grid>
      </Grid>
    </div>
  )
}


export default Dashboard;