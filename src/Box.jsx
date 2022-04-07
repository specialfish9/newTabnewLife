import React, { useContext, useState } from 'react'
import './Box.css'
import { favoriteContext } from './favoriteContext'
function Box({ nameSite, link, id }) {

  const [favorite, setFavorite] = useContext(favoriteContext)
  let list = []
  list = favorite
  const [selected, setSelected] = useState(0)
  const deleteElement = () => {
    list = list.filter(item => item.id !== id)
    localStorage.removeItem("el" + id)
    setFavorite(list)
  }

  const overOn = () => {
    let iconItem = list.filter(item => item.id === id)
    setSelected(iconItem[0].id)
    document.getElementById("node" + selected).style.visibility = "visible"
  }

  const overOf = () => {
    document.getElementsByName("checkHover").forEach(item => item.style.visibility = "hidden")
  }


  return (
    <div className="content" onMouseOver={overOn} onMouseOut={overOf} > <a onClick={() => document.location = link} href={link} >
      {nameSite} </a>
      <div className="delete_button" id={`node` + selected} name="checkHover" onClick={deleteElement} >x</div>
    </div >
  );
}

export default Box;
