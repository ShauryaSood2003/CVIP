import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const FlexConatiner=styled(Box)`
    display:flex;
    & > * {
        color:white;
        padding:8px;
        &:hover{
            color:#707070;
        }
    }
`
const Text=styled(Typography)`
    color:#707070;
    padding:0 10px 20px;
`
const Conatiner=styled(Box)`
    margin:2%;
`

const Links=()=>{
    return(
        <Conatiner>
            <Text>Shaurya@EdTec.com</Text>
            <FlexConatiner>
                <TwitterIcon></TwitterIcon>
                <LinkedInIcon></LinkedInIcon>
                <InstagramIcon></InstagramIcon>
                <FacebookIcon></FacebookIcon>
            </FlexConatiner>
        </Conatiner>
    );
}
export default Links;