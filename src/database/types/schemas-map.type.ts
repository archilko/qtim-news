import { AvailableSchemas } from '../enums';

type SchemasMapType = {
  [key in AvailableSchemas]: AvailableSchemas;
};

export { SchemasMapType };
