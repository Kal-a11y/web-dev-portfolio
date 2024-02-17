import { Outlet } from 'react-router-dom';
// import './App.css'

function App() {

  return (
    <>
      {/* <Header /> */}
      <main className="mx-3">
        <Outlet />
      </main>
    </>


  )
}

export default App
