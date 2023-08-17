import WaterIcon from '@mui/icons-material/Water';
import { Box,Typography } from '@mui/material';
import styled from "@emotion/styled";

const Conatiner=styled(Box)`
    display:flex;

`

const Brand=()=>{
    return(
        <Conatiner>
            <WaterIcon></WaterIcon>
            <Typography>EdTech</Typography>
        </Conatiner>
    );
}
export default Brand;