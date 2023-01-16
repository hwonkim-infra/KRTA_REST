import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";


import navConfig from './NavConfig';
import NavList from './NavList';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box display="flex" justifyContent="space-between" p={2} backgroundColor={colors.primary[400]}>

      <Stack direction="row" justifyContent="center" sx={{ bgcolor: '#F0FFFF', borderRadius: 1, px: 0.5 }}>
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
