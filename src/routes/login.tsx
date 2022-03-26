import type { FormEvent } from 'react'

import { useAuth } from 'context/auth-context'
import useForm from 'hooks/useForm'

type HandleSubmit = (e: FormEvent<HTMLFormElement> | FormEvent<HTMLButtonElement> | undefined) => void

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

    await auth.login({ ...formValues })
  }

  return (
    <div>
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
    </div>
  )
}

export default LoginRoute
