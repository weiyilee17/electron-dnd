import { memo } from 'react';

import Widget from './widget';
import { TWidget } from '@/type/dashboard.types';

const WidgetsList = memo(function WidgetList({ widgets }: { widgets: TWidget[] }) {
  return (
    <>
      {widgets.map((singleWidget, index) => (
        <Widget
          key={singleWidget.id}
          widget={singleWidget}
          index={index}
        />
      ))}
    </>
  );
});

export default WidgetsList;
