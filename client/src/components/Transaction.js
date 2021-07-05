import React from "react";

import { useQuery, useMutation } from "@apollo/client";
import { ADD_ENVELOPE_TRANSACTION } from "../utils/mutations";
import { QUERY_ENVELOPES } from "../utils/queries";

function Transaction(props) {
  const { loading, data } = useQuery(QUERY_ENVELOPES);

  let formData = {
    envelopeId: props.id,
    name: props.name,
    amount: props.amount,
    type: props.type,
  };

  const [createTransaction, { error }] = useMutation(ADD_ENVELOPE_TRANSACTION);

  const addTransaction = () => {
    try {
      const { data } = await createTransaction({
        variables: { ...formData },
      });
    } catch (err) {
      console.error(err);
    }
  };
}

export default Transaction;
