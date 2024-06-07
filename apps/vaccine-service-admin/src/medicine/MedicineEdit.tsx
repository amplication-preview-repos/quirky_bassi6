import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MedicineEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="medicineName" source="medicineName" />
      </SimpleForm>
    </Edit>
  );
};
