import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import List from './List';

const reorderItems = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const App = () => {
  const [state, setState] = useState({
    items: [
      {
        id: '1',
        content: 'Lorem ipsum 1',
      },
      {
        id: '2',
        content: 'Lorem ipsum 2',
      },
      {
        id: '3',
        content: 'Lorem ipsum 3',
      },
      {
        id: '4',
        content: 'Lorem ipsum 4',
      },
      {
        id: '5',
        content: 'Lorem ipsum 5',
      },
    ],
  });

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const items = reorderItems(
      state.items,
      result.source.index,
      result.destination.index
    );

    setState({ items });
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='list'>
        {(provided) => {
          return (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <List items={state.items} />
              {provided.placeholder}
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};

export default App;
