import React, { useEffect } from "react";

const UserPage = ({ subDomin }) => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const uid = localStorage.getItem("uid");

    const fetchData = async () => {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/is-owner`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uid, subDomin }),
      });
      const data = await res.json();
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <h1>helllo</h1>
          <p>this page have with subdomin with your name</p>
          <div>
            owner of this page is {data && data.ownerData && data.ownerData.firstName} {data && data.ownerData && data.ownerData.lastName}
          </div>
        </>
      )}
    </div>
  );
};

export default UserPage;
