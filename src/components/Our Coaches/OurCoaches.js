import "./OurCoachesStyles.css";
import "./OurCoachesData"
import React from 'react'
import OurCoachesData from "./OurCoachesData";
import Mano3 from "../../Assets/Mano3.jfif";
/* import Mano2 from "../../Assets/Mano2.jpeg"; */
import Thiago1 from "../../Assets/Thiago2.jpeg";
import Thiago3 from "../../Assets/Thiago3.jpeg";
import Rui1 from "../../Assets/Rui1.jpeg";
import Rui2 from "../../Assets/Rui2.jpeg";

function OurCoaches() {
    return (
        <div className="ourcoaches">
            <OurCoachesData
                className="coach"
                heading="MANO POLKING |"
                heading1="METHODOLOGY DEVELOPER & MENTOR"
                text="Meet Mano, the current National coach of Thailand, with an extensive coaching career in Asia and a successful career as a football player in Europe. He is the one mentoring and overseeing the training methodology at our training camp, bringing his wealth of experience and unique perspective to help our players reach their full potential."
                listHeading="Experience as a Coach"
                li1="Thailand Head Coach since 2021"
                li2="Ho Chi Minh City Head Coach 2020/2021"
                li3="Bangkok United Head Coach 2014/2020"
                list1Heading="Experience as a Player"
                li5="Darmstadt -Germany"
                li6="Arminia Bielefeld - Germany"
                li7="S.L.Benfica - Portugal"
                img1={Mano3}
                img2="https://pbs.twimg.com/media/FjWDDkcVQAAznmZ?format=jpg&name=medium"
            />
            <OurCoachesData
                className="coach-reverse"
                heading="THIAGO MORA DE OLIVEIRA | HEAD COACH"
                text="Meet Thiago, a former professional footballer who played for several years, including 11 years in Asia. Despite his successful career on the field, Thiago knew that he wanted to stay connected to the sport he loved. That's when he decided to shift his focus to coaching and started a new phase in his career. Today, Thiago is a highly respected football coach with a wealth of knowledge and experience to share."
                listHeading="Experience as a Coach"
                li1="PSG Academy Thailand 2019/2020"
                li2="Arsenal School Thailand 2017/2019"
                li3="Private Lessons since 2017"
                list1Heading="Experience as a Player"
                li5="Thai port FC, Champion of AFF Futsal Club"
                li6="Champion of Dalat Championship in Vietnam and the best player 2010, 5x League"
                img1={Thiago1}
                img2={Thiago3}
            />
            <OurCoachesData
                className="coach"
                heading="RUI VITORINO | HEAD COACH"
                text="Introducing Rui, an experienced football coach with a passion for the game. With a career that started in Portugal and later took him to Asia, Rui has honed his skills and established himself as a respected coach with a wealth of experience. Today, Rui brings his expertise to the field, using his unique perspective and knowledge of the game to guide and inspire his players."
                listHeading="Experience as a Coach"
                li1="Shanghai school football league (ssfl) city elite team U11 boys head coach 2018/2020"
                li2="Head Footbal Coach at Shanghai Figo Football Academy 2015/2017"
                li3="Head Footbal Coach at Sporting Clube de Portugal - Turcifal Academy"
                list1Heading="Qualifications"
                li5="Post Graduation - Technical Director of Football Academies at Lusofona University"
                li6="Certification in Physical training in the Football context at Superior Institute of Educational Sciences"
                img1={Rui1}
                img2={Rui2}
            />
        </div>
    )
}

export default OurCoaches;