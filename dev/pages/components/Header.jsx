import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {SiGithub} from 'react-icons/si'
import {FaBars} from 'react-icons/fa'
import styles from '../../styles/Header.module.css'
import { Grid } from '@mui/material';

const Header = ({handleChangeChecked}) => {
  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.header} position="static"> 
        <Toolbar>
          <div >
            <div className={styles['menu-logo']}>
              <SiGithub size={40}  onClick={()=>{
                  window.open(`https://github.com`, '_blank')
                }}/>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )

}

export default Header;
