import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {SiGithub} from 'react-icons/si'
import styles from '../../styles/Header.module.css'
import { Grid } from '@mui/material';

const Header = ({}) => {
  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.header} position="static"> 
        <Toolbar>
          <Grid container className={styles['logo-title']} spacing={2}>
            <Grid item xs={2}>
              <SiGithub  size={50}  className='menu-icon menu-logo' onClick={()=>{
                window.open(`https://github.com`, '_blank')
              }}/>
            </Grid>
            <Grid item xs={5}>
              <div  className={styles['input-holder']}>
                <input 
                  className={styles['input-header']} 
                  // value={inputSearch} 
                  placeholder="Search by username" 
                  onChange={(e)=>{
                    // e.preventDefault()
                    // setToggleResults(true)
                    // setInputSearch(e.target.value)
                  }}
                />
                  {/* {toggleResults && 
                    <div ref={selectorRef} className='search-results'>
                    { results.length > 0 
                    ?
                    results?.map(user =>(
                        <p onClick={()=>{
                          dispatch(fetchUserInfo(user.login))
                          setToggleResults(false)
                          setInputSearch(user.login)                    
                        }} key={user.id}>{user.login}</p>
                      ))
                    : <p>User not found</p>
                    }
                </div>
                } */}
              </div>
            </Grid>

            <Grid item xs={5}>
              <Typography variant="h4" component="div" className={styles.title} sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              Repositories Viewer
            </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  )

}

export default Header;
