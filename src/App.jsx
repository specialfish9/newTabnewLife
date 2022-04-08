import { useEffect, useState } from 'react';
import './App.css';
import Box from './Box';
import { favoriteContext } from './favoriteContext'
function App() {

  const [element, setElement] = useState(false)
  const [inputName, setInputName] = useState('')
  const [inputSite, setInputSite] = useState('')
  const [count, setCount] = useState(0)
  const [favoritesAll, setFavoritesAll] = useState([])


  let list = []
  let i = 1
  let j = 1
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
    (localStorage.getItem("count") == null) ? localStorage.setItem("count", 0) : setCount(localStorage.getItem("count"))
    while (j < 1000) {
      if (localStorage.getItem("el" + j) != null) {
        favoritesAll.push(JSON.parse(localStorage.getItem("el" + j)))
      }
      j++
    }

  }, [])

  useEffect(() => {
    if (localStorage.getItem("count") != null) setCount(parseInt(localStorage.getItem("count")) + 1)
    while (localStorage.getItem("el" + i) != null) {
      list.push(JSON.parse(localStorage.getItem("el" + i)))
      i++
    }

  }, [count])


  const createElement = (e) => {
    e.preventDefault()

    let url = inputSite
    let splitted = inputSite.split("://")
    if (splitted.length === 1)
      url = "https://" + inputSite;

    let newEl = {
      "id": count,
      "nameSite": inputName,
      "link": url
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
          <input type="text" id="bar" name="query" placeholder="make a wish!" autoFocus="autofocus" />
        </form>
      </div>
      <div className="element_block" id="block">
        <div className="quit_line">
          <div className="exit_button" onClick={showElement}>x</div>
        </div>
        <div className="input_site">
          <div className="add_item">
            <form>
              <span>Bookmark name</span><input type="text" value={inputName} onChange={getName} id="name" className="input_text" placeholder="google" />
              <span>Bookmark link</span><input type="text" value={inputSite} onChange={getSite} id="site" className="input_text" placeholder="google.com" />
              <div className="check-button">
                <input type="submit" className="send_button" value="Delete" onClick={showElement} />
                <input type="submit" className="send_button" value="Confirm" onClick={createElement} />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="elements">
        {
          favoritesAll.map(item => <favoriteContext.Provider value={[favoritesAll, setFavoritesAll]} key={item.id}> <Box link={item.link} nameSite={item.nameSite} id={item.id} key={item.id} /> </favoriteContext.Provider>)
        }
        <div className="contentAdd" onClick={showElement}> + </div>
      </div>
    </div >
  );
}

export default App;
