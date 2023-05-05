import React from 'react'
import { Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar } from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import profile from '../public/assets/blurred.png'
import Image from 'next/image'
import DoneIcon from '@mui/icons-material/Done';
import SchoolIcon from '@mui/icons-material/School';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-scroll'
import { AiOutlineFilePdf } from 'react-icons/ai'

function About() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="about" py="5vh" className={styles.aboutbackground} sx={{ width: "100vw", backgroundColor: "background.primary" }} >
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={4} xs={12} sx={{ mb: 3, display: { xs: "none", sm: "flex" }, flexDirection: "column", justifyContent: "center" }} >
                        {/* <Lottie animationData={jsonfile} /> */}
                        <div data-aos="zoom-in"
                            data-aos-mirror="true"
                        >
                            <Box width="300px" height="300px" border="3px solid white" borderRadius="50%" overflow="hidden" mt="50px" margin="auto" >
                                <Image
                                    src={profile}
                                    alt="Picture of the author"
                                    width={360}
                                // height={300}


                                />
                            </Box >

                            <Box display="flex" gap="15px" mt="30px" justifyContent="center">
                                {/* <a href="https://www.facebook.com/2447.nada.samir">
                                <Avatar className={styles.iconContact}  ><FacebookIcon /></Avatar>
                            </a> */}
                                <a href='https://github.com/AhmedFakhry47'>
                                    <Avatar className={styles.iconContact} sx={{ backgroundColor: "neutral.contact" }} ><GitHubIcon /></Avatar>
                                </a>
                                <a href='https://www.linkedin.com/in/ahmed-fakhry-5b178017a'>
                                    <Avatar className={styles.iconContact} sx={{ backgroundColor: "neutral.contact" }}  ><LinkedInIcon /></Avatar></a>
                                <a href='(+20) 10-9813-0059'>
                                    <Avatar className={styles.iconContact} sx={{ backgroundColor: "neutral.contact" }}  >< WhatsAppIcon /></Avatar>
                                </a>

                                <a href='mailto:ahmedfakhry805@gmail.com'>
                                    <Avatar className={styles.iconContact} sx={{ backgroundColor: "neutral.contact" }}  ><EmailIcon /></Avatar>
                                </a>

                            </Box>
                        </div>



                    </Grid>
                    <Grid item md={8} xs={12} sx={{ padding: "0px 0px", mt: 4, color: "text.primary" }} >
                        <Typography variant='h4' sx={{ fontWeight: "bolder" }}>Ahmed Fakhry</Typography>
                        <Typography variant='h5' sx={{ my: 2, fontWeight: "bold", }} data-aos="fade-left" data-aos-delay="500">
                            MIT '18, M.Eng. Student, Software Engineer, and AI/ML Researcher
                        </Typography>
                        <Typography variant='h6' sx={{ my: 3, color: "text.secondary" }} data-aos="fade-left" data-aos-once="true" >
                            I'm a graduate of MIT's Class of 2018 and my passion is Computer Science.
                            My interests include software design and development, artificial intelligence, machine learning, computer vision, and natural language processing.
                        </Typography>
                        <Typography variant='h6' sx={{ color: "text.secondary" }}>I'm currently a graduate student working towards my Master of Engineering (M.Eng.) degree in Computer Science/Artificial Intelligence.</Typography>
                        <List >
                            <Typography variant='h4' sx={{ my: 1, fontWeight: "bold" }} >Education</Typography>
                            <ListItem>
                                <ListItemIcon>
                                    <SchoolIcon sx={{ color: "text.primary", width: "30px", height: "30px" }} />
                                </ListItemIcon>
                                <ListItemText primary="M.SC in computing and information systems" primaryTypographyProps={{ fontSize: '18px', color: "text.primary", fontWeight: "bold" }}
                                    secondary={<React.Fragment>
                                        <Typography
                                            sx={{ fontSize: '18px', marginRight: 6 }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Liverpool John Moores University
                                        </Typography>

                                        {'Feb 2023 ‐ Now'}
                                    </React.Fragment>}  ></ListItemText>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <SchoolIcon sx={{ color: "text.primary", width: "30px", height: "30px" }} />
                                </ListItemIcon>
                                <ListItemText primary="B.SC in electronics and communication engineering " primaryTypographyProps={{ fontSize: '18px', color: "text.primary", fontWeight: "bold" }}
                                    secondary={<React.Fragment>
                                        <Typography
                                            sx={{ fontSize: '18px', marginRight: 9 }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Alexandria University, Faculty of Engineering
                                        </Typography>

                                        {'Sep 2015 ‐ Aug 2020'}
                                    </React.Fragment>} ></ListItemText>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="center" flexDirection="column" textAlign="center" my="20px " >
                    <Typography variant='h4' sx={{ mb: "20px", mt: "50px", fontWeight: "bold" }}>
                        Learn more about my:
                    </Typography>

                    <Box display="flex" justifyContent="center" alignItems="center" gap="20px">
                        <Paper elevation={3} sx={{ width: "150px", p: "20px 10px ", cursor: "pointer" }} className={styles.paperLink}>
                            <Link to="skill" spy={true} smooth={true} offset={-50} duration={500} >
                                <Typography variant='h5' sx={{ textAlign: "center" }}>Skills</Typography>
                            </Link>
                        </Paper>
                        <Paper elevation={3} sx={{ width: "150px", p: "20px 10px ", cursor: "pointer" }} className={styles.paperLink}>
                            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} >
                                <Typography variant='h5' sx={{ textAlign: "center" }}>Projects</Typography>
                            </Link>
                        </Paper>
                        <Paper elevation={3} sx={{ width: "150px", p: "20px 10px ", cursor: "pointer" }} className={styles.paperLink}>
                            <Link to="papers" spy={true} smooth={true} offset={-50} duration={500}>
                                <Typography variant='h5' sx={{ textAlign: "center" }}>Papers</Typography>
                            </Link>
                        </Paper>

                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" gap="20px" mt="20px">
                        <Link to="timeline" spy={true} smooth={true} offset={-50} duration={500}>
                            <Paper elevation={3} sx={{ width: "200px", p: "20px 10px ", cursor: "pointer" }} className={styles.paperLink}>
                                <Typography variant='h5' sx={{ textAlign: "center" }}>Work Experience</Typography>
                            </Paper>
                        </Link>
                        <Link href="https://drive.google.com/file/d/104BElFusWYq6HvrSFBAB7fCKLfOo-3zg/view" >
                            <Paper elevation={3} sx={{ width: "150px", p: "20px 10px ", display: "flex", textAlign: "center", justifyContent: "center", cursor: "pointer", alignItems: "center", gap: "5px", }} className={styles.paperLink2}>
                                <AiOutlineFilePdf />
                                <Typography variant='h5' sx={{ textAlign: "center" }}>Resume</Typography>
                            </Paper>
                        </Link>
                    </Box>



                </Box>

            </Container >
        </Box >
    )
}

export default About