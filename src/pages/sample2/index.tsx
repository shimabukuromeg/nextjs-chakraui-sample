import { EditIcon, ViewIcon, AttachmentIcon, AddIcon, ChevronLeftIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Spacer, Button, Skeleton, Heading } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';

const Index: NextPage<void> = () => (
  <>
    <Head>
      <title>サンプル1</title>
    </Head>
    <Flex bg='gray.100' w='100vw' h='100vh'>
      <Flex as='header' position='fixed' top={0} width='full' shadow='sm' py={4} px={8}>
        <Box>
          <IconButton aria-label='back' color='black' rounded='full' icon={<ChevronLeftIcon />} />
        </Box>
        <Spacer />
        <Box>
          <Button disabled colorScheme='blue'>
            保存済み
          </Button>
        </Box>
      </Flex>
      <Box mt={'6rem'} mx='auto'>
        <Heading as='h1' size='lg' fontWeight='bold'>
          Title
        </Heading>
        <Flex mt={8}>
          <Box w={'50rem'} bg='white' rounded='md' p={4} shadow='lg'>
            <Skeleton mb={4} h={'1rem'}></Skeleton>
            <Skeleton mb={4} h={'1rem'}></Skeleton>
            <Skeleton mb={4} h={'1rem'}></Skeleton>
            <Skeleton mb={4} h={'1rem'}></Skeleton>
            <Skeleton mb={4} h={'1rem'}></Skeleton>
            <Skeleton mb={4} h={'1rem'}></Skeleton>
            <Skeleton mb={4} h={'1rem'}></Skeleton>
            <Skeleton mb={4} h={'1rem'}></Skeleton>
            <Skeleton mb={4} h={'1rem'}></Skeleton>
          </Box>
          <Box ml={6}>
            <Box bg='white' rounded='full' p={1} shadow='lg'>
              <IconButton
                aria-label='edit'
                bg='gray.300'
                color='white'
                rounded='full'
                mr={1}
                icon={<EditIcon />}
              />
              <IconButton
                aria-label='view'
                bg='white'
                color='gray.400'
                rounded='full'
                icon={<ViewIcon />}
              />
            </Box>
            <Box mt={3}>
              <IconButton
                aria-label='view'
                shadow='lg'
                bg='white'
                color='gray.400'
                rounded='full'
                icon={<AttachmentIcon />}
              />
            </Box>
            <Box mt={3}>
              <IconButton
                aria-label='view'
                shadow='lg'
                bg='white'
                color='gray.400'
                rounded='full'
                icon={<AddIcon />}
              />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Flex>
  </>
);

export default Index;
