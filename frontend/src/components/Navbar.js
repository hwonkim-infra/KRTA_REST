import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Link,
  MenuItem,
  styled,
} from "@mui/material";

export default function Navbar({ modelType }) {
  const Styledtoolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const MenuBox = styled(Box)({
    display: "flex",
    gap: 50,
  });

  const MenuItems = [
    { Name: "HEX", Link: "/" },
    { Name: "WEX", Link: "/WEX" },
    { Name: "TCF", Link: "/PSC" },
    { Name: "Blog", Link: "/Blog" },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderMenu = (menutype) => {
    switch (menutype) {
      case "WEX":
        return "WEX";
      case "TCF":
        return "TCF";
      case "Blog":
        return "Blog";
      default:
        return "";
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ background: "#0000af" }} position="static">
        <Styledtoolbar>
          {/* <IconButton
            size="small"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <MenuIcon />
          </IconButton> */}

          <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            {MenuItems.map((items) => (
              <MenuItem key={items.Name}>
                {" "}
                <Link href={items.Link} color="inherit" underline="hover">
                  {items.Name}
                </Link>
              </MenuItem>
            ))}
          </MenuBox>

          {/* <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem>              <Link href="/" underline="hover">Crawler</Link>            </MenuItem>
            <MenuItem>              <Link href="/WEX" underline="hover">Wheel Exca</Link>            </MenuItem>
            <MenuItem>              <Link href="/Blog" underline="hover">                BLOG              </Link>            </MenuItem>
          </Menu> */}

          <Button color="inherit">
            <Link href={modelType + "/new"} sx={{ color: "white" }}>
              New File
            </Link>
          </Button>
        </Styledtoolbar>
      </AppBar>
    </Box>
  );
}
