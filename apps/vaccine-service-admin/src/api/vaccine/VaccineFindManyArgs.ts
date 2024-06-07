import { VaccineWhereInput } from "./VaccineWhereInput";
import { VaccineOrderByInput } from "./VaccineOrderByInput";

export type VaccineFindManyArgs = {
  where?: VaccineWhereInput;
  orderBy?: Array<VaccineOrderByInput>;
  skip?: number;
  take?: number;
};
