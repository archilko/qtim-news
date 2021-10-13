import { applyDecorators } from '@nestjs/common';
import { Column } from 'typeorm';
import { ColumnOptions } from 'typeorm/decorator/options/ColumnOptions';

const BooleanColumn = (options: ColumnOptions = {}) =>
  applyDecorators(
    Column({
      ...options,
      type: 'boolean',
    }),
  );


export { BooleanColumn };
