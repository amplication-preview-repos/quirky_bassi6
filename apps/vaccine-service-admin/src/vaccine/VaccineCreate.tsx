import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const VaccineCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="batchNumber" source="batchNumber" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="instock" source="instock" />
        <TextInput label="vaccineName" source="vaccineName" />
      </SimpleForm>
    </Create>
  );
};
