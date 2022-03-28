import React, { useContext } from 'react'
import './Box.css'
import { favoriteContext } from './favoriteContext'
function Box({ nameSite, link, id }) {

  const [favorite, setFavorite] = useContext(favoriteContext)
  let list = []
  list = favorite

  const deleteElement = () => {
    list = list.filter(item => item.id !== id)
    localStorage.removeItem("el" + id)
    setFavorite(list)
  }

  const overOn = () => {
    document.getElementById("checkHover").style.display = "block"
  }
  const overOf = () => {
    document.getElementById("checkHover").style.display = "none"
  }


  return (
    <div className="content" onMouseOver={overOn} onMouseOut={overOf}> <a href={link} target="_blank">
      {nameSite} </a>
      <div className="delete_button" id="checkHover" onClick={deleteElement} >x</div>
    </div >
  );
}

export default Box;
