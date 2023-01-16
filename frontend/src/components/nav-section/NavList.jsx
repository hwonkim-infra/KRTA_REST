import PropTypes from "prop-types";
import { useState, useEffect, useRef, forwardRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
// @mui
import { Box, Link, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
//
import { ListItemStyle, PaperStyle } from "./style";
import Iconify from "../Iconify";

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
const ICON = {
  NAVBAR_ITEM: 22,
  NAVBAR_ITEM_HORIZONTAL: 20,
};
// ----------------------------------------------------------------------

const NavItem = forwardRef(({ item, depth, open, ...other }, ref) => {
  const { title, icon, info, children, disabled, caption, roles } = item;

  const renderContent = (
    <ListItemStyle
      ref={ref}
      open={open}
      depth={depth}
      disabled={disabled}
      {...other}
    >
      {icon && (
        <ListItemIcon
          sx={{
            mr: 1,
            flexShrink: 0,
            width: ICON.NAVBAR_ITEM_HORIZONTAL,
            height: ICON.NAVBAR_ITEM_HORIZONTAL,
          }}
        >
          {icon}
        </ListItemIcon>
      )}

      <ListItemText primary={title} />

      {caption && (
        <Tooltip title={caption} arrow>
          <Box component="span" sx={{ ml: 0.5, lineHeight: 0 }}>
            <Iconify
              icon="eva:info-outline"
              sx={{
                width: ICON.NAVBAR_ITEM_HORIZONTAL / -4,
                height: ICON.NAVBAR_ITEM_HORIZONTAL / -4,
              }}
            />
          </Box>
        </Tooltip>
      )}

      {info && (
        <Box component="span" sx={{ ml: 1, lineHeight: 0 }}>
          {info}
        </Box>
      )}

      {!!children && (
        <Iconify
          icon={depth > 1 ? "eva:chevron-right-fill" : "eva:chevron-down-fill"}
          sx={{
            ml: 0.5,
            flexShrink: 0,
            width: ICON.NAVBAR_ITEM_HORIZONTAL,
            height: ICON.NAVBAR_ITEM_HORIZONTAL,
          }}
        />
      )}
    </ListItemStyle>
  );

  return <>{renderContent}</>;
});

// ----------------------------------------------------------------------

NavList.propTypes = {
  data: PropTypes.object,
  depth: PropTypes.number,
  hasChildren: PropTypes.bool,
};

export default function NavList({ data, depth, hasChildren }) {
  const menuRef = useRef(null);

  const navigate = useNavigate();

  const { pathname } = useLocation();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      handleClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickItem = () => {
    if (!hasChildren) {
      navigate(data.path);
    }
  };

  return (
    <>
      <NavItem
        item={data}
        depth={depth}
        open={open}
        ref={menuRef}
        onClick={handleClickItem}
        onMouseEnter={handleOpen}
        onMouseLeave={handleClose}
      />

      {hasChildren && (
        <PaperStyle
          open={open}
          anchorEl={menuRef.current}
          anchorOrigin={
            depth === 1
              ? { vertical: "bottom", horizontal: "left" }
              : { vertical: "center", horizontal: "right" }
          }
          transformOrigin={
            depth === 1
              ? { vertical: "top", horizontal: "left" }
              : { vertical: "center", horizontal: "left" }
          }
          PaperProps={{
            onMouseEnter: handleOpen,
            onMouseLeave: handleClose,
          }}
        >
          <NavSubList data={data.children} depth={depth} />
        </PaperStyle>
      )}
    </>
  );
}

// ----------------------------------------------------------------------

NavSubList.propTypes = {
  data: PropTypes.array,
  depth: PropTypes.number,
};

function NavSubList({ data, depth }) {
  return (
    <>
      {data.map((list) => (
        <NavList
          key={list.title + list.path}
          data={list}
          depth={depth + 1}
          hasChildren={!!list.children}
        />
      ))}
    </>
  );
}
