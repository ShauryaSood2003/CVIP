import styled from "@emotion/styled";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import DataObjectIcon from '@mui/icons-material/DataObject';
import { Box, Typography } from "@mui/material";

const Container=styled(Box)`
    display:flex;
    margin-top:6%;
`
const Flex=styled(Box)`
 display:flex;
 margin:7% 0;
`
const LeftContainer=styled(Box)`
    width:50%;
    margin-left:8%;
    
`

const LeftContainerHeading=styled(Typography)`
    font-size:65px;
    font-family: 'Dancing Script', cursive;
`
const LeftTextContainer=styled(Box)`
    width:60%;
    margin-top:3%;
`

const LeftContainerText=styled(Typography)`
    width:60%:
`
const LeftContainerLiveButton=styled(Typography)`
    padding:10px 20px;
    color:white;
    background:#fa2a05;
    border-radius:15px;
`
const LeftContainerVedioButton=styled(Typography)`
    padding:10px 20px;
   
`
const LeftContainerSponcer=styled(Typography)`
    color:#696868;
    padding:0 5px;
`
const LeftFlex=styled(Box)`
 display:flex;
 padding:0 13px;
`

const RightContainer=styled(Box)`
    margin-left:5%;
    width:50%;
`
const ImageStyled=styled('img')({
    width:"75%",
    height:450
})

const FirstContainer=()=>{
    return(
        <Container>
            <LeftContainer>
                <LeftContainerHeading>Change your life,</LeftContainerHeading>
                <LeftContainerHeading>learn Web Development</LeftContainerHeading>
                <LeftContainerHeading>live</LeftContainerHeading>

                <LeftTextContainer>
                    <LeftContainerText>Live Web/UI/UX bootcamps and online classes to kickstart or accelerate your career</LeftContainerText>
                </LeftTextContainer>

                <Flex>
                    <LeftContainerLiveButton>Live Bootcamps</LeftContainerLiveButton>
                    <LeftContainerVedioButton>Vedio Classes</LeftContainerVedioButton>
                </Flex>

                <Flex>
                    <LeftContainerSponcer style={{padding:"0 25px 0 0"}}>Our partners:</LeftContainerSponcer>
                    <LeftFlex>
                        <DataObjectIcon style={{color:"#696868"}}  fontSize="small"/>
                        <LeftContainerSponcer>CodersCave</LeftContainerSponcer>
                    </LeftFlex>
                    <LeftFlex>
                        <LinkedInIcon style={{color:"#696868"}} fontSize="small"/>
                        <LeftContainerSponcer>LinkedIn</LeftContainerSponcer>
                    </LeftFlex>
                    <LeftFlex>
                        <GoogleIcon style={{color:"#696868"}} fontSize="small"/>
                        <LeftContainerSponcer>Google</LeftContainerSponcer>
                    </LeftFlex>
                   
                    
                </Flex>
            </LeftContainer>
            <RightContainer>
                <ImageStyled src="https://i.ibb.co/XC8df5J/human.png" alt="MainImage"></ImageStyled>
            </RightContainer>
        </Container>
    );
}
export default FirstContainer;