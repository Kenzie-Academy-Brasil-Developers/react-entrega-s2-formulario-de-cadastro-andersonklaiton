import { Button, Paper } from "@material-ui/core"
import { useHistory, useParams } from "react-router-dom"
import "./style.css"

const Sucess=()=>{
    const history = useHistory()
    const params = useParams()
   
    const handleForm=()=>{
        history.push("/")
    }
    return(
        <Paper
            sx={{width: "300px",
                height: "500px",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "space-evenly",}}
        >
            <p className="welcome">Bem Vindo, {params.user}</p>
            <img className="welcome_image" src="https://cdn.pixabay.com/photo/2021/09/09/04/38/binary-6609473_960_720.jpg" alt="Bem vindo"/>
            <Button sx={{marginBotton:"40px"}} onClick={handleForm} variant="contained" color="primary" >Voltar </Button>
        </Paper>
    )
}
export default Sucess