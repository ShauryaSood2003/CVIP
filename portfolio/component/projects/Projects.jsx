import { Box ,Typography} from "@mui/material";
import styled from "@emotion/styled";
import Project from "./Project";

const Container=styled(Box)`
    padding:5% 0 0 8%;
    background:#f8f7f1;
`
const Title=styled(Typography)`
    font-size:35px;
    width:40%;
    font-weight:600;
    color:#b5053a;
`
const Projects=()=>{
    return(
        <Container>
             <Title>Projects</Title>
            
             <Project title="Myntra Clone" img1="/MyntraClone.mp4"  link="http://shauryasood.netlify.app"></Project>
             <Project title="WhatsApp Clone" img1="/Whatsapp.mp4" link="https://google.com"></Project>
        </Container>
    );
}
export default Projects;