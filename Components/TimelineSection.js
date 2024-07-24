import React from 'react'
import {
    Box, Tabs, Tab, Typography, LinkTab, Grid, Button, Container, Paper, List, ListItem, ListItemText, ListItemIcon, Avatar
} from '@mui/material'
import styles from '../src/styles/Home.module.css'
import { ColorModeContext } from '../public/theme'
import { styled, useTheme, alpha } from '@mui/material/styles';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import { FcGoogle } from 'react-icons/fc'
import Image from 'next/image'
import alexunversity from '../public/assets/download.jpeg'
import { NoEncryption } from '@mui/icons-material';
import knuphoto from '../public/assets/timeline/knu.png'
import openaiphoto from '../public/assets/timeline/OpenAI_Logo_(2).svg.png'
import perphoto from '../public/assets/timeline/download.jpeg'
import bergenphoto from '../public/assets/timeline/Uni-Bergen-emblem.png'
import virufyphoto from '../public/assets/timeline/virufy-logo-white-brackground-small.webp'
import Liverpoolphoto from '../public/assets/timeline/BGSv3kJng1H9mI284fawGs-myAkwLMBW.png'
import Timelinemobileview from './Timelinemobileview';

function TimelineSection() {
    const colorMode = React.useContext(ColorModeContext);
    const theme = useTheme();
    return (
        <Box id="timeline" py="60px">
            <Container>
                <Typography variant='h2' sx={{ textAlign: "center", fontWeight: "bold" }}>Timeline</Typography>
                <Typography variant='h6' sx={{ textAlign: "center" }}>A short summary of my work experience..</Typography>
                <Timeline position="alternate" sx={{ my: 5, display: { xs: "none", sm: "block" } }}>
                    <TimelineItem>
                        <TimelineSeparator >
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "15px 5px", alighItems:"contain", justifyContent:"center" }}>
                                <Image
                                    src={knuphoto}
                                    alt="Picture of the author"
                                    width = {200}
                                    height = {200}
                                />
                            </TimelineDot>
                            <TimelineConnector sx={{ height: "100px" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Sep 2023 ‐ Now</Typography>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>AI Research Scientist</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                OpenAI
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>Daegu, South Korea</Typography>
                            <Typography variant='h6'>
                                <ul>
                                    <li>Reduce potential security threats by researching and implementing few-shot and meta-learning techniques to train an
anomaly detection system for surveillance aimed at identifying illegal actions.</li>
                                    <li>Collaborate on multiple surveillance projects with Korean research institutes and private companies to develop
innovative technologies and optimize existing surveillance systems.</li>
                                </ul></Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator >
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "15px 5px" }}>
                                <Image
                                    src={openaiphoto}
                                    alt="Picture of the author"
                                    width={130}
                            
                                />
                            </TimelineDot>
                            <TimelineConnector sx={{ height: "100px" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Nov 2022 ‐ Sep 2023</Typography>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning Developer</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                OpenAI
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>US - Remote</Typography>
                            <Typography variant='h6'>
                                <ul>
                                    <li>Ensured high-quality outputs and results by working closely with approx. 10 AI trainers and 5 LLM prompt engineers to
improve the model resilience against hallucinations and factual inaccuracies.</li>
                                    <li>Worked on the Reinforcement Learning Human Feedback models.</li>
                                </ul></Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator >
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "11px 5px" }}>
                                <Image
                                    src={Liverpoolphoto}
                                    alt="Picture of the author"
                                    width={110}

                                />
                            </TimelineDot>
                            <TimelineConnector sx={{ height: "80px" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Feb 2023 ‐ Now</Typography>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>M.SC in computing and information systems</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                Liverpool John Moores University
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>Liverpool - Remote</Typography>
                            <Typography variant='h6'>
                                • Topics: Computer Systems, Software Development.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "10px 0px" }}>
                                <Image
                                    src={perphoto}
                                    alt="Picture of the author"
                                    width={130}
                                />
                            </TimelineDot>
                            <TimelineConnector sx={{ height: "250px" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Jan 2022 ‐ Jan 2023</Typography>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Lead Data Scientist</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                P.E.R PARTNERS
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>UK ‐ Remote</Typography>
                            <Typography variant='h6' sx={{ textAlign: "start" }} >
                                <ul>
                                    <li>Lead a team of four data scientists where I was responsible for developing the company’s
                                        flagship product, Digital Eye, alongside other products such as Drug Interaction Checker.</li>
                                    <li>Digital Eye is based on a deep learning model for digitizing handwritten documents</li>
                                    <li>Carried out research and built the core understanding of the company performance metrics
                                        to qualitatively inform and interpret models</li>
                                    <li>Was responsible for supporting the growth and professional development of the team.</li>
                                </ul>

                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "10px 0px" }}>
                                <Image
                                    src={perphoto}
                                    alt="Picture of the author"
                                    width={130}

                                />
                            </TimelineDot>
                            <TimelineConnector sx={{ height: "100px" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>July 2021 ‐ Jan 2022</Typography>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Senior Data Scientist</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                P.E.R PARTNERS
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>UK ‐ Remote</Typography>
                            <Typography variant='h6' >
                                Worked on designing machine learning models for a variety of products in the healthcare sector.
                                For example, SKU demand forecasting for drug‐distributing companies.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "6px 4px" }}>
                                <Image
                                    src={bergenphoto}
                                    alt="Picture of the author"
                                    width={140}

                                />
                            </TimelineDot>
                            <TimelineConnector sx={{ height: "180px" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Dec 2020 ‐ July 2021</Typography>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning Research Assistant</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                UNiVERSiTY OF BERGEN
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>Bergen, Norway ‐ Remote</Typography>
                            <Typography variant='h6' sx={{ textAlign: "start" }}>
                                <ul>
                                    <li>Worked on a research project to create a deep learning model to detect gene‐gene
                                        interactions from gene expression data.</li>
                                    <li>Used findr tool to preprocess yeast gene expressions.</li>
                                    <li> Responsible for designing, training, and evaluating the performance of the deep learning model.</li>
                                </ul>

                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "40px 13px" }}>
                                <Image
                                    src={virufyphoto}
                                    alt="Picture of the author"
                                    width={120}
                                />
                            </TimelineDot>
                            <TimelineConnector sx={{ height: "250px" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>March 2021 ‐ June 2021</Typography>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning Team Lead</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                ViRUFY
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>San Francisco, US ‐ Remote</Typography>
                            <Typography variant='h6' sx={{ textAlign: "start" }}>
                                <ul>
                                    <li>Was responsible for all phases of deploying machine learning models in production, deciding on
                                        performance, fine‐tuning the model on clinical datasets, Testing APIs, etc.</li>
                                    <li>Involved in making deals with hospitals to gather, clean, and standardize clinical datasets.</li>
                                    <li>Helped the machine learning team to achieve their potential and meet up the organization standards
                                        and follow deadlines and guidelines.</li>
                                </ul>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", overflow: "hidden", border: "2px solid #bdbdbd", padding: "40px 13px" }}>
                                <Image
                                    src={virufyphoto}
                                    alt="Picture of the author"
                                    width={120}

                                />
                            </TimelineDot>
                            <TimelineConnector sx={{ height: "350px" }} />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Oct 2020 ‐ Feb 2021</Typography>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>Machine Learning Engineer</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                ViRUFY
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>San Francisco, US ‐ Remote</Typography>
                            <Typography variant='h6' sx={{ textAlign: "start" }}>
                                <ul><li>Pre‐process and extract audio features from coughing audio files from large clinical and
                                    crowdsourced datasets.</li>
                                    <li>Worked on the design and the implementation of machine learning models for automated
                                        detection of respiratory diseases from speech and cough audio files.</li>
                                    <li> Thorough and comparative analysis of SOTA deep learning models for audio classification
                                        and automated detection of respiratory diseases.</li>
                                    <li> Contributed to design the state of the art deep learning model in detecting COVID‐19
                                        from coughing audio files from COUGHVID crowdsourced dataset.the deep learning model.</li>
                                </ul>


                            </Typography>
                        </TimelineContent>
                    </TimelineItem>

                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineConnector />
                            <TimelineDot color="primary" variant="outlined" sx={{ width: "150px", height: "150px", overflow: "hidden", border: "2px solid #bdbdbd", padding: " 20px 33px" }}>
                                <Image
                                    src={alexunversity}
                                    alt="Picture of the author"
                                    width={80}
                                // height={130}
                                />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{ py: '12px', px: 2 }}>
                            <Typography variant='subtitle1' sx={{ color: "text.secondary" }}>Sep 2015 ‐ Aug 2020</Typography>
                            <Typography variant='h5' sx={{ fontWeight: "bold" }}>B.SC in electronics and communication engineering</Typography>
                            <Typography variant="h4" component="span" sx={{ color: "secondary.main", fontWeight: "bold" }}>
                                Faculty of Engineering
                            </Typography>
                            <Typography variant='h6' sx={{ fontWeight: "bold" }}>Alexandria</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>




                {/* mobile view */}
                <Timelinemobileview />




            </Container >
        </Box >

    )
}

export default TimelineSection
