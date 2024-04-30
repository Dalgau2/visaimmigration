import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { motion } from "framer-motion";
import logo from "../../assets/Images/Plane.webp";
import data from "./NavOption.json";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
import "./styleForNavBar.css";
import "../ImmigrationNav/styleForNavBar.css";
import SearchBarForImmigration from "../ReusebleSearchBar/searchBar";
function NavigationBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [scrollDown, setSecrollDown] = useState(false);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  // scrollDown Effect on the nav bar
  const downScroll = () => {
    if (window.scrollY >= 90) {
      setSecrollDown(true);
    } else {
      setSecrollDown(false);
    }
  };
  window.addEventListener("scroll", downScroll);

  return (
    <Box sx={{ height: "110px" }}>
      <AppBar
        className={scrollDown ? "navbarTrue active" : "navBar active"}
        position="fixed"
      >
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
              <img src={logo} alt="logo" />
            </Box>
            <Typography
              variant="h6"
              // noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Immigration
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {/* xs=flex md=none side bar */}
                {data.map((nav) => (
                  <MenuItem key={nav.id} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{nav.navlink}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
              <img src={logo} alt="logo" />
            </Box>
            {/* center logo whene xs screen */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 900,
                color: "inherit",
                textDecoration: "none",
                fontWeight: { xs: "700" },
              }}
            >
              Immigration
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-evenly",
                height: "30px",
                alignItems: "center",
                width: "70%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "75%",
                }}
                className={scrollDown ? "navLinkOfImmigration active" : null}
              >
                {data.map((nav) => (
                  <Link
                    to={`${nav.href}`}
                    key={nav.id}
                    onClick={handleCloseNavMenu}
                    style={{
                      my: 2,
                      color: "black",
                      display: "block",
                      textDecoration: "none",
                      zIndex: 999,
                    }}
                    className="navBarLink"
                  >
                    {nav.navlink}
                  </Link>
                ))}
              </Box>
              {scrollDown ? (
                <motion.div
                  style={{
                    width: "440px",
                    height: "45px",
                    borderRadius: "60px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "101",
                    zIndex: "100",
                    border: "1px solid #FEDD6E",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Where to Go"
                    style={{
                      width: "380px",
                      height: "35px",
                      padding: "5px",
                      outline: "none",
                      border: "none",
                      borderRadius: "20px",
                    }}
                  />
                  <IconButton sx={{ marginLeft: "6px", height: "37px" }}>
                    <SearchOutlinedIcon />
                  </IconButton>
                </motion.div>
              ) : null}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Button
                component={Paper}
                onClick={handleOpenUserMenu}
                sx={{
                  p: 0,
                  borderRadius: "40px",
                  color: "black",
                  width: "135px",
                  height: "45px",
                  fontFamily: "Poppins",
                  fontSize: "17px",
                  backgroundColor: "primary.main",
                  ":hover": { backgroundColor: "primary.dark" },
                  display: { xs: "none", md: "flex" },
                  textAlign: "center",
                }}
              >
                <PersonOutlineIcon
                  sx={{ padding: "2px", paddingBottom: "3px" }}
                />{" "}
                LOGIN
                {/* <Button sx={{width:"135px",height:"45px",borderRadius:"40px"}}>hello</Button> */}
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
export default NavigationBar;
