import React from 'react'
import linkedinLogo from '../../images/LI-In-Bug.png'
import githubLogo from '../../images/GitHub-Mark-120px-plus.png'
import gmailLogo from '../../images/Gmail_2013.png'

function Contact() {
  return (
    <div id="contact" className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1>CONTACT ME</h1>
        </div>
        <div className='card-body text-center'>
          <div id="contact-head">
          <h2>Let's keep in touch!</h2>
          <p>Here are just a few of the places around the internet where you can find me. I'd love to hear from you!</p>
          </div>
        <ul className="contact-list">
        <li>
          <a href='https://www.linkedin.com/in/james-calingo/' target='_blank' rel='noopener noreferrer'>
            
            <img src={linkedinLogo} className='buttonLogo' alt='LinkedIn' />
          </a>
          Connect with me on LinkedIn
          </li>
          <li>
          <a href='https://www.github.com/JamesCalingo' target='_blank' rel='noopener noreferrer'>
            <img src={githubLogo} className='buttonLogo' alt='GitHub' />
          </a>
          Check me out on GitHub
          </li>
          <li>
          <a href='mailto:james.calingo.web@gmail.com'><img src={gmailLogo} alt="Email me" className="buttonLogo"/></a>
          Email me: james.calingo.web@gmail.com
          </li>
         
          </ul>
          {/* <form>
            <div className='form-group'>
              <label for='emailAddress'>Email address</label>
              <input type='email' class='form-control' id='emailInput1' placeholder='name@example.com' />
            </div>

            <div class='form-group'>
              <label for='Textarea'>Your comment</label>
              <textarea className='form-control' id='Textarea' rows='5' />
            </div>
            <button className='btn btn-primary' disabled>Submit...when I get this working.</button>
          </form> */}
        </div>
      </div>
    </div>
  )
}

export default Contact
