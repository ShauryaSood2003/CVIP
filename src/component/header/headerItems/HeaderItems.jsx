import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Conatiner=styled(Box)`
    display:flex;

`

const HeaderItems=()=>{
    return(
        <Conatiner>
            <Typography>Home</Typography>
            <Typography>About</Typography>
            <Typography>Courses</Typography>
            <Typography>Services</Typography>
        </Conatiner>
    );
}
export default HeaderItems;