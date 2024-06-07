import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { VaccineList } from "./vaccine/VaccineList";
import { VaccineCreate } from "./vaccine/VaccineCreate";
import { VaccineEdit } from "./vaccine/VaccineEdit";
import { VaccineShow } from "./vaccine/VaccineShow";
import { MedicineList } from "./medicine/MedicineList";
import { MedicineCreate } from "./medicine/MedicineCreate";
import { MedicineEdit } from "./medicine/MedicineEdit";
import { MedicineShow } from "./medicine/MedicineShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VaccineService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Vaccine"
          list={VaccineList}
          edit={VaccineEdit}
          create={VaccineCreate}
          show={VaccineShow}
        />
        <Resource
          name="Medicine"
          list={MedicineList}
          edit={MedicineEdit}
          create={MedicineCreate}
          show={MedicineShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
