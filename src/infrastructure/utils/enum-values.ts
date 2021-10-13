import { EnumValues } from 'enum-values';
import { EnumValueType } from 'enum-values/src/enumValues';

const getValues = <T extends EnumValueType, TReturn = string>(
  e: unknown,
): TReturn[] => EnumValues.getValues(e) as unknown as TReturn[];

export { getValues };
