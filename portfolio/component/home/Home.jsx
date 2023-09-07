import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material"
import Card from "../card/Cards";
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import EmojiNatureIcon from '@mui/icons-material/EmojiNature';

const Conatiner=styled(Box)`
   
    background-color:#f8f7f1;
`
const FirstConatiner=styled(Box)`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    padding:5% 7% 0%;
`
const SecondContainer=styled(Box)`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
`  
const ImageStyled=styled('img')({
    width:400,
    height:410,
    margin:"0 3%"
})

const Heading=styled(Typography)`
    font-size:40px;
    font-weight:700;
    color:#eda218;
    width:350px;
`
const Content=styled(Typography)`
    color:#eda218;
    width:300px;
    padding-top:30px;
    line-height:2;
`

const Home=()=>{
    return(
        <Conatiner>
            <FirstConatiner>
                <Heading>Hey there,I'm Shaurya</Heading>
                <Content>I design beautifully simple things,And i love to do that.</Content>
            </FirstConatiner>
            <SecondContainer>
                <Card icon={MilitaryTechIcon} title="Web Designer" content="In Web Dev" ConatinerColor="#6ccf02" ></Card>
                <ImageStyled src="https://i.ibb.co/sb7xjmW/myImage.png" alt="ME"></ImageStyled>
                <Card icon ={EmojiNatureIcon} title="Web Developer" content="1+ year Experience" ConatinerColor="#b702cf"></Card>
            </SecondContainer>
        </Conatiner>
    )
    
}
export default Home;