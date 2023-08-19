import {Box, Typography} from "@mui/material"
import WaterIcon from '@mui/icons-material/Water';
import styled from "@emotion/styled";
import Links from "./Links";
import FooterItems from "./FooterItems";

const Conatiner=styled(Box)`
    margin-top:5%;
    padding:4% 4% 5% 8%;
    background:black;
`
const InnerFlexConatiner=styled(Box)`
    display:flex;
`
const FlexConatiner=styled(Box)`
    display:flex;
    justify-content:space-between;
`

const Message=styled(Typography)`
    width:35%;
    padding-top:8px;
    color:white;
`
const BrandIconStyled=styled(WaterIcon)`
    font-size:59px;
    padding:0 10px;
    color:white;
`

const BrandText=styled(Typography)`
    font-weight:700;
    font-size:40px;
    font-family: 'Lobster', cursive;
    color:white;
`
const StyledHr=styled('hr')({
    width:"97%",
    alignItem:"center",
    marginTop:"3%"
})

const Footer=()=>{
    const edtec=["Live","Bootcamps","Interviews"]
    const Contacts=["Website","Email","Whatsapp"]
    const office=["110098 New Delhi Mall Road,Rohini","+91 8989898989"]
    return(
        <Conatiner>
            <FlexConatiner>

                <InnerFlexConatiner>
                    <BrandIconStyled></BrandIconStyled>
                    <BrandText>EdTech</BrandText>
                </InnerFlexConatiner>

                <Message>Your Future our responsiblity.Not driven by money💲or interested in becoming a mystical unicorn 🦄.</Message>
            </FlexConatiner>
            <StyledHr/>
            <FlexConatiner>
                <Links></Links>
                <InnerFlexConatiner>
                    <FooterItems title="EdTec" items={edtec}></FooterItems>
                    <FooterItems title="ContactUs" items={Contacts}></FooterItems>
                    <FooterItems title="Office" items={office}></FooterItems>
                </InnerFlexConatiner>
            </FlexConatiner>
           
        </Conatiner>
    );
}
export default Footer;