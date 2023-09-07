import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const Name=styled(Typography)`
    font-size:42px;
    font-family: 'Gluten', cursive;
    font-weight:800;
    color:#b5053a;
`

const MyName=()=>{
    return(
        <Box>
            <Name>Shaurya</Name>
        </Box>
    );
}
export default MyName;