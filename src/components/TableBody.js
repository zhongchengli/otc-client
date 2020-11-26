import React, { Fragment } from "react"

const TableBody = props => {
  const { data, editBtn, deleteBtn } = props;

  return (
    <Fragment>
      <tbody>
        {data && data.map((obj, key) => {
          console.log('obj = ', obj);
          return (
            <tr key={key}>
              {Object.values(obj).map((value, k) => <td key={k}>{value}</td>)}
              {editBtn && <td>Edit</td>}
              {deleteBtn && <td>Delete</td>}
            </tr>
          );
        })}

      </tbody>
    </Fragment>
  )
}

export default TableBody;