import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import WarningSign from './components/WarningSign'
// import MyBadge from './components/MyBadge'
// import SingleBook from './components/SingleBook'
import BookList from './components/BookList'
import historyBooks from './historyBooks.json'
import MyNavbar from './components/MyNavbar'

const App =()=> {
  // state = {
  //   searchQuery: '',
  // }
  const[searchQuery,setSearchQuery]=useState('')

  const handleSearchQuery = (value) => {
    setSearchQuery(value)
  }


    return (
      <div className='App'>
        <MyNavbar
          searchQuery={searchQuery}
          handleSearchQuery={handleSearchQuery}
        />
        <header className='App-header'>
          {/* <WarningSign text="Watch out again!" /> */}
          {/* <MyBadge text="NEW!!" color="info" /> */}
          {/* <SingleBook book={hostoryBooks[0]} /> */}
          <BookList books={historyBooks} searchQuery={searchQuery} />
        </header>
      </div>
    )
  
}

export default App
