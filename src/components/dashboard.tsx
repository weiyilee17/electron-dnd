import { rowOrdersFixture, rowsFixture, widgetsFixture } from '@/fixture';
import { TRow, TRowOrder, TRows, TWidgets } from '@/type/dashboard.types';
import { DragDropContext, Droppable, OnDragEndResponder } from '@hello-pangea/dnd';
import { useState } from 'react';
import PerformantRow from './performant-row';

function DashBoard() {
  const [rows, setRows] = useState<TRows>(rowsFixture);
  const [widgets, setWidgets] = useState<TWidgets>(widgetsFixture);
  const [rowOrder, setRowOrder] = useState<TRowOrder>(rowOrdersFixture);

  const handleDropEnd: OnDragEndResponder = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    // TODO: The logic of reordering is somewhat similar. Refactor if have chance

    // reorder rows
    if (type === 'row') {
      const newRowOrder = Array.from(rowOrder);
      newRowOrder.splice(source.index, 1);
      newRowOrder.splice(destination.index, 0, draggableId);

      setRowOrder(newRowOrder);
      // call api if needs to preserve

      return;
    }

    // reorder widgets
    const srcRow = rows[source.droppableId];
    const dstRow = rows[destination.droppableId];

    if (srcRow === dstRow) {
      const newWidgetIds = Array.from(srcRow.widgetIds);
      newWidgetIds.splice(source.index, 1);
      newWidgetIds.splice(destination.index, 0, draggableId);

      const newRow = {
        ...srcRow,
        widgetIds: newWidgetIds,
      };

      setRows((prev) => ({
        ...prev,
        [newRow.id]: newRow,
      }));
    } else {
      const srcWidgetIds = Array.from(srcRow.widgetIds);
      srcWidgetIds.splice(source.index, 1);

      const newSrcRow = {
        ...srcRow,
        widgetIds: srcWidgetIds,
      };

      const destinationWidgetIds = Array.from(dstRow.widgetIds);
      destinationWidgetIds.splice(destination.index, 0, draggableId);

      const newDstRow = {
        ...dstRow,
        widgetIds: destinationWidgetIds,
      };

      setRows((prev) => ({
        ...prev,
        [newSrcRow.id]: newSrcRow,
        [newDstRow.id]: newDstRow,
      }));
    }
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleDropEnd}>
        <Droppable
          droppableId='all-rows'
          type='row'
        >
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {rowOrder.map((singleRowId, index) => {
                const singleRow = rows[singleRowId];

                return (
                  <PerformantRow
                    key={singleRow.id}
                    index={index}
                    row={singleRow}
                    widgetIdWidgetMap={widgets}
                  />
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default DashBoard;
