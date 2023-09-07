import { Box,Typography } from "@mui/material";
import styled from "@emotion/styled";

const Container=styled(Box)`
    display:flex;
    justify-content:space-between;
    height:90px;
    width:240px;
    border-radius:15px;
    background:#f2e88f;
    margin:40px 0;
    padding:10px;
    box-shadow:8px 10px 2px #949494;
    
`

const Title=styled(Typography)`
    font-size:17px;
    font-weight:600;
    color:white;
    padding:5px 0 10px 6px;
`
const Content=styled(Typography)`
    color:white;
    font-size:13px;
    padding-left:6px;
`


const Card=({icon:Icon,title,content,ConatinerColor})=>{

    const IconStyle={
        fontSize:"40px",
        color:ConatinerColor,
        paddingLeft:25
    }
    const IconConatiner={
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"
    }
    const TextContainer={
        background:ConatinerColor,
        borderRadius:15,
        padding:5
    }

    return(
        <Container>
           
            <Box style={IconConatiner}>
                <Icon style={IconStyle}></Icon>
            </Box>
             <Box style={TextContainer}>
                <Title>{title}</Title>
                <Content>{content}</Content>
            </Box>
           
        </Container>
    )
}
export default Card;