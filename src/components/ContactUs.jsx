import React from 'react'

function ContactUs() {

  return (
    <div className='contact'>
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label>Name</label>
            <input type='text' placeholder='ABC'/>
          </div>
          <div>
            <label>Email</label>
            <input type='email' placeholder='xyz@gmail.com'/>
          </div>
          <div>
            <label>Message</label>
            <input type='text' placeholder='Type Here'/>
          </div>
          <div>
            <label>Password</label>
            <input type='password' placeholder='Type Your Password'/>
          </div>
          <div>
            <label>Confirm Password</label>
            <input type='password' placeholder='Confirm Your Password Here'/>
          </div>

          <button type='submit'>Send</button>
        </form>
      </main>
    </div>
  )
}

export default ContactUs;
