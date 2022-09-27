import { useState } from "react";
import Message from "./Message";
import Coordenadas from "./useEffect/Coordenadas";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const { username, email } = formState;

  return (
    <div>
      <h1>Use Effect</h1>
      <div class="row g-3 align-items-center p-5">
        <form>
          <div class="mb-3 col-3">
            <label for="username" class="form-label">
              User name
            </label>
            <input
              id="username"
              className="form-control"
              name="username"
              onChange={handleChange}
              value={username}
            />
          </div>
          <div class="mb-3 col-3">
            <label for="email" class="form-label">
              E-mail
            </label>
            <input
              id="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              value={email}
            />
          </div>
        </form>
      </div>
      {username === "user3" && <Message />}
      {username === "user3" && <Coordenadas />}
    </div>
  );
};

export default SimpleForm;
