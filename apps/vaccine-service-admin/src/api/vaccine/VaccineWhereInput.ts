import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type VaccineWhereInput = {
  batchNumber?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  instock?: IntNullableFilter;
  vaccineName?: StringNullableFilter;
};
