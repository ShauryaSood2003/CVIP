import styled from "@emotion/styled";
import { Box } from "@mui/material"

const Conatiner=styled(Box)`
    margin:2% 2%;
`

const Title=styled('a')({
    color:"#eda218",
    fontSize:28,
    textDecoration:"none",
    fontWeight:700,
})
   



const Link=styled('a')({
    fontSize:20,
    textDecoration:"none",
    color:"#02b83e"
});

const Project=({title,img1,link})=>{
    const styledVedio={
        width:"90%",
        padding:"3% 0"
    }
    return(
        <Conatiner>
            <Title href={link} target="_blanck">{title}</Title>
            <Box>
                <Link href={link} target="_blanck">Go to Website ↗️</Link>
            </Box>
            <video controls style={styledVedio}>
                <source src={process.env.PUBLIC_URL+img1} type="video/mp4"></source>
            </video>
            
        </Conatiner>
    )
}
export default Project;