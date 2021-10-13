import { TableColumn } from 'typeorm';

const stringColumnMixin = (options: Partial<TableColumn> = {}): TableColumn =>
  new TableColumn({
    type: 'text',
    ...(options as TableColumn),
  });

export { stringColumnMixin };
