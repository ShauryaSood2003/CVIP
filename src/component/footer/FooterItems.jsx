import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Conatiner=styled(Box)`
    margin:6% 8%;
`

const Title=styled(Typography)`
    font-weight:600;
    color:white;
    padding-bottom:30px;
`
const Link=styled(Typography)`
    color:#707070;
    padding:7px 0;
`


const FooterItems=({title,items})=>{
    return(
        <Conatiner>
            <Title>{title}</Title>
            {
                items.map((item,index)=>{
                    return (<Link id={index}>{item}</Link>);
                })
            }    
        </Conatiner>
    );
}
export default FooterItems;