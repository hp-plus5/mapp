import { request, gql } from "graphql-request";
import { useQuery } from "react-query";
import './UserAuthentication.scss';

function UserAuthentication() {
  const real_endpoint = "http://localhost:4000/graphql/";
  const getAllUsers = gql`
  {
      users {
          id
          email
      }
  }
  `;

  const createUser = gql`
  {
      users(email: "fake@email.com", password: '12404') {
          id
          email
      }
  }
  `;

  const { data, isLoading, error } = useQuery("launches", () => {
      return request(real_endpoint, getAllUsers);
  });
  
  if (isLoading) return "Loading the query...";
  if (error) return <pre>{error.message}</pre>;


  function handleLogIn() {
    return (<>
    <h2>Log in</h2>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>);
  }

  function handleRegister() {
    return (<>
      <h2>Register</h2>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>);
  }


  if (data) {
    return (
      <>
        {data.user && <p>Hello, {data.user.email}!</p>}
        <button type="button">Logout</button>
      </>
    )
  } else {
    return (
      <>
        <button type="button" onClick={handleLogIn}>Log In</button>
        <button type="button" onClick={handleRegister}>Register</button>
      </>
    );
    
  }
}

export default UserAuthentication;