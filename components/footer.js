import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm">
      &copy; {new Date().getFullYear()} I do not own the source code. Modified from Takuya Matsuyama.
    </Box>
  )
}

export default Footer
