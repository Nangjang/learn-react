import "./App.css";
import { useState, useEffect } from "react";

// Component to display GitHub user information
function GithubUser({ login, bio, avatar }) {
  return (
    <div>
      <img src={avatar} height={200} alt={login} />
      <h1>{login}</h1>
      <p>{bio}</p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);

  // Fetch GitHub user data on component mount
  useEffect(() => {
    fetch(`https://api.github.com/users/Nangjang`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  // Render GitHub user information if data is available
  if (data) {
    return (
      <GithubUser
        login={data.login}
        bio={data.bio}
        avatar={data.avatar_url}
      />
    );
  }

  // Render loading message if data is not yet available
  return <h1>Loading...</h1>;
}

export default App;