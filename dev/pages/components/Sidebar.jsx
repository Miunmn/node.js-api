import {BiBookBookmark} from 'react-icons/bi'
import styles from "../../styles/Home.module.css"
import Grid from '@mui/material/Grid';
import { AtomSpinner } from 'react-epic-spinners'


const Sidebar = ({repos, loadingRepos, handleSelectedRepo}) => {
  return (
    <>
      <div className={styles['sidebar-title-container']}>
          <p className={styles['sidebar-title']}>Repositories</p>
        </div>
        <div className={styles['repo-holder']}>
        {
          loadingRepos? <AtomSpinner color="red"/>:
          repos.map((repo, index) => {
            return (
              <div key={index} className={styles['repo-item']}> 
              <div className={styles['repo-icon']}>
                <BiBookBookmark />
              </div>
              <div className={styles['repo-name']}>
                <a onClick={handleSelectedRepo}>{repo.name}</a>
              </div>
              
              {/* <Grid container >
                  <Grid item xs={1}>
                    <BiBookBookmark size={30} />
                    </Grid>
                  <Grid item xs={11}>
                    <div onClick={(e)=>{handleSelectedRepo(e)}} className={styles['repo-name']}><a>{repo.name}</a></div>
                  </Grid>
              </Grid> */}
              </div>
            )
          })
        }
        </div>
    </>

  )
}


export default Sidebar;