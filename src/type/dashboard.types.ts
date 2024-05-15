const widgets = ['widget-1', 'widget-2', 'widget-3', 'widget-4', 'widget-5', 'widget-6', 'widget-7', 'widget-8'];
const rows = ['row-1', 'row-2', 'row-3', 'row-4'];

export type TWidget = {
  id: (typeof widgets)[number];
  title: string;
  content: string;
};

export type TRow = {
  id: (typeof rows)[number];
  title: string;
  widgetIds: typeof widgets;
};

export type TRows = {
  [key in (typeof rows)[number]]: TRow;
};

export type TWidgets = {
  [key in (typeof widgets)[number]]: TWidget;
};

export type TRowOrder = typeof rows;
