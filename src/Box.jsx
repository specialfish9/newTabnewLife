import React from 'react'

function Box(props) {
  let list = props.list
  console.log(list)


  return (
    <div className="content"> <a target="_blank">
      {list.map(item => item.link)}
    </a> </div>
  );
}

export default Box;
