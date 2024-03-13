import { Button } from "@mui/material";
import { styled } from "@mui/system";

const MuiButton = styled(Button) ({
    background: "linear-gradient(to right, #FF8008 0%, #FFC837  51%, #FF8008  100%)",
    marginTop: "30px",
    padding: "12px 35px",
    textAlign: "center",
    textTransform: "uppercase",
    transition: "0.5s",
    backgroundSize: "200% auto",
    color: "white",            
    boxShadow: "0 0 20px #eee",
    borderRadius: "10px",
    display: "block", 
     
})

export default MuiButton;