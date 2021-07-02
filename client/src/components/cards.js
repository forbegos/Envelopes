import React, { useState } from "react";
import { Card, Modal, Button, Input } from "antd";
import "antd/dist/antd.css";

function Cards() {
  const [envelope, setEnvelope] = useState(["NAME", "BALANCE"]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const removeEnv = () => {};

  const handleDeposit = () => {};

  const handleWithdrawl = () => {};

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="cardWrapper">
      <Card title="Envelope Name" bordered={false} style={styles.container}>
        <p>{envelope[0]}</p>
        <p>{envelope[1]} </p>
        <Button type="primary" onClick={showModal}>
          Start Transaction
        </Button>
        <Button type="primary" onClick={removeEnv}>
          Remove Envelope
        </Button>
        <Modal
          title="Transaction"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button key="1" type="primary" value="small" onClick={handleOk}>
              Deposit
            </Button>,
            <Button key="2" type="primary" value="small" onClick={handleOk}>
              Withdrawl
            </Button>,
          ]}
        >
          <Input placeholder="Transaction Amount" />
        </Modal>
      </Card>
    </div>
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
