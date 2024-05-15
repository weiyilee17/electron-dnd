import { Draggable } from '@hello-pangea/dnd';

import { cn } from '../util/cn';
import { TWidget } from '@/type/dashboard.types';

function Widget({ widget, index }: { widget: TWidget; index: number }) {
  return (
    <Draggable
      draggableId={widget.id}
      index={index}
    >
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={cn('p-2 mb-2 border border-gray-300 border-solid rounded-sm bg-white transition-colors flex ', {
            'bg-green-400': snapshot.isDragging,
          })}
        >
          {/* TODO: implement widget card content */}
          {widget.content}
        </div>
      )}
    </Draggable>
  );
}

export default Widget;
