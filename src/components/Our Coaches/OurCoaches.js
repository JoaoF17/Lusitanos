import "./OurCoachesStyles.css";
import "./OurCoachesData"
import React from 'react'
import OurCoachesData from "./OurCoachesData";
import Mano3 from "../../Assets/Mano3.jfif";
import Thiago1 from "../../Assets/Thiago1.jpeg";
import Thiago3 from "../../Assets/Thiago3.jpeg";
import Rui1 from "../../Assets/Rui1.jpeg";
import Rui2 from "../../Assets/Rui2.jpeg";
import Joao1 from "../../Assets/joao1.jpg";
import Joao2 from "../../Assets/joao2.jpeg";
import Renato1 from "../../Assets/renato1.jpeg";
import Renato2 from "../../Assets/renato2.jpeg";

/* drop down */
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function OurCoaches() {
    return (
        <div className="ourcoaches" >
            <OurCoachesData
                className="coach"
                heading="MANO POLKING |"
                heading1="METHODOLOGY DEVELOPER & MENTOR"
                text="Meet Mano, the current National coach of Thailand, with an extensive coaching career in Asia and a successful career as a football player in Europe. He is the one mentoring and overseeing the training methodology at our training camp, bringing his wealth of experience and unique perspective to help our players reach their full potential."
                
                img1={Mano3}
                img2="https://pbs.twimg.com/media/FjWDDkcVQAAznmZ?format=jpg&name=medium"
            />
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography style={{ fontWeight: "bold", fontSize: 20 }}>Experience & Qualifications</Typography>
                </AccordionSummary>
                <AccordionDetails style={{maxHeight: "400px", overflow: "auto"}}>
                    <Typography>
                        <OurCoachesData
                            listHeading="Experience as a Coach"
                            li1="Thailand Head Coach since 2021"
                            li2="Ho Chi Minh City Head Coach 2020/2021"
                            li3="Bangkok United Head Coach 2014/2020"
                            list1Heading="Experience as a Player"
                            li5="Darmstadt -Germany"
                            li6="Arminia Bielefeld - Germany"
                            li7="S.L.Benfica - Portugal"
                        />
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <OurCoachesData
                className="coach-reverse"
                heading="RUI VITORINO | TECHNICAL DIRECTOR"
                text="Introducing Rui, an experienced football coach with a passion for the game. With a career that started in Portugal and later took him to Asia, Rui has honed his skills and established himself as a respected coach with a wealth of experience. Today, Rui brings his expertise to the field, using his unique perspective and knowledge of the game to guide and inspire his players."
                img1={Rui1}
                img2={Rui2}
            />
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography style={{ fontWeight: "bold", fontSize: 20 }}>Experience & Qualifications</Typography>
                </AccordionSummary>
                <AccordionDetails style={{maxHeight: "400px", overflow: "auto"}}>
                <Typography>
                    <OurCoachesData
                        listHeading="Experience as a Coach"
                        li1="Shanghai school football league (ssfl) city elite team U11 boys head coach 2018/2020"
                        li2="Head Footbal Coach at Shanghai Figo Football Academy 2015/2017"
                        li3="Head Footbal Coach at Sporting Clube de Portugal - Turcifal Academy"
                        list1Heading="Qualifications"
                        li5="Post Graduation - Technical Director of Football Academies at Lusofona University"
                        li6="Bachelor Degree Sports Science - Major in Physical Education, Minor in Sports Training (Football) at Faculty of Human Kinetics - Technical University of Lisbon"
                    />
                </Typography>
                </AccordionDetails>
            </Accordion>

            <OurCoachesData
                className="coach"
                heading="THIAGO MORA DE OLIVEIRA | COACH"
                text="Meet Thiago, a former professional footballer who played for several years, including 11 years in Asia. Despite his successful career on the field, Thiago knew that he wanted to stay connected to the sport he loved. That's when he decided to shift his focus to coaching and started a new phase in his career. Today, Thiago is a highly respected football coach with a wealth of knowledge and experience to share."
                img1={Thiago1}
                img2={Thiago3}
            />
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography style={{ fontWeight: "bold", fontSize: 20 }}>Experience & Qualifications</Typography>
                </AccordionSummary>
                <AccordionDetails style={{maxHeight: "400px", overflow: "auto"}}>
                <Typography>
                    <OurCoachesData
                        listHeading="Experience as a Coach"
                        li1="PSG Academy Thailand 2019/2020"
                        li2="Arsenal School Thailand 2017/2019"
                        li3="Private Lessons since 2017"
                        list1Heading="Experience as a Player"
                        li5="Thai port FC, Champion of AFF Futsal Club"
                        li6="Champion of Dalat Championship in Vietnam and the best player 2010, 5x League Champion"
                    />
                </Typography>
                </AccordionDetails>
            </Accordion>

            <OurCoachesData
                className="coach-reverse"
                heading="JOSE RENATO CARVALHO | COACH"
                text="Meet Renato, a former professional footballer with a rich playing history in Austria and Switzerland. Now, as a dedicated coach, he's passionate about sharing his wealth of knowledge and love for the game with the next generation of football enthusiasts."
                img1={Renato1}
                img2={Renato2}
            />
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography style={{ fontWeight: "bold", fontSize: 20 }}>Experience & Qualifications</Typography>
                </AccordionSummary>
                <AccordionDetails style={{maxHeight: "400px", overflow: "auto"}}>
                <Typography>
                    <OurCoachesData
                        listHeading="Experience as a Coach"
                        li1="Academy - Arsenal Soccer School"
                        li2="The American International School Bankok"
                        li3="Samut Prakan C. Goalkeeper coach 2018 - 2022/2023"
                        li4="Bangkok Patana"
                        list1Heading="Experience as a Player"
                        li5="Fc. Tirol - Austria"
                        li6="Fc Lugano - Switzerland"
                    />
                </Typography>
                </AccordionDetails>
            </Accordion>

            <OurCoachesData
                className="coach"
                heading="JOAO FERNANDES | COACH"
                text="Joao, a passionate football enthusiast who has dedicated over a decade to playing the beautiful game in his home country, Portugal. With his wealth of experience and expertise, he has transitioned into coaching and has spent the last three years sharing his knowledge with children. Joao's love for the sport is contagious, and he is committed to nurturing young talents and helping them develop their skills both on and off the pitch."
                img1={Joao1}
                img2={Joao2}
            />
            <Accordion>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography style={{ fontWeight: "bold", fontSize: 20 }}>Experience & Qualifications</Typography>
                </AccordionSummary>
                <AccordionDetails style={{maxHeight: "400px", overflow: "auto"}}>
                <Typography>
                    <OurCoachesData
                        listHeading="Experience as a Coach"
                        li1="Harrow Thailand 2019/2020"
                        li2="Seixal 2013/2015"
                        list1Heading="Experience as a Player"
                        li5="Seixal FC."
                    />
                </Typography>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

export default OurCoaches;