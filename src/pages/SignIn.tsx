import React, {useState} from 'react';
import styles from './../css/darkinputs.module.css';
import { authenticate } from '../tools/Authentication'

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  

  let onClickSubmit = () => {
    authenticate(email, password);
  }

  let handleChangeEmail = (event: React.ChangeEvent) => {
    const input: any = event.target;
    setEmail(input.value);
  }

  let handleChangePassword = (event: React.ChangeEvent) => {
    const input: any = event.target;
    setPassword(input.value);
  }

  return <form onSubmit={onClickSubmit}>
      <input className={styles.field + ' block m-5'} id="email" type="email" placeholder="Email" name="email" onChange={handleChangeEmail}/>
      <input className={styles.field + ' block m-5'} id="password" type="password" placeholder="Пароль" name="password" onChange={handleChangePassword}/>
      <input type="submit" value="Відправити" className="button block mx-5 my-10"/>
  </form>
}
export default SignIn;