import React, { Fragment } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = props => {

  const { objects, ...rest } = props;

  let headers;
  if (Array.isArray(objects) && objects.length) {
    headers = Object.keys(objects[0]);
  }

  return (
    <Fragment>
      <table className="playtravel">
        <TableHeader headers={headers} {...rest} />
        <TableBody data={objects} {...rest} />
      </table>
    </Fragment >
  )
}

export default Table;