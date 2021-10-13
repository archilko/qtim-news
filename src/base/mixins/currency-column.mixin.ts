import { TableColumn } from 'typeorm';

const currencyColumnMixin = (options: Partial<TableColumn> = {}): TableColumn =>
  new TableColumn({
    type: 'decimal',
    precision: 10,
    scale: 2,
    ...(options as TableColumn),
  });

export { currencyColumnMixin };
