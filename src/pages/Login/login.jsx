export function SignIn(){
    return(
        <div>
            
            <form>
         <div>
            <label htmlFor="email">Email:</label>
            <input type={"email"} name="email" ></input>
         </div>
        
         <div>
            <label htmlFor="password">Password:</label>
            <input type={"password"} name="password"></input>
            </div>
            </form>
        </div>
    )
}