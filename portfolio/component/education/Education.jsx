
import styled from "@emotion/styled";
import {Box,Typography} from "@mui/material"
import IndivisualEdu from "./IndivisualEdu";
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const Container=styled(Box)`
    padding:5% 0 0 8%;
    background:#e8f7d5;
`

const Title=styled(Typography)`
    font-size:35px;
    width:40%;
    font-weight:600;
`

const FlexConatiner=styled(Box)`
    display:flex;
    width:100%;
    flex-wrap:wrap;
    
`

const Education=()=>{
    return(
        <Container>
            <Title>Education</Title>
           
            <FlexConatiner>
                <IndivisualEdu title="B.Tech (CSE)" institute="Dr Akhilesh Das Gupta Institute of Technology" iconColor="#eb0960" icon={LibraryBooksIcon} time="2021 - 2025"></IndivisualEdu>
                <IndivisualEdu title="School" institute="DL DAV MODEL SCHOOL" iconColor="#02d6bd" icon={SchoolIcon} time="2009 - 2021"></IndivisualEdu>
            </FlexConatiner>
           
        </Container>
    );
}
export default Education;