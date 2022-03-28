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
    document.getElementsByName("checkHover").forEach(item => item.style.visibility = "visible") //style.display = "flex"
  }
  const overOf = () => {
    document.getElementsByName("checkHover").forEach(item => item.style.visibility = "hidden")// .style.display = "none"
  }


  return (
    <div className="content" onMouseOver={overOn} onMouseOut={overOf}> <a href={link} target="_blank">
      {nameSite} </a>
      <div className="delete_button" id="test" name="checkHover" onClick={deleteElement} >x</div>
    </div >
  );
}

export default Box;
