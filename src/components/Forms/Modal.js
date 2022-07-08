import { Box, Modal, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Api_key from "../../Api";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  p: 4,
};

const ModalForm = (props) => {
  const [model, setModel] = useState({});

  const saveProducts = () => {
    axios
      .post(`${Api_key}/posts/create`, {
       ...model
      })
      .then(() => {
        setModel({});
        props.handleClose();
        props.success();
      });
  };

  // set the model value
  function handleInput(event) {
    setModel({
      ...model,
      [event.target.name]: event.target.value,
    });
    console.log(model);
  }
  useEffect(() => {});
  return (
    <div>
      {" "}
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Create Product
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
                value={model.title}
                onChange={(e) => handleInput(e)}
                id="standard-basic"
                label="Name"
                name="title"
                variant="standard"
              />
            </Typography>
            <TextField
              value={model.quantity}
              onChange={(e) => handleInput(e)}
              id="standard-basic"
              name="quantity"
              label="Quantity"
              variant="standard"
            />
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
                value={model.price}
                onChange={(e) => handleInput(e)}
                id="standard-basic"
                label="Price"
                name="price"
                variant="standard"
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
                value={model.category}
                onChange={(e) => handleInput(e)}
                id="standard-basic"
                label="Category"
                name="category"
                variant="standard"
              />
            </Typography>{" "}
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <TextField
                value={model.message}
                onChange={(e) => handleInput(e)}
                id="standard-basic"
                label="Description"
                name="message"
                variant="standard"
              />
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="error"
                onClick={() => props.handleClose()}
                style={{ marginRight: "10px" }}
              >
                Cancel
              </Button>
              <Button variant="contained" onClick={() => saveProducts()}>
                Save
              </Button>
            </Typography>
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default ModalForm;
