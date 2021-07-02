import React, { useState } from "react";
import { Card, Modal, Button, Input } from "antd";
import { useQuery, useMutation } from "@apollo/client";
import "antd/dist/antd.css";
import { QUERY_ENVELOPES } from "../utils/queries";

function Cards() {
  const { loading, data } = useQuery(QUERY_ENVELOPES);
  const envelope = data?.envelopes || [];

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      {envelope.map((envelope) => (
        <div className="cardWrapper">
          <Card title="Envelope Name" bordered={false} style={styles.container}>
            <p>{envelope.name}</p>
            <p>{envelope.envBalance} </p>
            <Button type="primary" onClick={showModal}>
              Start Transaction
            </Button>
            <Modal
              title="Transaction"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <Input placeholder="Withdrawl Amount" />
              <Input placeholder="Deposit Amount" />
            </Modal>
          </Card>
        </div>
      ))}
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

export default Cards;
