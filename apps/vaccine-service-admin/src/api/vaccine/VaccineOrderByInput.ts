import { SortOrder } from "../../util/SortOrder";

export type VaccineOrderByInput = {
  batchNumber?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  instock?: SortOrder;
  updatedAt?: SortOrder;
  vaccineName?: SortOrder;
};
