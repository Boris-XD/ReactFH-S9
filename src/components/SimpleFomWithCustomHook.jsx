import { useForm } from "../hooks/useForm";

const SimpleFormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, country} = useForm({
    username: "",
    email: "",
    country: ""
  });

  return (
    <div>
      <h1>Use Effect</h1>
      <div className="row g-3 align-items-center p-5">
        <form>
          <div className="mb-3 col-3">
            <label htmlFor="username" className="form-label">
              User name
            </label>
            <input
              id="username"
              className="form-control"
              name="username"
              onChange={onInputChange}
              value={username}
            />
          </div>
          <div className="mb-3 col-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              id="email"
              className="form-control"
              name="email"
              onChange={onInputChange}
              value={email}
            />
          </div>
          <div className="mb-3 col-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input
              id="country"
              className="form-control"
              name="country"
              onChange={onInputChange}
              value={country}
            />
          </div>
          <div className="mb-3 col-3">
            <button onClick={onResetForm} className="btn btn-primary mt-3">Reset Form</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SimpleFormWithCustomHook;
