import { ColumnOptions } from 'typeorm/decorator/options/ColumnOptions';
import { applyDecorators } from '@nestjs/common';
import { Column } from 'typeorm';

const TextColumn = (options: ColumnOptions = {}) =>
  applyDecorators(
    Column({
      ...options,
      type: 'text',
    }),
  );

export { TextColumn };
