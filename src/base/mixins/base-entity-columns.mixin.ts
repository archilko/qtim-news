import { TableColumn } from 'typeorm';

const baseEntityColumnsMixin: TableColumn[] = [
  new TableColumn({
    name: 'id',
    type: 'integer',
    generationStrategy: 'increment',
    isPrimary: true,
  }),
  new TableColumn({
    type: 'timestamp with time zone',
    name: 'created_at',
  }),
  new TableColumn({
    type: 'timestamp with time zone',
    name: 'updated_at',
  }),
];

export { baseEntityColumnsMixin };
