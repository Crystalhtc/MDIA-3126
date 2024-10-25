import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className="p-4 bg-purple-200">
        <form className="p-4 border-4 border-black text-center">
            <fieldset className="flex mb-2">
                <label className="mr-2" htmlFor="email">Email:</label>
                <input id="email" name="email" type="email" required />
            </fieldset>
            
            <fieldset className="flex mb-2">
                <label className="mr-2" htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" required />
            </fieldset>

            <fieldset className="flex">
                <button className="mr-2 border-2 border-black" formAction={login}>Log in</button>
                <button className="mr-2 border-2 border-black" formAction={signup}>Sign up</button>
            </fieldset>
        </form> 
    </div>
    
  )
}
