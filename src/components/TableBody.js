import React, { Fragment } from "react"

const TableBody = props => {
  const { datas } = props;

  return (
    <Fragment>
      <tbody>
        {datas && datas.map((data, key) => {
          return (
            <tr key={key}>
              {Object.values(data).map((value, k) => <td key={k}>{value}</td>)}
            </tr>
          );
        })}
      </tbody>
    </Fragment>
  )
}

export default TableBody;