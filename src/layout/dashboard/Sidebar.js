import React from 'react'
import useStyles from './GeneralJSXStyling'
export default function Sidebar() {
    const classes = useStyles();

    return (
            <div className={classes.toolbar} />
<Divider />
<List>
  {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    <ListItem button key={text}>
      <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  ))}
</List>
<Divider />
<List>
  {['All mail', 'Trash', 'Spam'].map((text, index) => (
    <ListItem button key={text}>
      <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  ))}
</List>
</div>
);

return (
<div className={classes.root}>
<CssBaseline />
<AppBar position="fixed" className={classes.appBar}>
  <Toolbar>
    <IconButton
      color="inherit"
      aria-label="open drawer"
      edge="start"
      onClick={handleDrawerToggle}
      className={classes.menuButton}
    >
      <MenuIcon />
    </IconButton>
    <Typography variant="h6" noWrap>
      Responsive drawer
    </Typography>
  </Toolbar>
</AppBar>
<nav className={classes.drawer} aria-label="mailbox folders">
  {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
  <Hidden smUp implementation="css">
    <Drawer
      container={container}
      variant="temporary"
      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
      open={mobileOpen}
      onClose={handleDrawerToggle}
      classes={{
        paper: classes.drawerPaper,
      }}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      {drawer}
    </Drawer>
  </Hidden>
  <Hidden xsDown implementation="css">
    <Drawer
      classes={{
        paper: classes.drawerPaper,
      }}
      variant="permanent"
      open
    >
      {drawer}
    </Drawer>
  </Hidden>
</nav>
    )
}
