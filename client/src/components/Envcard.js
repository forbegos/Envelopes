import React, { useState } from "react";
import { Card, Modal, Button, Input } from "antd";
import { useQuery, useMutation } from "@apollo/client";
import "antd/dist/antd.css";
import { ADD_ENVELOPE_TRANSACTION } from "../utils/mutations";

import { QUERY_ENVELOPES } from "../utils/queries";

export default function Envcard(props) {
  const { loading, data } = useQuery(QUERY_ENVELOPES);
  const envelope = data?.envelopes || [];
  console.log(envelope);

  const [transAmount, settransAmount] = useState(0);
  const [transType, settransType] = useState(true);
  const [formData, setFormData] = useState({
    envelopeId: "",
    name: "",
    amount: 0,
    type: true,
  });

  const [createTransaction, { error }] = useMutation(ADD_ENVELOPE_TRANSACTION);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, amount: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submit transaction in the amount of ${transAmount}`);
    try {
      const { data } = await createTransaction({
        variables: { ...formData },
      });
    } catch (err) {
      console.error(err);
    }

    settransAmount(0);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const cardStyle = {
    width: "400px",
    padding: "100px",
    border: "blue solid 3px",
    borderRadius: "5px",
    backgroundColor: "#001529",
  };
  const nameStyle = {
    color: "#001529",
    fontWeight: "bold",
    border: "blue solid 2px",
    textAlign: "center",
    borderRadius: "5px",
    boxShadow: "3px 3px",
    backgroundColor: "white",
    fontSize: "30px",
  };
  const balanceStyle = {
    color: "blue",
    fontSize: "30px",
    textAlign: "center",
    borderBottom: "none",
  };
  const balAmtStyle = {
    color: "white",
    fontSize: "30px",
    textAlign: "center",
  };
  const styles = {
    container: {
      flex: 1,
      backgroundColor: "#ddd",
      width: "400px",
      opacity: "80%",
      overflow: "inherit",
    },
  };
  return (
    <>
      <div className="cardWrapper">
        <Card title={props.name} bordered={false} style={styles.container}>
          <p>$ {props.balance} </p>
          <Button type="primary" onClick={showModal} style={{ margin: "10px" }}>
            Start Transaction
          </Button>
          <Modal
            title="Transaction"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Cancel
              </Button>,
              <Button
                key="1"
                type="primary"
                value="small"
                onClick={handleSubmit}
              >
                Submit
              </Button>,
            ]}
          >
            <Input
              value={transAmount}
              name="transAmount"
              onChange={handleInputChange}
              type="number"
              placeholder="Transaction Amount"
            />
          </Modal>
        </Card>
      </div>
    </>
  );
}
