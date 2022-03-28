import React from 'react'

function Box(props) {
  console.log(props)

  return (
    <div className="content"> <a href={props.link} target="_blank">
      {props.nameSite}
    </a> </div>
  );
}

export default Box;
