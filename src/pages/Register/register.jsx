export function SignUp(){
    return(
        <div>
          <form>
          {/* <h1>SignUp</h1> */}
          <label htmlFor="username">Username:</label>
          <input type="text"  name="username"  /><br />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" /><br /> 
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" /><br /> 
        
          <button type="submit">Register</button>
          
          </form>
        </div>
    )
}