import { Box } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

const Index: NextPage<void> = () => (
  <>
    <Head>
      <title>サンプル1</title>
    </Head>

    {/* Chakra UIでの最も基本的なコンポーネントは<Box> div と一緒 */}
    <Box>Hello</Box>

    {/* Styleの付け方 コンポーネントのpropsの値に直接style属性を書くことでスタイリングを可能 */}
    <Box padding='10px' backgroundColor='red'>
      Hello
    </Box>

    {/* styleのショートハンド */}
    <Box p={10} bg='blue'>
      Hello
    </Box>

    {/* px = x方向のpadding / my = y方向のmargin */}
    <Box px={10} my={10} bg='green'>
      Hello
    </Box>
  </>
);

export default Index;
