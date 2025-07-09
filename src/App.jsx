import { AppBar, Toolbar, Typography, Container, Box, Link, Paper, Card, CardContent, Grid, IconButton, Avatar, Fade, Divider, Collapse, CardActionArea } from '@mui/material'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'
import SchoolIcon from '@mui/icons-material/School'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { useRef, useState, useMemo } from 'react'
import { keyframes, css } from '@emotion/react'
import { createTheme, ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material'
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

  // Dark mode state
  const prefersDark = useMediaQuery('(prefers-color-scheme: dark)')
  const [darkMode, setDarkMode] = useState(prefersDark)

  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: { main: darkMode ? '#5ecfff' : '#0057b8' }, // Sky blue for dark, strong blue for light
      secondary: { main: darkMode ? '#ffd166' : '#00b894' }, // Soft yellow for dark, teal for light
      background: {
        default: darkMode ? '#181c20' : '#f7fafd', // Deep blue-gray for dark, very light blue for light
        paper: darkMode ? '#23272f' : '#ffffff', // Card backgrounds
      },
      text: {
        primary: darkMode ? '#f7fafd' : '#1a1a1a', // Near-white for dark, almost black for light
        secondary: darkMode ? '#5ecfff' : '#0057b8',
      },
      divider: darkMode ? '#2d3748' : '#e0e3e7',
    },
    shape: { borderRadius: 16 },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: darkMode
              ? '0 2px 16px 0 rgba(0,0,0,0.18)'
              : '0 2px 12px 0 rgba(0,87,184,0.08)',
            borderColor: darkMode ? '#5ecfff' : '#0057b8',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: darkMode ? '#23272f' : '#ffffff',
            color: darkMode ? '#f7fafd' : '#1a1a1a',
            borderBottom: `1px solid ${darkMode ? '#2d3748' : '#e0e3e7'}`,
          },
        },
      },
    },
    typography: {
      fontFamily: 'Inter, Roboto, Arial, sans-serif',
      h3: { fontWeight: 800, color: darkMode ? '#f7fafd' : '#1a1a1a' },
      h4: { fontWeight: 700, color: darkMode ? '#f7fafd' : '#1a1a1a' },
      h5: { fontWeight: 700, color: darkMode ? '#f7fafd' : '#1a1a1a' },
      body2: { color: darkMode ? '#b0b8c1' : '#4a4a4a' },
    },
  }), [darkMode])

  // State for which education card is expanded
  const [expandedDegree, setExpandedDegree] = useState(null)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Header */}
      <AppBar position="sticky" color="inherit" elevation={2} sx={{ bgcolor: 'background.paper', borderBottom: 1, borderColor: 'divider', color: 'text.primary' }}>
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: '1200px', width: '100%', mx: 'auto' }}>
          <Typography variant="h5" fontWeight="bold" color="text.primary">Rio Raharja</Typography>
          <Box>
            <Link component="button" onClick={() => handleScroll(aboutRef)} color="inherit" underline="hover" sx={{ mx: 2, color: 'primary.main' }}>About</Link>
            <Link component="button" onClick={() => handleScroll(worksRef)} color="inherit" underline="hover" sx={{ mx: 2, color: 'primary.main' }}>Works</Link>
            <Link component="button" onClick={() => handleScroll(contactRef)} color="inherit" underline="hover" sx={{ mx: 2, color: 'primary.main' }}>Contact</Link>
            <IconButton onClick={() => setDarkMode(m => !m)} sx={{ ml: 2 }} aria-label="Toggle dark mode" color="inherit">
              {darkMode ? (
                // Sun icon for light mode
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="#ffb400"/><g stroke="#ffb400" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="6.34" y2="6.34"/><line x1="17.66" y1="17.66" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="6.34" y2="17.66"/><line x1="17.66" y1="6.34" x2="19.78" y2="4.22"/></g></svg>
              ) : (
                // Moon icon for dark mode
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 0 1 12.79 3 7 7 0 1 0 21 12.79z" fill="#156064"/></svg>
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: darkMode
          ? 'linear-gradient(120deg, #181c20 0%, #23272f 100%)'
          : 'linear-gradient(120deg, #f7fafd 0%, #e3f0ff 100%)',
        position: 'relative',
        textAlign: 'center',
      }}>
        <Container maxWidth="lg">
          <Fade in timeout={1200}>
            <Box>
              <Avatar sx={{ width: 96, height: 96, mx: 'auto', mb: 2, bgcolor: 'primary.main', color: '#fff', fontSize: 40 }}>R</Avatar>
              <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ animation: `${fadeIn} 1.2s`, color: 'text.primary' }}>
                Hello, I am Rio Raharja
              </Typography>
              <Typography variant="h6" sx={{ animation: `${fadeIn} 1.8s`, color: 'primary.main' }}>
                Lecturer, researcher, and author. Focused on disaster management, analytical photogrammetry, and remote sensing.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      <Divider sx={{ my: { xs: 0, md: 0 }, borderColor: darkMode ? '#2d3748' : '#e0e3e7' }} />

      {/* About */}
      <Box ref={aboutRef} id="about" sx={{ py: 8, bgcolor: darkMode ? '#20242a' : '#f4f8fb' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">About Me</Typography>
          <Typography sx={{ color: 'text.secondary' }} paragraph>
            I am a lecturer and researcher actively engaged in disaster mitigation, analytical photogrammetry, and remote sensing. I have participated in various national projects such as the <i>Kalaena Project</i> and am currently writing a book on disaster risk financing schemes.
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            In addition to teaching and research, I am also active in writing academic books, supervising students, and collaborating with institutions related to disaster risk management in Indonesia.
          </Typography>
        </Container>
      </Box>

      <Divider sx={{ my: { xs: 0, md: 0 }, borderColor: darkMode ? '#23272f' : '#e3f0ff' }} />

      {/* Education */}
      <Box id="education" sx={{ py: 8, bgcolor: darkMode ? '#23272f' : '#e3f0ff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">Education</Typography>
          <Grid container spacing={3} justifyContent="center" alignItems="stretch">
            {/* Bachelor of Science - Accordion */}
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
              <Card variant="outlined" sx={{ bgcolor: 'background.paper', borderColor: 'primary.main', height: '100%', mx: 'auto', cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
                <CardActionArea onClick={() => setExpandedDegree(expandedDegree === 'bachelor' ? null : 'bachelor')}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 180 }}>
                    <SchoolIcon sx={{ color: 'primary.main' }} fontSize="large" />
                    <Typography variant="h6" fontWeight="bold" mt={2} color="text.primary">Bachelor of Science</Typography>
                    <Collapse in={expandedDegree === 'bachelor'} timeout="auto" unmountOnExit>
                      <Box mt={2}>
                        <Typography sx={{ color: 'text.secondary', fontWeight: 500, mt: 1 }}>Graduated from:</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Geodesy and Geomatics</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Faculty of Earth Sciences and Technology</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Institut Teknologi Bandung, Indonesia</Typography>
                        <Typography sx={{ color: 'text.secondary', fontWeight: 500, mt: 1 }}>Graduation Year:</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>2015</Typography>
                      </Box>
                    </Collapse>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* Master of Science - Accordion */}
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
              <Card variant="outlined" sx={{ bgcolor: 'background.paper', borderColor: 'primary.main', height: '100%', mx: 'auto', cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
                <CardActionArea onClick={() => setExpandedDegree(expandedDegree === 'master' ? null : 'master')}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 180 }}>
                    <SchoolIcon sx={{ color: 'primary.main' }} fontSize="large" />
                    <Typography variant="h6" fontWeight="bold" mt={2} color="text.primary">Master of Science</Typography>
                    <Collapse in={expandedDegree === 'master'} timeout="auto" unmountOnExit>
                      <Box mt={2}>
                        <Typography sx={{ color: 'text.secondary', fontWeight: 500, mt: 1 }}>Graduated from:</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Geodesy and Geomatics</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Faculty of Earth Sciences and Technology</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Institut Teknologi Bandung, Indonesia</Typography>
                        <Typography sx={{ color: 'text.secondary', fontWeight: 500, mt: 1 }}>Graduation Year:</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>2016</Typography>
                      </Box>
                    </Collapse>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* Doctor of Science - Accordion */}
            <Grid item xs={12} md={4} display="flex" justifyContent="center">
              <Card variant="outlined" sx={{ bgcolor: 'background.paper', borderColor: 'primary.main', height: '100%', mx: 'auto', cursor: 'pointer', transition: 'box-shadow 0.2s' }}>
                <CardActionArea onClick={() => setExpandedDegree(expandedDegree === 'doctor' ? null : 'doctor')}>
                  <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 180 }}>
                    <SchoolIcon sx={{ color: 'primary.main' }} fontSize="large" />
                    <Typography variant="h6" fontWeight="bold" mt={2} color="text.primary">Doctor of Science</Typography>
                    <Collapse in={expandedDegree === 'doctor'} timeout="auto" unmountOnExit>
                      <Box mt={2}>
                        <Typography sx={{ color: 'text.secondary', fontWeight: 500, mt: 1 }}>Graduated from:</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Earth and Environmental Sciences</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Graduate School of Environmental Studies</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>Nagoya University, Japan</Typography>
                        <Typography sx={{ color: 'text.secondary', fontWeight: 500, mt: 1 }}>Graduation Year:</Typography>
                        <Typography sx={{ color: 'text.secondary' }}>2024</Typography>
                      </Box>
                    </Collapse>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ my: { xs: 0, md: 0 }, borderColor: darkMode ? '#20242a' : '#f4f8fb' }} />

      {/* Works */}
      <Box id="works" sx={{ py: 8, bgcolor: darkMode ? '#181c20' : '#f4f8fb' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">Works</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ bgcolor: 'background.paper', borderColor: 'primary.main', transition: '0.3s', '&:hover': { boxShadow: 6, transform: 'translateY(-4px)', borderColor: 'secondary.main' } }}>
                <CardContent>
                  <WorkOutlineIcon sx={{ color: 'primary.main' }} fontSize="large" />
                  <Typography variant="h6" fontWeight="bold" mt={2} color="text.primary">Researcher in the Kalaena Project</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ my: { xs: 0, md: 0 }, borderColor: darkMode ? '#23272f' : '#e3f0ff' }} />

      {/* Publications */}
      <Box id="publications" sx={{ py: 8, bgcolor: darkMode ? '#23272f' : '#e3f0ff' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary">Publications</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ bgcolor: 'background.paper', borderColor: 'primary.main', transition: '0.3s', '&:hover': { boxShadow: 6, transform: 'translateY(-4px)', borderColor: 'secondary.main' } }}>
                <CardContent>
                  <MenuBookIcon sx={{ color: 'primary.main' }} fontSize="large" />
                  <Typography variant="h6" fontWeight="bold" mt={2} color="text.primary">Study on the Development of Disaster Risk Financing Schemes and Instruments</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>In progress</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ bgcolor: 'background.paper', borderColor: 'primary.main', transition: '0.3s', '&:hover': { boxShadow: 6, transform: 'translateY(-4px)', borderColor: 'secondary.main' } }}>
                <CardContent>
                  <MenuBookIcon sx={{ color: 'primary.main' }} fontSize="large" />
                  <Typography variant="h6" fontWeight="bold" mt={2} color="text.primary">Analytical Photogrammetry: Theory and Practice</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>In preparation</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card variant="outlined" sx={{ bgcolor: 'background.paper', borderColor: 'primary.main', transition: '0.3s', '&:hover': { boxShadow: 6, transform: 'translateY(-4px)', borderColor: 'secondary.main' } }}>
                <CardContent>
                  <SchoolIcon sx={{ color: 'primary.main' }} fontSize="large" />
                  <Typography variant="h6" fontWeight="bold" mt={2} color="text.primary">International Journal: Post-Event Damage Assessment and Community Adaptive Capacity Analysis: The November 2022 Mw 5.6 Cianjur Earthquake</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Divider sx={{ my: { xs: 0, md: 0 }, borderColor: darkMode ? '#20242a' : '#f4f8fb' }} />

      {/* Contact */}
      <Box ref={contactRef} id="contact" sx={{ py: 8, bgcolor: darkMode ? '#181c20' : '#f4f8fb' }}>
        <Container maxWidth="sm">
          <Typography variant="h4" fontWeight="bold" gutterBottom color="text.primary" align="center">Contact</Typography>
          <Card variant="outlined" sx={{ bgcolor: 'background.paper', borderColor: 'primary.main', p: 2, mx: 'auto', maxWidth: 340, boxShadow: 3 }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, p: 0 }}>
              <Link href="https://www.google.com/maps/place/6%C2%B053'29.5%22S+107%C2%B036'43.8%22E" target="_blank" rel="noopener noreferrer" aria-label="Open in Google Maps"
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1,
                  '& svg': { transition: 'fill 0.2s' },
                  '&:hover svg': { fill: theme.palette.secondary.main }
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 24 24" width="48" fill={theme.palette.primary.main} style={{ transition: 'fill 0.2s' }}><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </Link>
              <Typography sx={{ color: 'text.secondary', fontWeight: 500, whiteSpace: 'pre-line', textAlign: 'center', mb: 1, fontSize: 15 }}>
                Labtek IX-C 3rd floor{`\n`}
                Geodesy and Geomatics Engineering{`\n`}
                Institut Teknologi Bandung{`\n`}
                Jalan Ganesa 10, Bandung, Indonesia 40132
              </Typography>
            </CardContent>
          </Card>
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 3, mt: 3 }}>
            <Link href="mailto:rioraharja@itb.ac.id" sx={{ color: 'primary.main', '&:hover': { color: 'secondary.main' } }} underline="hover" aria-label="Email">
              <EmailIcon sx={{ fontSize: 32, transition: 'color 0.2s' }} />
            </Link>
            <Link href="https://scholar.google.com/citations?user=6dg32joAAAAJ&hl=en" sx={{ color: 'primary.main', '&:hover': { color: 'secondary.main' } }} underline="hover" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
              <SchoolIcon sx={{ fontSize: 32, transition: 'color 0.2s' }} />
            </Link>
            <Link href="https://www.linkedin.com/in/rioraharja/" sx={{ color: 'primary.main', '&:hover': { color: 'secondary.main' } }} underline="hover" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon sx={{ fontSize: 32, transition: 'color 0.2s' }} />
            </Link>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Paper square elevation={0} sx={{ bgcolor: 'background.paper', py: 3, textAlign: 'center', borderTop: 1, borderColor: 'divider' }}>
        <Typography variant="body2" sx={{ color: 'primary.main' }}>&copy; 2025 Rio Raharja. All rights reserved.</Typography>
      </Paper>
    </ThemeProvider>
  )
}

export default App
