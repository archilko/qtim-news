import { SchemasMapType } from '../types';
import { AvailableSchemas } from '../enums';

const SCHEMAS: SchemasMapType = {
  [AvailableSchemas.USERS]: AvailableSchemas.USERS,
  [AvailableSchemas.CONTENT]: AvailableSchemas.CONTENT,
};

export { SCHEMAS };
