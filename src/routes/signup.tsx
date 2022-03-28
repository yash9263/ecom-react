import useForm from 'hooks/useForm'
import { useAuth } from 'context/auth-context'
import type { HandleSubmit } from './login'

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}

const SignUpRoute = () => {
  const [formValues, handleChange] = useForm(initialValues)

  const auth = useAuth()

  const handleSubmit: HandleSubmit = async (e) => {
    if (!e) return
    e.preventDefault()
    // TODO handle form validation
    if (auth) {
      await auth.signUp({ ...formValues })
    }
  }
  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="signup-firstName">First name</label>
          <input
            type="text"
            name="firstName"
            id="signup-firstName"
            onChange={handleChange}
            value={formValues.firstName}
            required
          />
        </div>
        <div>
          <label htmlFor="signup-lastName">Last name</label>
          <input
            type="text"
            name="lastName"
            id="signup-lastName"
            onChange={handleChange}
            value={formValues.lastName}
          />
        </div>
        <div>
          <label htmlFor="signup-email">email</label>
          <input
            type="text"
            name="email"
            id="signup-email"
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
            id="signup-password"
            value={formValues.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" onSubmit={handleSubmit}>
          sign up
        </button>
      </form>
    </div>
  )
}

export default SignUpRoute
