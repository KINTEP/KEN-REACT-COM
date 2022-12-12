import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

export default function SideBar() {
  return (
    <Box  sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', height:"100%" }}>
        <Stack>
          <ListItem disablePadding sx={{height:"10px"}}>
            <ListItemButton>
              <ListItemText primary="Inbox" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Drafts" />
            </ListItemButton>
          </ListItem>
        </Stack>
    </Box>
  );
}