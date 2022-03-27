import React from 'react'

function Box(props) {
  let list1 = props.nameSite
  console.log(list1)
  return (
    <div className="content"> <a target="_blank">
      {list1}
    </a> </div>
  );
}

export default Box;
