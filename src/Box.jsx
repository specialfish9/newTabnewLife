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

  return (
    <div className="content" > <a href={link} target="_blank">
      {nameSite} </a>
      <div className="delete_button" onClick={deleteElement} >x</div>
    </div >
  );
}

export default Box;
