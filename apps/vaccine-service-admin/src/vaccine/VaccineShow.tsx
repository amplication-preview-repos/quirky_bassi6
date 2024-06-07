import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const VaccineShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="batchNumber" source="batchNumber" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="instock" source="instock" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vaccineName" source="vaccineName" />
      </SimpleShowLayout>
    </Show>
  );
};
