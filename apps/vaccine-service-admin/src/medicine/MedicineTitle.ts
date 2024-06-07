import { Medicine as TMedicine } from "../api/medicine/Medicine";

export const MEDICINE_TITLE_FIELD = "medicineName";

export const MedicineTitle = (record: TMedicine): string => {
  return record.medicineName?.toString() || String(record.id);
};
