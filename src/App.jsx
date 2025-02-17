import useSWR from "swr";
import "./App.css";

const fetcher = ([url, options]) =>
  fetch(url, options)
    .then((res) => res.json())
    .then((json) => json.description);

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const {
    data: status,
    error,
    isLoading,
  } = useSWR([url, { headers }], fetcher);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return <p>Status : {status}</p>;
}

export default App;
