
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Container=styled(Box)`
border-radius:15px;
background:white;
padding:8px;
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

const Card=({imageUrl,title,content,ConatinerColor})=>{
    const ImageStyle={
        width:280,
        height:210,
        borderRadius:15
    }
    const TextContainer={
        background:ConatinerColor,
        borderRadius:15,
        padding:10
    }
    return(
        <Container>
            <img src={imageUrl} alt="CoursesImage" style={ImageStyle}></img>
            <Box style={TextContainer}>
                <Title>{title}</Title>
                <Content>{content}</Content>
            </Box>
        </Container>
    )
}
export default Card;