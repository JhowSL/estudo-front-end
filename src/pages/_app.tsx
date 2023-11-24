import { Box, ChakraProvider, Input, useColorMode, Center, Button, extendTheme, CSSReset, ColorModeProvider } from '@chakra-ui/react';
import { Login } from './services/Services';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider options={{ useSystemColorMode: true }}>
        <CSSReset />
        <MyComponent />
      </ColorModeProvider>
    </ChakraProvider>
  );
};

const MyComponent = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      minHeight='100vh'
      backgroundColor={colorMode === 'light' ? 'gray.200' : 'gray.800'}
      padding='25px'
      color={colorMode === 'light' ? 'black' : 'white'}
    >
      <Box
        backgroundColor={colorMode === 'light' ? 'white' : 'gray.700'}
        borderRadius='10px'
        padding='15px'
        boxShadow='md'
      >
        <Center>
          <h1>Faça Login</h1>
        </Center>
        <Input
          placeholder='Digite seu email'
          variant='outline'
          borderColor={colorMode === 'light' ? 'gray.400' : 'gray.600'}
        />
        <Input
          placeholder='Digite sua senha'
          variant='outline'
          borderColor={colorMode === 'light' ? 'gray.400' : 'gray.600'}
          marginTop='10px'
        />
        <Button
        onClick={Login}
          size='sm'
          width='100%'
          margin='2px'
          backgroundColor={colorMode === 'light' ? 'blue.500' : 'blue.300'}
          _hover={{
            backgroundColor: colorMode === 'light' ? 'blue.300' : 'blue.500',
          }}
        >
          Login
        </Button>
        <Button
          position='fixed'
          bottom='20px'
          right='20px'
          onClick={toggleColorMode}
          backgroundColor='transparent'
          color={colorMode === 'light' ? 'black' : 'white'}
          _hover={{
            backgroundColor: 'transparent',
            color: colorMode === 'light' ? 'gray.800' : 'gray.200',
          }}
        >
          Alternar Tema
        </Button>
      </Box>
    </Box>
  );
};

export default App;