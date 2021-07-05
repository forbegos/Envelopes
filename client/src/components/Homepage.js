import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ENVELOPES } from "../utils/queries";
import Envcard from "./Envcard";

function HomePage() {
  const { loading, data } = useQuery(QUERY_ENVELOPES);
  const envelope = data?.envelopes || [];
  console.log(envelope);

  const [envelopeName, setEnvelopeName] = useState("");
  const [envelopeBalance, setEnvelopeBalance] = useState("");

  const handleFormSubmit = (e) => () => {
    setEnvelopeName(e.name);
    setEnvelopeBalance(e.envBalance);
  };

  return (
    <div>
      <div>
        {envelope.map(
          (env, key) => (
            (key = { key }),
            (
              <button type="button" onClick={handleFormSubmit(env)}>
                {env.name}
              </button>
            )
          )
        )}
      </div>
      <Envcard name={envelopeName} balance={envelopeBalance} />
    </div>
  );
}

export default HomePage;
