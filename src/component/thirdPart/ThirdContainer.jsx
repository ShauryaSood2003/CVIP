import styled from "@emotion/styled";
import {Box,Typography} from "@mui/material"
import Category from "./Category";

import BrushIcon from '@mui/icons-material/Brush';
import NatIcon from '@mui/icons-material/Nat';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';

import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Face2Icon from '@mui/icons-material/Face2';

const Container=styled(Box)`
    margin:5% 0 0 8%;
`

const Title=styled(Typography)`
    font-size:35px;
    width:40%;
    font-weight:600;
`
const Content=styled(Typography)`
     width:60%;
     color:#474747;
     margin:3% 0;
`
const FlexConatiner=styled(Box)`
    display:flex;
    width:100%;
`

const ThirdContainer=()=>{
    return(
        <Container>
            <Title>Explore courses by category</Title>
            <Content>Browse top class courses by browsing our category.</Content>
            <FlexConatiner>
                <Category iconColor="#099e8f" icon={BrushIcon} title="Design & Development" content="250+ courses available"></Category>
                <Category iconColor="#630901" icon={NatIcon} title="Marketing & Communication" content="300+ courses available"></Category>
                <Category iconColor="#d65f04" icon={ImportantDevicesIcon} title="Digital Marketing" content="250+ courses available"></Category>
            </FlexConatiner>
            <FlexConatiner>
                <Category iconColor="#d60443" icon={LeaderboardIcon} title="Business & Consulting" content="150+ courses available"></Category>
                <Category iconColor="#bd02aa" icon={AttachMoneyIcon} title="Finance & Management" content="100+ courses available"></Category>
                <Category iconColor="#039645" icon={Face2Icon} title="Self Development" content="400+ courses available"></Category>
            </FlexConatiner>
        </Container>
    );
}
export default ThirdContainer;