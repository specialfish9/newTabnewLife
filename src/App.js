import { useState } from 'react';
import './App.css';

function App() {

  const [element, setElement] = useState(false)

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

  const createElement = () => {

  }


  return (
    <div className="container">
      <div className="title">Google</div>
      <div className="search-bar">
        <form method="get" action="https://www.google.com/search">
          <input type="text" name="query" placeholder="grep '$PATH' google.com" />
        </form>
      </div>
      <div className="element_block" id="block">
        <div className="exit_button" onClick={showElement}>x</div>
      </div>
      <div className="elements">
        <div className="content"> <a href="https://web.telegram.org" target="_blank"> Telegram </a> </div>
        <div className="content"> <a href="https://github.com" target="_blank"> Github </a> </div>
        <div className="content"> <a href="https://web.whatsapp.com" target="_blank"> Whatsapp </a> </div>
        <div className="content add" onClick={showElement}> + </div>
      </div>
    </div>
  );
}

export default App;
