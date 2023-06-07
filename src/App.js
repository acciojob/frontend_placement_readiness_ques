import "./styles.css";

import React, { useState, useEffect } from "react";

function DataDisplay() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {}

  return (
    <div>
      <h1>Data Display</h1>
    </div>
  );
}

export default DataDisplay;
