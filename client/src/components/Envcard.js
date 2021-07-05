import React, { useState } from "react";
import { Card, Modal, Button, Input } from "antd";
import { useQuery, useMutation } from "@apollo/client";
import "antd/dist/antd.css";
import { QUERY_ENVELOPES } from "../utils/queries";
export default function Envcard(props) {
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
    // <div>
    //   <div className="card">
    //     <div className="card-body" style={cardStyle}>
    //       <h5 className="card-title" style={nameStyle}>
    //         {props.name}
    //       </h5>
    //       <p className="card-text" style={balanceStyle}>
    //         Balance:{" "}
    //       </p>
    //       <p className="card-text" style={balAmtStyle}>
    //         ${props.balance}.00
    //       </p>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="cardWrapper">
        <Card title={props.name} bordered={false} style={styles.container}>
          <p>$ {props.balance} </p>
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
