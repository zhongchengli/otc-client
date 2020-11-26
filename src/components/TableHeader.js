import React, { Fragment } from "react";

const TableHeader = props => {
  const { headers } = props;

  return (
    <Fragment>
      <thead>
        {headers && headers.map(header => <th>{header}</th>)}
      </thead>
    </Fragment>
  )
}

export default TableHeader;