import React, { Fragment } from "react";

const TableHeader = props => {
  const { headers, editBtn, deleteBtn } = props;

  return (
    <Fragment>
      <thead>
        <tr>
          {headers && headers.map((header, key) => <td key={key}> {header}</td>)}
          {editBtn && <td>Edit</td>}
          {deleteBtn && <td>Delete</td>}
        </tr>
      </thead>
    </Fragment >
  )
}

export default TableHeader;