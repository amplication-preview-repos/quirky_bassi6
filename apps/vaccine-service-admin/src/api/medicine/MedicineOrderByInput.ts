import { SortOrder } from "../../util/SortOrder";

export type MedicineOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  medicineName?: SortOrder;
  updatedAt?: SortOrder;
};
