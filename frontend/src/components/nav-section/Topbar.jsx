import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";


import navConfig from './NavConfig';
import NavList from './NavList';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" justifyContent="space-between" p={1} backgroundColor='#E0E6F8'>

      <Stack direction="row" justifyContent="center" sx={{ bgcolor: '#F2F2F2', borderRadius: 1, px: 0.5 }}>
        {navConfig.map((group) => (
          <Stack key={group.subheader} direction="row" flexShrink={0}>
            {group.items.map((list) => (
              <NavList key={list.title + list.path} data={list} depth={1} hasChildren={!!list.children} />
            ))}
          </Stack>
        ))}
    </Stack>

    </Box>
  );
};

export default Topbar;
