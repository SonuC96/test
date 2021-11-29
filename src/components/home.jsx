import React, { Component } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import AddBillPayment from "./addbillpayment";

class Home extends React.Component {
  state = { isModalOpen: false, billType: "" };
  handleOpen = () => {
    this.setState({ isModalOpen: true });
    this.setState({ billType: "LPG" });
  };
  handleClose = () => {
    this.setState({ isModalOpen: false });
  };
  render() {
    return (
      <div>
        <h3>Home</h3>
        <Button onClick={this.handleOpen}>Open modal</Button>
        <Modal open={this.state.isModalOpen} onClose={this.handleClose}>
          {<AddBillPayment billType={this.state.billType} />}
        </Modal>
      </div>
    );
  }
}

export default Home;
