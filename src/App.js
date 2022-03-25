import { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import elem from './elements'
function App() {

  const [element, setElement] = useState(false)
  const [inputName, setInputName] = useState('')
  const [inputSite, setInputSite] = useState('')
  const [count, setCount] = useState(0)

  let favorites = []

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
    if (localStorage.getItem("favorites") != null) favorites = localStorage.getItem("favorites")
    if (localStorage.getItem("count") != null) setCount(parseInt(localStorage.getItem("count")) + 1)
  }, [])

  const createElement = (e) => {
    e.preventDefault()
    if (localStorage.getItem("count") == null) localStorage.setItem("count", 0)
    setCount(count + 1)
    let newEl = [{
      "id": count,
      "name": inputName,
      "link": inputSite
    }]
    localStorage.setItem(count, JSON.stringify(newEl))
    localStorage.setItem("count", count)
    setInputName("")
    setInputSite("")
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
        <div className="content"> <a href="https://web.telegram.org" target="_blank"> Telegram </a> </div>
        <div className="content"> <a href="https://github.com" target="_blank"> Github </a> </div>
        <div className="content"> <a href="https://web.whatsapp.com" target="_blank"> Whatsapp </a> </div>
        <div className="content add" onClick={showElement}> + </div>
      </div>
    </div >
  );
}

export default App;
