
import { Box } from '@mui/material';
import Header from './component/header/Header';
import Home from './component/home/Home';
import Skill from './component/skills/Skill';
import Projects from './component/projects/Projects';
import Education from './component/education/Education';
import ContactUs from './component/contact/ContactUs';


function App() {
  return (
    <Box>
      <Header></Header>
      <Home></Home>
      <Skill></Skill>
      <Projects></Projects>
      <Education></Education>
      <ContactUs></ContactUs>
    </Box>
    
  );
}

export default App;
