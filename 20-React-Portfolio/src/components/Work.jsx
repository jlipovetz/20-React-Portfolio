import "./Work.css"
import password from '../assets/images/03-password-generator.png'
import noteTaker from '../assets/images/11-note-taker-note-page.png'
import flashCard from '../assets/images/flash-card-database.png'
import game from '../assets/images/project-page.png'
import semantic from '../assets/images/semantic-html.png'



export default function Work() {

  return (
    <>
      <main>
        <h2>My Work</h2>
        <div class="projects">
          <section class="card">
            <header><a class="link" href="https://jlipovetz.github.io/03-JS-Password-Generator/" target="_blank">Password Generator</a></header>
            <img src={password} alt="Password Generator" height="250" width="250" />
            <p><a class="card-link" href="https://github.com/jlipovetz/13-Object-Relational">View On Github</a></p>
          </section>
          <section class="card">
            <header><a class="link" href=" https://express-js-note-taker-11-hw-d2484323fd46.herokuapp.com/" target="_blank">Note Taker</a></header>
            <img src={noteTaker} alt="Note Taker" height="250" width="250"/>
            <p><a class="card-link" href="https://github.com/jlipovetz/11-Express.js-Note-Taker">View On Github</a></p>
          </section>
          <section class="card">
            <header><a class="link" href="https://flash-card-database-b48354848dbb.herokuapp.com/" target="_blank">Flash Card Database</a></header>
            <img src={flashCard} alt="Flash Card" height="250" width="250"/>
            <p><a class="card-link" href="https://github.com/jlipovetz/13-Object-Relational">View On Github</a></p>
          </section>
          <section class="card">
            <header><a class="link" href="https://github.com/jlipovetz/03-JS-Password-Generator" target="_blank">Game Finder</a></header>
            <img src={game} alt="Game Finder" height="250" width="250"/>
            <p><a class="card-link" href="https://github.com/jlipovetz/13-Object-Relational">View On Github</a></p>
          </section>
          <section class="card">
            <header><a class="link" href="https://jlipovetz.github.io/semantic-html/" target="_blank">Semantic HTML</a></header>
            <img src={semantic} alt="Semantic HTML" height="250" width="250"/>
            <p><a class="card-link" href="https://github.com/jlipovetz/semantic-html">View On Github</a></p>
          </section>
        </div>
      </main>
    </>
  )
}