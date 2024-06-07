import { Vaccine as TVaccine } from "../api/vaccine/Vaccine";

export const VACCINE_TITLE_FIELD = "vaccineName";

export const VaccineTitle = (record: TVaccine): string => {
  return record.vaccineName?.toString() || String(record.id);
};
