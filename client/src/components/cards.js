import React, { useState } from "react";
import { Card, Modal, Button } from "antd";
import "antd/dist/antd.css";

function Cards() {
  const [envelope, setEnvelope] = useState(["NAME", "BALANCE"]);

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
    <div className="cardWrapper">
      <Card title="Envelope Name" bordered={false} style={styles.container}>
        <p>{envelope[0]}</p>
        <p>{envelope[1]} </p>
        <Button type="primary" onClick={showModal}>
          Start Transaction
        </Button>
        <Modal
          title="Transaction"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Add more here</p>
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
  },
};

export default Cards;
