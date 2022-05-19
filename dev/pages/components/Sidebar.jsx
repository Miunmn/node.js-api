import {BiBookBookmark} from 'react-icons/bi'
import styles from "../../styles/Home.module.css"
import Grid from '@mui/material/Grid';


const Sidebar = ({repos}) => {
  return (
    <>
      <div className={styles['sidebar-title-container']}>
          <p className={styles['sidebar-title']}>Repositories</p>
        </div>
        <div className='repo-holder'>
        {
          repos.map((repo, index) => {
            return (
              <div key={index}> 
              <Grid container >
                  <Grid item xs={1}>
                    <BiBookBookmark size={30} />
                    </Grid>
                  <Grid item xs={11}>
                    <div onClick={(e)=>{}} className={styles['repo-name']}>{repo.name}</div>
                  </Grid>
              </Grid>
              </div>
            )
          })
        }
        </div>
    </>

  )
}


export default Sidebar;