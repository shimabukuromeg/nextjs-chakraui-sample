import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

const MyApp: NextPage<AppProps> = ({ Component }) => {
  return (
    <ChakraProvider>
      <Component />
    </ChakraProvider>
  );
};

export default MyApp;
