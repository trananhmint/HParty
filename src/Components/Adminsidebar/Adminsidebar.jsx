import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import { Avatar } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CelebrationIcon from '@mui/icons-material/Celebration';
import SingleBedIcon from '@mui/icons-material/SingleBed';
import RedeemIcon from '@mui/icons-material/Redeem';
import './Adminsidebar.css';
import axios from "axios";

const drawerWidth = 240;


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const AdminSidebar = ({ open, handleDrawerClose }) => {

  const [user, setUser] = useState();
  const [name, setName] = useState();

  const fetchUser = async () => {
    try {
      const response = await axios.get('https://bookingbirthdayparties.azurewebsites.net/api/User', {
        withCredentials: true,
      });
      console.log(response);
      setUser(response.data.data);
    } catch (err) {
      console.error('Error fetching user ID:', err);
      throw err; // Rethrow the error to handle it further up the call stack
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
        const text = user.fullName; 
        setName(text);
    }
}, [user]);
  const storedImage = localStorage.getItem('selectedImage');
  const theme = useTheme();

  const textAndIcons = {
    'My Profile Info':  <AssignmentIndIcon style={{color: 'white'}} />,
    'All Users': <AccountBoxIcon style={{color: 'white'}}/>,
    'All Services': <CelebrationIcon style={{color: 'white'}}/>,
    // 'All Contracts': <TaskIcon style={{color: 'white'}}/>,
    'All Rooms': <SingleBedIcon style={{color: 'white'}}/>,
    'All Promotions': <RedeemIcon style={{color: 'white'}}/>
  };

  return (
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            // background: 'linear-gradient(to bottom, #DEB887, #FFFFFF )',
            background: '#e7c494',
            color: 'white',
            fontWeight: '500'

        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'space-between' }}>
        <Link to='/admin-profile' style={{ textDecoration: 'none', color: 'white' }}>
        <Avatar src={storedImage} {...(name ? stringAvatar(name) : {})} />
        <p style={{fontWeight: '500', fontSize:'18px', whiteSpace:'nowrap'}}>{name}</p>
        </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon style={{color:'#ffffff'}}/> : <ChevronRightIcon />}
          </IconButton>
        </div>
        </DrawerHeader>
        <Divider />
        <List>
        {['My Profile Info', 'All Users', 'All Services', 'All Rooms', 'All Promotions'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={text === 'My Profile Info' ? '/admin-profile' : `/${text.toLowerCase().replace(/\s/g, '-')}`}>
              <ListItemIcon>
                {textAndIcons[text]}
              </ListItemIcon>
              <ListItemText  primaryTypographyProps={{fontWeight: '500'}} primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon style={{color: 'white'}} /> : <MailIcon style={{color: 'white'}}/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      )
    };
    export default AdminSidebar