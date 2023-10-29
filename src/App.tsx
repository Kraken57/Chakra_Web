import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Column from './components/Column';
import DarkModeIconButton from './components/DarkModeIconButton';
import { ColumnType } from './utils/enums';

function App() {
  return (
    <main>
      <Heading
        fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
        fontWeight="bold"
        textAlign="center"
        color="primary.500"
        mt={8}
      >
        Welcome! Create! Plan!
      </Heading>
      <DarkModeIconButton position="absolute" top={0} right={2} />
      <DndProvider backend={HTML5Backend}>
        <Container
          maxWidth={{ base: 'container.sm', md: 'container.xl' }}
          px={4}
          py={10}
        >
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
            {Object.values(ColumnType).map((column, index) => (
              <Column key={index} column={column} />
            ))}
          </SimpleGrid>
        </Container>
      </DndProvider>
    </main>
  );
}

export default App;
