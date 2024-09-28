
import { Box, styled, Typography, Link } from '@mui/material';
import { Email } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Banner = styled(Box)`
    background-image: url(https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    width: 100%;
    height: 50vh;
    background-position: center ;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner/>
            <Wrapper>
                <Typography variant="h3">Prarthan P</Typography>
                <Text variant="h5">I'm a Full Stack Developer from Bangalore. <br />
                Dynamic Full Stack Developer with problem-solving skills and collaborative mindset, adept at both client-side and server-side development. 
                Committed to team projects, embracing new technologies, and creating scalable applications while advancing personal growth and company objectives.
                </Text>
                <Text variant="h5">
                    Reach out to me on
                    <Link href="https://www.linkedin.com/in/prarthan-p/" color="inherit" target="_blank">
                        <LinkedInIcon/>
                    </Link>
                    or send me an Email 
                    <Link href="mailto:prarthan8@gmail.com" target="_blank" color="inherit">
                        <Email />
                    </Link>
                </Text>
            </Wrapper>
        </Box>
    )
}

export default About;