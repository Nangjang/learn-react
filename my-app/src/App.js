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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch GitHub user data on component mount
  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/Nangjang`)
      .then((response) => response.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h1>Loading content...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;

  // Render GitHub user information if data is available
  return (
    <GithubUser
      login={data.login}
      bio={data.bio}
      avatar={data.avatar_url}
    />
  );
}

export default App;