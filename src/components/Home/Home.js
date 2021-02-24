import React from "react";
import "./home.scss";

import { withAuthorization } from "../Session";

const HomePage = () => {
  return (
    <>
      <div class='homeContainer'>
        <center>
          <b>To jest strona domowa</b> <br></br>
          <p>The Home Page is accessible by every signed in user.</p>
        </center>
      </div>
    </>
  );
};
const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(HomePage);
