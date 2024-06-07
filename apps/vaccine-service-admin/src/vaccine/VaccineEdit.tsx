import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const VaccineEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="batchNumber" source="batchNumber" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="instock" source="instock" />
        <TextInput label="vaccineName" source="vaccineName" />
      </SimpleForm>
    </Edit>
  );
};
