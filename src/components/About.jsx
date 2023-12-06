import portrait from '../assets/images/portrait.png'
import './About.css'



export default function About() {

  return (
    <>
      <main>
        <h2>
          About Me!
        </h2>
        <img src={portrait} className='picture' alt='picture' height="250" width="250" />
        <p>Hello and wlecome to my Portfolio! My name is Joe Lipovetz and I am 24 years old. At this current time I am only a little over a week from completing my coding bootcamp. Hello and wlecome to my Portfolio! My name is Joe Lipovetz and I am 24 years old. At this current time I am only a little over a week from completing my coding bootcamp.</p>
      </main>
    </>
  )
}