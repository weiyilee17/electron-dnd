import { Droppable, Draggable } from '@hello-pangea/dnd';

import { TRow, TWidget } from '@/type/dashboard.types';

import { cn } from '../util/cn';
import WidgetList from './widgets-list';

function Row({ row, widgets, index }: { row: TRow; widgets: TWidget[]; index: number }) {
  return (
    <Draggable
      draggableId={row.id}
      index={index}
    >
      {(provided) => (
        <div
          className='m-2 border border-gray-300 border-solid rounded-sm basis-full bg-white'
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <h3
            className='p-2'
            {...provided.dragHandleProps}
          >
            {row.title}
          </h3>
          <Droppable
            droppableId={row.id}
            direction={matchMedia('(min-width: 640px)').matches ? 'horizontal' : 'vertical'}
            type='widget'
          >
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                // min-height preventing rows with 0 widgets have 0 height
                className={cn('p-2 bg-inherit transition-colors flex flex-col sm:flex-row gap-4 min-h-28', {
                  'bg-sky-400': snapshot.isDraggingOver,
                })}
              >
                <WidgetList widgets={widgets} />
                {/* used to create space during drop when needed */}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Row;
