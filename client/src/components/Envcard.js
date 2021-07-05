import React, { useState } from "react";
import { Card, Modal, Button, Input } from "antd";
import { useQuery, useMutation } from "@apollo/client";
import "antd/dist/antd.css";
import { QUERY_ENVELOPES } from "../utils/queries";

function Envcard(props) {
  // const { loading, data } = useQuery(QUERY_ENVELOPES);
  // const envelope = data?.envelopes || [];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const removeEnv = () => {};

  const handleDeposit = () => {
    setIsModalVisible(false);
  };

  const handleWithdrawal = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {/* <p>{props.name}</p>
      <p>{props.envBalance}</p> */}
      <div className="cardWrapper">
        <Card title={props.name} bordered={false} style={styles.container}>
          <p>$ {props.envBalance} </p>
          <Button type="primary" onClick={showModal} style={{ margin: "10px" }}>
            Start Transaction
          </Button>
          <Button type="primary" onClick={removeEnv} style={{ margin: "10px" }}>
            Remove Envelope
          </Button>
          {/* {MODAL  NEED TO ADD FUNCTIONALITY TO DEPOSIT AND WITHDRAWAL} */}
          <Modal
            title="Transaction"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button
                key="1"
                type="primary"
                value="small"
                onClick={handleDeposit}
              >
                Deposit
              </Button>,
              <Button
                key="2"
                type="primary"
                value="small"
                onClick={handleWithdrawal}
              >
                Withdrawal
              </Button>,
            ]}
          >
            <Input placeholder="Transaction Amount" />
          </Modal>
        </Card>
      </div>
    </>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#ddd",
    width: "400px",
    opacity: "80%",
    overflow: "inherit",
  },
};

export default Envcard;
