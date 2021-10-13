import { TableColumn } from 'typeorm';

const integerArrayMixin = (options: Partial<TableColumn> = {}): TableColumn =>
  new TableColumn({
    type: 'integer',
    isArray: true,
    ...(options as TableColumn),
  });

export { integerArrayMixin };
