import styled from "@emotion/styled";
import {Box, Typography,Button} from "@mui/material"
import Card from "./cards/Card";

const Container=styled(Box)`
    background:#d7f0fa;
    padding:2% 8%;
    margin:3% 0;
    border:5px solid white;
    border-radius:10px;
    
`
const Text=styled(Typography)`
    font-size:35px;
    
    width:40%;
    font-weight:600;
`

const ButtonStyled=styled(Button)`
    padding:10px 20px;
    color:white;
    background:#fa2a05;
    border-radius:15px;
    margin-top:3%;

    &:hover{
        background:#f73f1e;
    }
`
const InnerConatiner=styled(Box)`
    display:flex;
    justify-content:space-between;
    margin-top:5%;
`

const SecondContainer=()=>{
    return(
        <Container>
            <Text>Accelearate your career in Web Dev bootcamp</Text>
            <ButtonStyled>Live Bootcamp</ButtonStyled>

            <InnerConatiner>
                <Card title="Web Devlopment" ConatinerColor="#fc0d45" content="Jan 11 - Feb 11" imageUrl="https://images.unsplash.com/photo-1517518295033-d5ab8ca078cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbXB1dGVyJTIwc3lzdGVtfGVufDB8fDB8fHww&w=1000&q=80"></Card>
                <Card title="Designing Bootcamp" ConatinerColor="#fa652f" content="Mar 20 - Apr 20" imageUrl="https://www.forbes.com/advisor/wp-content/uploads/2022/06/UX_designer.jpeg.jpg"></Card>
                <Card title="Data Structure" ConatinerColor="#34c906" content="Apr 25 - May 25" imageUrl="https://www.codingdsa.com/static/pages/assets/img/gallery/data_structures_algorithms.jpg"></Card>
                <Card title="Writing Bootcamp" ConatinerColor="#02998a" content="July 15 - sep 15" imageUrl="https://girlpowertalk.com/wp-content/uploads/2022/01/Writing-Bootcamp-banner-updated.png"></Card>
            </InnerConatiner>

        </Container>
    );
}
export default SecondContainer;