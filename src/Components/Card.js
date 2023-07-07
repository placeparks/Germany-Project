import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
  } from '@chakra-ui/react';
  import avatar from './avatar.png';
  import logo from './logo.jpg';

  
  export default function SocialProfileSimple() {
    const handleButtonClick = () => {
        window.location.href = 'https://64a85057ab54090f4fa44223--heartfelt-starburst-bbaf9e.netlify.app/';
      };
    return (
      <Center py={6}>
        <Box
          maxW={'300px'}
          w={'80%'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}>
            <img src={logo} alt="logo" />
            <h3 className="card-title" style={{ marginTop: '2rem' }}>Willkommen<br/>Zuhause</h3>
          <Avatar
            size={'sm'}
            src={avatar}
            style={{ width: '100px', height: '100px' }}
            alt={'Avatar Alt'}
            mb={4}
            pos={'relative'}
            _after={{
              content: '""',
              w: 4,
              h: 4,
              bg: 'green.300',
              border: '2px solid white',
              rounded: 'full',
              pos: 'absolute',
              bottom: 0,
              right: 3,
            }}
          />

  
          <Stack mt={8} direction={'row'} spacing={4} style={{paddingBottom:"3%"}}>
          <Button
        flex={1}
        fontSize="sm"
        rounded="full"
        _focus={{
          bg: 'gray.200',
        }}
        onClick={handleButtonClick}
      >
        Das bin ich nicht
      </Button>
          
          </Stack>
        </Box>
      </Center>
    );
  }