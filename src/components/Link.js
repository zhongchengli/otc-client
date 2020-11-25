import { Fragment } from "react";

const Link = props => {
  const { name, path } = props;

  return (
    <Fragment>
      <li><a href={path}>{name}</a></li>
    </Fragment>
  )
}

export default Link;