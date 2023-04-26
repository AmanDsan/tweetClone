
import { Link} from 'react-router-dom'



export default function Navbar() {

  return (

    <div >
      New to Twitter?
      <p>Sign up now to get your own personalized timeline!</p>
      <div >
        <ul  >
          {/* <Link to='/' style={{ textDecoration: 'none' }}> <li>Home</li></Link> */}
          <Link to='/SignIn' style={{ textDecoration: 'none' }} ><li>SignUp</li></Link>
          <Link to='/SignUp' style={{ textDecoration: 'none' }}><li>Create account</li></Link>
         
        </ul>
        By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
      </div>
</div>
  )
}