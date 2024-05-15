import { memo } from 'react';

import Row from './row';
import { TRow, TWidgets } from '@/type/dashboard.types';

type TPerformantRowProps = {
  row: TRow;
  widgetIdWidgetMap: TWidgets;
  index: number;
};

function arePropsEqual(oldProps: TPerformantRowProps, newProps: TPerformantRowProps) {
  return (
    oldProps.row === newProps.row &&
    oldProps.index === newProps.index &&
    oldProps.widgetIdWidgetMap === newProps.widgetIdWidgetMap
  );
}

const PerformantRow = memo(function PerformantRow({ row, widgetIdWidgetMap, index }: TPerformantRowProps) {
  const singleRowWidgets = row.widgetIds.map((singleWidgetId) => widgetIdWidgetMap[singleWidgetId]);

  return (
    <Row
      row={row}
      widgets={singleRowWidgets}
      index={index}
    />
  );
}, arePropsEqual);
export default PerformantRow;
