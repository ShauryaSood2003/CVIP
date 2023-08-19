import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Container=styled(Box)`
    display:flex;
    align-items:center;
    margin:3% 10% 3% 0;
    background:white;
    width:300px;
    border-radius:10px;
    &:hover{
        box-shadow:5px 5px 10px grey;
        width:305px;
        
    }
`


const InnerContainer=styled(Box)`
 padding:13px;
`
const Title=styled(Typography)`
    font-size:17px;
    font-weight:600;
   
    padding:5px 0 10px 6px;
`
const Content=styled(Typography)`
    color:#575757;
    font-size:13px;
    padding-left:6px;
`
const ContainerIcon=styled(Box)`
   background:#d7f0fa;
   width:40%;
   height:100%;
   text-align:center;
`

const Category=({title,content,iconColor,icon:Icon})=>{
    const iconStyle={
        color:iconColor,
        paddingTop:33,
        fontSize:"40px"
    }
    return(
        <Container>
            <ContainerIcon>
                <Icon style={iconStyle}></Icon>
            </ContainerIcon>
            
            <InnerContainer>
                <Title>{title}</Title>
                <Content>{content}</Content>
            </InnerContainer>
        </Container>
    )
}
export default Category;