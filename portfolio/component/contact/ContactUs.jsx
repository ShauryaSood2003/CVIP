import styled from "@emotion/styled";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const { Box, Typography } = require("@mui/material")

const Container=styled(Box)`
    background:black;
    padding:3% 8%;
`
const Title=styled(Typography)`
    color:white;
    font-size:34px;

`
const FlexContainer=styled(Box)`
    display:flex;
    justify-content:center;
`

const Item=styled('a')`
    padding:"3% 5%"
`

const ContactUs=()=>{
    return(
        <Container>
            <Title>Contact Us</Title>
            <FlexContainer>
                <Item href="mailto:shauryasood293@gmail.com" target="_blanck"><EmailIcon style={{ fontSize: 30,color:"white",padding:"30px 40px"}}/></Item>
                <Item href="http://www.linkedin.com/in/shaurya-sood-87b968208" target="_blanck"><LinkedInIcon style={{ fontSize: 30,color:"white",padding:"30px 40px"}}/></Item>
                <Item href="https://github.com/ShauryaSood2003" target="_blanck"><GitHubIcon style={{ fontSize: 30,color:"white",padding:"30px 40px"}}/></Item>
            </FlexContainer>
            <Typography style={{color:"white",textAlign:"center",paddingTop:"37px"}}>©️ Shaurya Sood</Typography>
        </Container>
    )
}
export default ContactUs;