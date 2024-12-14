import React from "react";
import Layout from "../components/layout/layout.jsx";
import { useAuth } from "../context/auth.jsx";

const Homepage = () => {
  const [auth, setAuth] = useAuth();
  console.log("Auth state:", auth); // Debugging line

  return (
    <Layout title={"Welcome"}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};
export default Homepage;
