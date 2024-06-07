import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MedicineCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="medicineName" source="medicineName" />
      </SimpleForm>
    </Create>
  );
};
