import React, { Fragment } from "react"
import { Link } from "react-router-dom";

const TableBody = props => {
  const { data, type, editBtn, deleteBtn } = props;

  let editPath;
  let deletePath;
  if (editBtn) {
    editPath = `/${type}?id=`;
  }

  return (
    <Fragment>
      <tbody>
        {data && data.map((obj, key) => {
          console.log('obj = ', obj);
          return (
            <tr key={key}>
              {Object.values(obj).map((value, k) => <td key={k}>{value}</td>)}
              {editBtn && <td><Link to={editPath + obj.id}>Edit</Link></td>}
              {deleteBtn && <td><Link to={deletePath + obj.id}>Delete</Link></td>}
            </tr>
          );
        })}

      </tbody>
    </Fragment>
  )
}

export default TableBody;