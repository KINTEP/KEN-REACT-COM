import NavBar from "../../components/general/NavBar"
import Nav2 from "../../components/general/Nav2"
import Section1 from "../../components/homepage/Section1"
import Section2 from "../../components/homepage/Section2"
import Section3 from "../../components/homepage/Section3"
import Stack from '@mui/material/Stack';

export default function HomePage() {
  return (
    <Stack>
        <NavBar/>
        <Nav2/>
        <Section1/>
        <Section2/>
        <Section3/>
    </Stack>
  );
}

