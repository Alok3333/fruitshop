import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({});
  const [users, setUsers] = useState([]);

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:4500/', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const result = await res.json();
    console.log(result);
  };

  const getUser = async () => {
    const res = await fetch('http://localhost:4500/', {
      method: 'GET',
    });
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="App">
        <form
          onSubmit={handleSubmitForm}
          className="row g-3 needs-validation"
          noValidate
        >
          <div className="form-floating mb-3">
            <input
              type="text"
              name="username"
              className="form-control"
              id="floatingInput"
              onChange={handleForm}
              placeholder="name@example.com"
              required
            />
            <label htmlFor="floatingInput">Username</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="tel"
              name="telephone"
              className="form-control"
              id="floatingTextarea"
              onChange={handleForm}
              placeholder="Type a phone number"
              required
            />
            <label htmlFor="floatingTextarea">Mobile Number</label>
          </div>

          <div className="form-floating">
            <select
              className="form-select"
              name="fruitname"
              onChange={handleForm}
              id="floatingSelect"
              aria-label="Floating label disabled select example"
            >
              <option selected>Open this select menu</option>
              <option value="Mango">Mango</option>
              <option value="Apple">Apple</option>
              <option value="Orange">Orange</option>
              <option value="PineApple">PineApple</option>
              <option value="Guava">Guava</option>
              <option value="Grapes">Grapes</option>
            </select>
            <label htmlFor="floatingSelect">selects fruits</label>
          </div>

          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>

      <div className="App-grid">
        <div className="container text-center">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Mobile Number</th>
                <th scope="col">FruitName</th>
              </tr>
            </thead>
            
          </table>
          {users.map((user) => (
            <>
              <div className="row" key={user._id}>
                <div className="col">{user.username}</div>
                <div className="col">{user.telephone}</div>
                <div className="col">{user.fruitname}</div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
