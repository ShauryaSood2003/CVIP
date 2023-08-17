import {Box, Button } from "@mui/material";
import styled from "@emotion/styled";

const Conatiner=styled(Box)`
    display:flex;

`
const Sign=()=>{
    return(
        <Conatiner>
            <Button>Sign in</Button>
            <Button>Sign up</Button>
        </Conatiner>
    );
}
export default Sign;