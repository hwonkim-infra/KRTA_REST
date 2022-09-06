import { Box } from '@mui/material'
import { forwardRef } from 'react'

const Page = forwardRef(({ children, title='', meta, ...other}, ref) => {
  return (
    <div>
        <title>{`${title} | Minimal-UI`}</title>
        {meta}
        <Box ref={ref} {...other}>
            {children}
        </Box>
    </div>
  )
})

export default Page