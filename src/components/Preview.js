import React, { Fragment } from "react";
import Styler from "./hocs/Styler.js";

function Preview(props) {
  if (props.userInfo == null) return null;

  return (
    <Fragment>
      <section id="imgContainer">
        <img src={props.userInfo.avatar_url} alt="avatar of user" />
      </section>

      <section id="detailsSection">
        <div className="detailBlock">
          <strong>name</strong>
          <p className={props.classes}>{props.userInfo.name}</p>
        </div>
        <div className="detailBlock">
          <strong>location</strong>
          <p className={props.classes}>{props.userInfo.location}</p>
        </div>
      </section>
    </Fragment>
  );
}

export default Styler(Preview);
