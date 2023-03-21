import React, { useState }  from "react";
import { Route, Redirect,useHistory } from "react-router-dom";
import { isAutheticated } from "./index.js";
import withStyles from "@mui/material/styles/withStyles";

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import TodayIcon from '@mui/icons-material/Today';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import PersonIcon from '@mui/icons-material/Person';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ViewListIcon from '@mui/icons-material/ViewList';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Link from '@mui/material/Link';

import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import {signout} from './index.js'

import {companyName } from "../../const.js"
import {routesToShow,routesToShow_superAdmin, routePaths_superAdmin, routePaths} from "./adminNavRoutes.js"
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));



const AdminRoute = ({ component: Component, ...rest}) => {
  
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openListToggle, setOpenListToggle] = useState(false);
    const [color, setColor] = useState("blue");
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const {pageName} = rest ; 
    const history = useHistory();
  const {user, token} = isAutheticated()

  
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    const handleDrawerListClick = (pathname) => event  => {
      event.preventDefault();
      history.push(pathname)
    };
  
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  

const switchRoutes = (
    <Route
    {...rest}
    render={props =>
      isAutheticated() && isAutheticated().user.role > 0 ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location }
          }}
        />
      )
    }
  />
)
 const handleEventDrawerToggle = () => {
  setOpenListToggle(!openListToggle);

  };
 const handleSignout = () => {
    signout().then(data => {
      history.push("/")
    }
    )
  };
 


  return (
    <Box sx={{ display: 'flex' }}>
  

      <CssBaseline />
      <AppBar style={{ background: '#120E43' }} position="fixed" open={open}>
        <Toolbar>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
          {companyName}
          </Typography>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
          {pageName}
          </Typography>
          <h6 className="greetingAppBar" color="inherit" >{`Hello! ${user.name}`}</h6>
          <Button color="inherit" onClick={handleSignout}><LogoutIcon /></Button>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            sx={{ ...(open && { display: 'none', margin : '20' }) }}
          >
            
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
            
          </IconButton>
        </Toolbar>
      </AppBar>
      <Main open={open}>
        <DrawerHeader />
        {switchRoutes}
      </Main>
      <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#f7f8fa",
        }
      }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List >
          
          
        <ListItem disablePadding>
              <ListItemButton onClick={handleDrawerListClick("/admin/dashboard")}>
                <ListItemIcon>
                <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItemButton>
            </ListItem>
        <ListItem disablePadding>
              <ListItemButton onClick={handleDrawerListClick("/admin/event")}>
                <ListItemIcon>
                <TodayIcon />
                </ListItemIcon>
                <ListItemText primary={"Event"} />
              </ListItemButton>
            </ListItem>
        

      
     
        


        {user.role== 2 ?
          <div>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerListClick("/admin/createAdmin")}>
              <ListItemIcon>
              <AddReactionIcon />
              </ListItemIcon>
              <ListItemText primary={"Create Admin"} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerListClick("/admin/partner")}>
              <ListItemIcon>
              <AddReactionIcon />
              </ListItemIcon>
              <ListItemText primary={"Create Partner"} />
            </ListItemButton>
          </ListItem>
          </div>
         :
          <div>
          
          </div>
        
      } 
      </List>
      </Drawer>
    </Box>
  );
};

export default AdminRoute;
