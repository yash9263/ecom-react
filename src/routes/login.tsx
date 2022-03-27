import type { FormEvent } from 'react'

import { useAuth } from 'context/auth-context'
import useForm from 'hooks/useForm'
import { Link, Navigate } from 'react-router-dom'

export type HandleSubmit = (e: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement> | undefined) => void

const initialValues = {
  email: '',
  password: '',
}

const LoginRoute = () => {
  const [formValues, handleChange] = useForm(initialValues)
  const auth = useAuth()

  const handleSubmit: HandleSubmit = async (e) => {
    if (!e) return
    e.preventDefault()
    // TODO handle form validation
    if (auth) {
      await auth.login({ ...formValues })
    }
  }

  return (
    <div>
      {auth?.user && <Navigate to="/" replace={true} />}
      <form action="" method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="login-email">email</label>
          <input
            type="text"
            name="email"
            id="login-email"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>password</label>
          <input
            name="password"
            type="password"
            id="login-password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" onSubmit={handleSubmit}>
          login
        </button>
      </form>
      <Link to="/signup">Don&apos;t have a account</Link>
    </div>
  )
}

export default LoginRoute
