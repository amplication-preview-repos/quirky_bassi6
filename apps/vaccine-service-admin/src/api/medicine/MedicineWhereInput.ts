import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MedicineWhereInput = {
  id?: StringFilter;
  medicineName?: StringNullableFilter;
};
