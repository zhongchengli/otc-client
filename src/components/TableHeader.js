import React, { Fragment } from "react";

const TableHeader = props => {
  const { headers, editBtn, deleteBtn } = props;

  return (
    <Fragment>
      <thead>
        {headers && headers.map((header, key) => <th key={key}> {header}</th>)}
        {editBtn && <th>Edit</th>}
        {deleteBtn && <th>Delete</th>}
      </thead>
    </Fragment >
  )
}

export default TableHeader;