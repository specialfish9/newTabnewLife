import React from 'react'

function Box({ nameSite, link }) {
  return (
    <div className="content" > <a href={link} target="_blank">
      {nameSite}
    </a> </div >
  );
}

export default Box;
