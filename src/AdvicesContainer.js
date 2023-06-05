import React, { useState, useEffect } from "react";

import Button from "./Button";

import Advice from "./Advice";

const URL = "https://api.adviceslip.com/advice";

const AdvicesContainer = () => {
  const [advices, setAdvices] = useState({});

  const [error, setError] = useState(null);
  const [isDisabled, setDisabled] = useState(false);

  const getAdvice = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    try {
      const response = await fetch(URL);

      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }

      const result = await response.json();

      console.log("slip is: ", JSON.stringify(result.slip, null, 4));
      setError(null);

      setAdvices(result.slip);

      return result.slip;
    } catch (err) {
      setError(err.message);
    } finally {
    }
  };

  let isThrottled = false;
  let queuedFetch = null;

  async function throttleFetchData() {
    if (!isThrottled) {
      isThrottled = true;

      setDisabled(true);
      await getAdvice();
      setDisabled(false);

      isThrottled = false;
      if (queuedFetch) {
        const fetch = queuedFetch;
        queuedFetch = null;
        await throttleFetchData(fetch);
      }
    } else {
      queuedFetch = getAdvice;
    }
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="container">
      {error && <p>{`There is a problem with fetching data - ${error}`}</p>}

      <Advice advices={advices} />

      <Button throttleFetchData={throttleFetchData} isDisabled={isDisabled} />
    </div>
  );
};

export default AdvicesContainer;
