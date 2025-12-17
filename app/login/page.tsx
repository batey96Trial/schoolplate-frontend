import "../signup/style.css";
import { Google, Facebook } from "next/font/google";

export default function Login() {
  return (
    <div className='backdrop'>
      <div className='sign-in-card'>
        <div className='intro'>
          <h1>Login to School Plate</h1>
          <p>
            Join thousands of partners from Cameroon and beyond in helping
            students in their academic journeys
          </p>
          <div className='button'>
            <Google />
            <span>Continue with Google</span>
          </div>
          <div className='button'>
            <Facebook />
            <span>Continue with Facebook</span>
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
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Your password'
            />
          </fieldset>
          <button type='submit'>Continue</button>
        </form>

        <br />
        <small className='footnote'>
          Don't have an account yet?<span> </span>
          <a className='sign-up-in' href='/signup'>
            Sign up
          </a>
        </small>
      </div>
    </div>
  );
}
