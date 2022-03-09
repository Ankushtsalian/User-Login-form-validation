import useForm from "../Hooks/useForm";
import Input from "./Input";
import validateInfo from "./ValidateInfo";
import "./Form.css";
export default function FormSignup({ submitForm }) {
  const { handleChange, values, handleSubmit, errors } = useForm(
    validateInfo,
    submitForm
  );
  const { username, email, password1, password2 } = values;
 

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h1>  Get started with us today! Create your account by filling out the
          information below.</h1>

        <Input
          id=" text"
          label="username"
          type="text"
          placeholder="Enter your user name"
          name="username"
          onChange={handleChange}
          value={username}
        />

        {/* validateInfo of username */}
        {errors.username && <p>{errors.username}</p>}

        <Input
          id="Email"
          label="Email"
          type="Email"
          placeholder="Enter your user Email"
          name="email"
          onChange={handleChange}
          v={email}
        />
        {errors.email && <p>{errors.email}</p>}
        <Input
          id="password1"
          label="password"
          type="password"
          placeholder="Enter your user password"
          onChange={handleChange}
          name="password1"
          v={password1}
        />
        {errors.password && <p>{errors.password}</p>}
        <Input
          id="password2"
          label="confirm password"
          type="password"
          placeholder="Enter your user password"
          name="password2"
          onChange={handleChange}
          v={password2}
        />
        {errors.password2 && <p>{errors.password2}</p>}
        <button className="form-input-btn">Sign up</button>
        <span>
          Already have an account? Login <a href="#">here</a>
        </span>
      </form>
    </div>
  );
}
