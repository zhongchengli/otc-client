import React, { Fragment } from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = props => {

  // const { objects } = props;
  const objects = [
    { "company": "Alfreds Futterkiste", "contact": "Maria Anders", "country": "Germany" },
    { "company": "Alfreds Futterkiste", "contact": "Maria Anders", "country": "Germany" },
    { "company": "Alfreds Futterkiste", "contact": "Maria Anders", "country": "Germany" },
    { "company": "Alfreds Futterkiste", "contact": "Maria Anders", "country": "Germany" }
  ];

  let headers;
  if (Array.isArray(objects) && objects.length) {
    headers = Object.keys(objects[0]);
  }

  return (
    <Fragment>
      <table className="playtravel">
        <TableHeader headers={headers} />
        <TableBody datas={objects} names={headers} />
      </table>
    </Fragment >
  )
}

export default Table;