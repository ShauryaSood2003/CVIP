import styled from "@emotion/styled";
import {Box,Typography} from "@mui/material"
import IndivisualSkill from "./IndivisualSkill";

import CodeIcon from '@mui/icons-material/Code';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

import Brightness7Icon from '@mui/icons-material/Brightness7';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';

import ApiIcon from '@mui/icons-material/Api';
import DataObjectIcon from '@mui/icons-material/DataObject';
import JoinInnerIcon from '@mui/icons-material/JoinInner';

const Container=styled(Box)`
    padding:5% 0 0 8%;
    background:#e8f7d5;
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
    flex-wrap:wrap;
    
`

const Skill=()=>{
    return(
        <Container>
            <Title>Skills</Title>
            <Content>Skills gained by working on multiple projects</Content>
            <FlexConatiner>
                <IndivisualSkill iconColor="#099e8f" icon={CodeIcon} title="HTML" ></IndivisualSkill>
                <IndivisualSkill iconColor="#630901" icon={CssIcon} title="CSS" ></IndivisualSkill>
                <IndivisualSkill iconColor="#d65f04" icon={JavascriptIcon} title="JAVA SCRIPT" ></IndivisualSkill>
            </FlexConatiner>
            <FlexConatiner>
                <IndivisualSkill iconColor="#d60443" icon={Brightness7Icon} title="NODE JS" ></IndivisualSkill>
                <IndivisualSkill iconColor="#bd02aa" icon={AutoAwesomeMotionIcon} title="EXPRESS JS" ></IndivisualSkill>
                <IndivisualSkill iconColor="#039645" icon={AutoAwesomeMosaicIcon} title="EJS" ></IndivisualSkill>
            </FlexConatiner>
            <FlexConatiner>
                <IndivisualSkill iconColor="#630901" icon={ApiIcon} title="REACT JS" ></IndivisualSkill>
                <IndivisualSkill iconColor="#d65f04" icon={DataObjectIcon} title="MONGO DB" ></IndivisualSkill>
                <IndivisualSkill iconColor="#d60443" icon={JoinInnerIcon} title="SQL" ></IndivisualSkill>
            </FlexConatiner>
        </Container>
    );
}
export default Skill;