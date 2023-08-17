import Brand from "./headerItems/Brand";
import HeaderItems from "./headerItems/HeaderItems";
import Sign from "./headerItems/Sighn";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
const Conatiner=styled(Box)`
    display:flex;
    justify-content:space-between;
    margin:2.6% 3%;
`

const Header=()=>{
    return(
        <Conatiner>
            <Brand></Brand>
            <HeaderItems></HeaderItems>
            <Sign></Sign>
        </Conatiner>
    );
}
export default Header;