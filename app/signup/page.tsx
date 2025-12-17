import "./style.css";
import { Google, Facebook } from "next/font/google";

export default function Signup() {
  return (
    <div className='backdrop'>
      <div className='sign-in-card'>
        <div className='intro'>
          <h1>Join School Plate</h1>
          <p>
            Join thousands of partners from Cameroon and beyond in helping
            students in their academic journeys
          </p>
          <div className='button'>
            <Google />
            <span>Sign up with Google</span>
          </div>
          <div className='button'>
            <Facebook />
            <span>Sign up with Facebook</span>
          </div>
        </div>
        <form action=''>
          <fieldset>
            <legend>Or use Email instead</legend>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              name='username'
              placeholder='johndoe'
            />
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='example@domain.com'
            />
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Your password'
            />
          </fieldset>
          <button type='submit'>Sign Up</button>
        </form>

        <br />
        <small className='footnote'>
          Already have an account?<span> </span>
          <a className='sign-up-in' href='/login'>
            Login
          </a>
        </small>
      </div>
    </div>
  );
}
