import { useEffect, useState } from 'react';
import './App.css';
import Box from './Box';
function App() {

  const [element, setElement] = useState(false)
  const [inputName, setInputName] = useState('')
  const [inputSite, setInputSite] = useState('')
  const [count, setCount] = useState(0)
  const [favorites1, setFavorites1] = useState([])
  const [favorites2, setFavorites2] = useState([])
  const [favoritesAll, setFavoritesAll] = useState([])
  let list = []
  let i = 0
  let j = 0
  let serie1 = [], serie2 = []
  const showElement = () => {
    if (element) {
      document.getElementById("block").style.visibility = "hidden"
      setElement(false)
    }
    else {
      document.getElementById("block").style.visibility = "visible"
      setElement(true)
    }
  }

  useEffect(() => {
    while (localStorage.getItem("el" + j) != null) {
      favoritesAll.push(JSON.parse(localStorage.getItem("el" + j)))
      j++
    }

  }, [])

  useEffect(() => {
    if (localStorage.getItem("count") != null) setCount(parseInt(localStorage.getItem("count")) + 1)
    while (localStorage.getItem("el" + i) != null) {
      list.push(JSON.parse(localStorage.getItem("el" + i)))
      i++
    }
    //console.log(list)
    serie1 = list.map(item => item.link)
    serie2 = list.map(item => item.nameSite)
    setFavorites1(serie1)
    setFavorites2(serie2)
    favoritesAll.map(item => console.log(item))
  }, [count])


  const createElement = (e) => {
    e.preventDefault()
    let newEl = {
      "id": count,
      "nameSite": inputName,
      "link": inputSite
    }
    setCount(count + 1)
    localStorage.setItem("el" + count, JSON.stringify(newEl))
    list.push(JSON.parse(localStorage.getItem("el" + count)))
    localStorage.setItem("count", count)
    favoritesAll.push(JSON.parse(localStorage.getItem("el" + count)))
    setInputName("")
    setInputSite("")
    setElement(false)
    showElement()
  }

  const getName = (e) => {
    e.preventDefault()
    setInputName(e.target.value)
  }

  const getSite = (e) => {
    e.preventDefault()
    setInputSite(e.target.value)
  }


  return (
    <div className="container">
      <div className="title">Google</div>
      <div className="search-bar">
        <form method="get" action="https://www.google.com/search">
          <input type="text" id="bar" name="query" placeholder="grep '$PATH' google.com" />
        </form>
      </div>
      <div className="element_block" id="block">
        <div className="quit_line">
          <div className="exit_button" onClick={showElement}>x</div>
        </div>
        <div className="input_site">
          <div className="add_item">
            <span>Bookmark name</span><input type="text" value={inputName} onChange={getName} id="name" className="input_text" placeholder="Insert name" />
            <span>Bookmark link</span><input type="text" value={inputSite} onChange={getSite} id="site" className="input_text" placeholder="Insert link" />
            <input type="submit" className="send_button" value="Confirm" onClick={createElement} />
          </div>
        </div>
      </div>
      <div className="elements">
        {
          favoritesAll.map(item => <Box link={item.link} nameSite={item.nameSite} />)
        }
        < div className="content"> <a href="https://web.telegram.org" target="_blank"> Telegram </a> </div>
        <div className="content"> <a href="https://github.com" target="_blank"> Github </a> </div>
        <div className="content"> <a href="https://web.whatsapp.com" target="_blank"> Whatsapp </a> </div>
        <div className="content add" onClick={showElement}> + </div>
      </div>
    </div >
  );
}

export default App;
