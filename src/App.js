import './App.css';
import { DragDropContext } from 'react-beautiful-dnd';

const items = [
  { id: 1, content: 'Lorem ipsum' },
  { id: 2, content: 'Lorem ipsum' },
  { id: 3, content: 'Lorem ipsum' },
  { id: 4, content: 'Lorem ipsum' },
  { id: 5, content: 'Lorem ipsum' },
  { id: 6, content: 'Lorem ipsum' },
  { id: 7, content: 'Lorem ipsum' },
  { id: 8, content: 'Lorem ipsum' },
];

function App() {
  return (
    <div className='App'>
      <DragDropContext onDragEnd={() => {}}>
        <div>
          {items.map((item) => (
            <div
              style={{
                padding: '10px 20px',
                margin: '5px auto',
                border: '1px solid black',
                maxWidth: '400px',
              }}
              key={item.id}
            >
              {item.content}
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
}

export default App;
