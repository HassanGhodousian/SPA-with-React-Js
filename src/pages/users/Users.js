import { useEffect, useState } from "react";
import CardUser from "../../components/users/Card";
const UserIndex = () => {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div className="container  mt-5">
        <div className="row g-3">
          <h2>User page</h2>
          {error && <h2 className="">{error}</h2>}
          {loading && <div className="spinner-border" role="status"></div>}
          {users && <CardUser users={users} />}
        </div>
      </div>
    </>
  );
};

export default UserIndex;
