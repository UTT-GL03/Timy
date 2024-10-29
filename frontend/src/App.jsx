import reactLogo from './assets/react.svg'
import './App.css'
import data from './assets/sample_data.json'

function App() {
console.log(data)
  return (
    <>
     <header>
        <h1>
          <img src={reactLogo}/>
          Timy
        </h1>
      </header>
      <main className="container">
        {data.evenements.map((x, i) =>
          <Event {...x} key={i} />
        )}
      </main>
    </>
  )
}

function Event({title, category, date}) {
  return (
    <article>
      <header>
        <span className="tag"> {category} </span>
        <time> {date} </time>
      </header>
      <h2>{title}</h2>
    </article>
  )
}

export default App
