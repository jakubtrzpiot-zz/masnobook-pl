import React from "react";
import "./admin.scss";

import { withFirebase } from "../Firebase";

const AdminPage = () => {
  return (
    <>
      <div className='Container'></div>
    </>
  );
};
export default withFirebase(AdminPage);
