import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import metaCertificate from '../../assets/META.jpg'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 20,
};

export default function BasicModal({input}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
<div>
    <Button onClick={handleOpen}>Show Certificate</Button>
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
    <div style={{display:"flex",flexDirection:"column",width:"100%",alignItems:"center",marginTop:200}}>
        <img style={{objectFit:"cover",width:500,height:400,border:"3px solid black"}} src={input} alt="" />
    </div>
        
   
    </Modal>
</div>
  );
}