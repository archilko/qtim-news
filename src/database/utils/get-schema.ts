import { AvailableSchemas } from '../enums';
import { SCHEMAS } from '../const';
import { EntityOptions } from 'typeorm/decorator/options/EntityOptions';

const getSchema = (schema: AvailableSchemas): EntityOptions => ({
  schema: SCHEMAS[schema],
});

export { getSchema };
