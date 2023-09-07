import HeaderOptions from "./HeaderItems/HeaderOptions"
import MyName from "./HeaderItems/MyName"
import {Box} from "@mui/material"
import styled from "@emotion/styled"

const Container=styled(Box)`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background:#f8f7f1;
    flex-wrap: wrap;
    padding:2% 5%;
`

const Header=()=>{
    return(
        <Container>
            <MyName></MyName>
            <HeaderOptions></HeaderOptions>
        </Container>
    )
}
export default Header;