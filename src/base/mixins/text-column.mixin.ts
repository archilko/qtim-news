import { TableColumn } from 'typeorm';

const textColumnMixin = (options: Partial<TableColumn> = {}): TableColumn =>
  new TableColumn({
    type: 'text',
    ...(options as TableColumn),
  });

export { textColumnMixin };
