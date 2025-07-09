import { AppBar, Toolbar, Typography, Container, Box, Link, Paper, Card, CardContent, Grid, IconButton, Avatar, Fade } from '@mui/material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import SchoolIcon from '@mui/icons-material/School'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { useRef } from 'react'
import { keyframes } from '@emotion/react'
import './App.css'

function App() {
  // Smooth scroll handler
  const aboutRef = useRef(null)
  const worksRef = useRef(null)
  const contactRef = useRef(null)

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Animation for hero text
  const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  `

  return (
    <>
      {/* Header */}
      <AppBar position="sticky" color="inherit" elevation={2} sx={{ bgcolor: '#c7e0ff' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" fontWeight="bold" color="#2a3d5c">Rio Raharja</Typography>
          <Box>
            <Link component="button" onClick={() => handleScroll(aboutRef)} color="inherit" underline="hover" sx={{ mx: 2, color: '#357ab8' }}>About</Link>
            <Link component="button" onClick={() => handleScroll(worksRef)} color="inherit" underline="hover" sx={{ mx: 2, color: '#357ab8' }}>Works</Link>
            <Link component="button" onClick={() => handleScroll(contactRef)} color="inherit" underline="hover" sx={{ mx: 2, color: '#357ab8' }}>Contact</Link>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(120deg, #c7e0ff 0%, #e3f0ff 100%)',
        position: 'relative',
        textAlign: 'center',
      }}>
        <Container maxWidth="md">
          <Fade in timeout={1200}>
            <Box>
              <Avatar sx={{ width: 96, height: 96, mx: 'auto', mb: 2, bgcolor: '#357ab8', color: '#fff', fontSize: 40 }}>R</Avatar>
              <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ animation: `${fadeIn} 1.2s`, color: '#2a3d5c' }}>
                Hello, I am Rio Raharja
              </Typography>
              <Typography variant="h6" sx={{ animation: `${fadeIn} 1.8s`, color: '#357ab8' }}>
                Lecturer, researcher, and author. Focused on disaster management, analytical photogrammetry, and remote sensing.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* About */}
      <Box ref={aboutRef} id="about" sx={{ py: 8, bgcolor: '#e3f0ff' }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom color="#2a3d5c">About Me</Typography>
          <Typography sx={{ color: '#357ab8' }} paragraph>
            I am a lecturer and researcher actively engaged in disaster mitigation, analytical photogrammetry, and remote sensing. I have participated in various national projects such as the <i>Kalaena Project</i> and am currently writing a book on disaster risk financing schemes.
          </Typography>
          <Typography sx={{ color: '#357ab8' }}>
            In addition to teaching and research, I am also active in writing academic books, supervising students, and collaborating with institutions related to disaster risk management in Indonesia.
          </Typography>
        </Container>
      </Box>

      {/* Works */}
      <Box ref={worksRef} id="works" sx={{ py: 8, bgcolor: '#c7e0ff' }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom color="#2a3d5c">Works & Publications</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ bgcolor: '#e3f0ff', borderColor: '#357ab8', transition: '0.3s', '&:hover': { boxShadow: 6, transform: 'translateY(-4px)', borderColor: '#2a3d5c' } }}>
                <CardContent>
                  <MenuBookIcon sx={{ color: '#357ab8' }} fontSize="large" />
                  <Typography variant="h6" fontWeight="bold" mt={2} color="#2a3d5c">Study on the Development of Disaster Risk Financing Schemes and Instruments</Typography>
                  <Typography sx={{ color: '#357ab8' }}>In progress</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ bgcolor: '#e3f0ff', borderColor: '#357ab8', transition: '0.3s', '&:hover': { boxShadow: 6, transform: 'translateY(-4px)', borderColor: '#2a3d5c' } }}>
                <CardContent>
                  <MenuBookIcon sx={{ color: '#357ab8' }} fontSize="large" />
                  <Typography variant="h6" fontWeight="bold" mt={2} color="#2a3d5c">Analytical Photogrammetry: Theory and Practice</Typography>
                  <Typography sx={{ color: '#357ab8' }}>In preparation</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ bgcolor: '#e3f0ff', borderColor: '#357ab8', transition: '0.3s', '&:hover': { boxShadow: 6, transform: 'translateY(-4px)', borderColor: '#2a3d5c' } }}>
                <CardContent>
                  <WorkOutlineIcon sx={{ color: '#357ab8' }} fontSize="large" />
                  <Typography variant="h6" fontWeight="bold" mt={2} color="#2a3d5c">Researcher in the Kalaena Project</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ bgcolor: '#e3f0ff', borderColor: '#357ab8', transition: '0.3s', '&:hover': { boxShadow: 6, transform: 'translateY(-4px)', borderColor: '#2a3d5c' } }}>
                <CardContent>
                  <SchoolIcon sx={{ color: '#357ab8' }} fontSize="large" />
                  <Typography variant="h6" fontWeight="bold" mt={2} color="#2a3d5c">International Journal: Post-Event Damage Assessment and Community Adaptive Capacity Analysis: The November 2022 Mw 5.6 Cianjur Earthquake</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact */}
      <Box ref={contactRef} id="contact" sx={{ py: 8, bgcolor: '#e3f0ff' }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom color="#2a3d5c">Contact</Typography>
          <Typography sx={{ color: '#357ab8' }}>Please contact me via email or the following professional platforms:</Typography>
          <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton sx={{ color: '#357ab8' }} href="mailto:rio.raharja@email.com" aria-label="Email">
                <EmailIcon />
              </IconButton>
              <Typography>Email: <Link href="mailto:rio.raharja@email.com" sx={{ color: '#357ab8' }} underline="hover">rio.raharja@email.com</Link></Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton sx={{ color: '#357ab8' }} href="#" aria-label="Google Scholar">
                <SchoolIcon />
              </IconButton>
              <Typography>Google Scholar: <Link href="#" sx={{ color: '#357ab8' }} underline="hover">[Your Link]</Link></Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton sx={{ color: '#357ab8' }} href="#" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
              <Typography>LinkedIn: <Link href="#" sx={{ color: '#357ab8' }} underline="hover">[Your Link]</Link></Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Paper square elevation={0} sx={{ bgcolor: '#c7e0ff', py: 3, textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: '#357ab8' }}>&copy; 2025 Rio Raharja. All rights reserved.</Typography>
      </Paper>
    </>
  )
}

export default App
