
export default function form() {
  return ( 
    <form action="http://localhost:3001/api/v1/users" method="POST">
      <p className="input-title">SIGN UP</p>

      <div className="input-element">
        <label htmlFor="name">NAME</label>
        <input type="text" name="name" />
      </div>

      <div className="input-element">
        <label htmlFor="email">EMAIL</label>
        <input type="email" name="email" />
      </div>

      <div className="input-element">
        <label htmlFor="password">PASSWORD</label>
        <input type="password" name="password" placeholder="MIN. 6 CHARACTERS LONG" />
      </div>

      <div className="input-element">
        <label htmlFor="confirm-password">CONFIRM PASSWORD</label>
        <input type="text" name="confirm-password" />
      </div>

      <div className="input-element">
        <label htmlFor="gender">GENDER</label>
        <select name="gender">
          <option value="select-your-gender">SELECT YOUR GENDER</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="not-to-say">Prefer not to say</option>
        </select>
      </div>

      <div className="input-element">
        <input type="submit" name="sign-up" value="SIGN UP" />
      </div>

      <div className="sign-in-section" >
        <p className='sign-in-text'>SIGN IN</p>
      </div>
    </form>
  )
}
