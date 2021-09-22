import { Button, Paper, TextField } from "@material-ui/core"
import { useForm } from "react-hook-form"
import { yupResolver} from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useHistory} from "react-router-dom"

const FormRegister=()=>{
    
    
    const history = useHistory()

    const schema= yup.object().shape({
        name: yup.string().required("Nome obrigatório").matches(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/, "Apenas letras"),
        email: yup.string().required("Email obrigatório").email("Email inválido"),
        password: yup.string().required("Senha obrigatória")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,"Senha inválida"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Senhas não conferem")
    })

    const{ 
        register, 
        handleSubmit, 
        formState:{errors},
    }=useForm({resolver: yupResolver(schema)})
    
    const handleForm=(data)=>{
        
        history.push(`/sucess/${data.name}`)
    }

    return(
        <Paper elevation={3}
            sx={{width: "300px",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",}}
        >
            <form onSubmit={handleSubmit(handleForm)}>
                <div>
                    <TextField
                        label="Nome"
                        margin="normal"
                        variant="outlined"
                        size="small"
                        color="primary"
                        {...register("name")}
                        error={!!errors.name}
                        helperText={errors.name?.message}
                    />
                </div>
                <div>
                    <TextField
                        label="Email"
                        margin="normal"
                        variant="outlined"
                        size="small"
                        color="primary"
                        {...register("email")}
                        error={!!errors.email}
                        helperText={errors.email?.message}
                    />
                </div>
                <div>
                    <TextField
                        label="Senha"
                        margin="normal"
                        variant="outlined"
                        size="small"
                        color="primary"
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />
                </div>
                <div>
                    <TextField
                        label="Confirmar Senha"
                        margin="normal"
                        variant="outlined"
                        size="small"
                        color="primary"
                        {...register("confirmPassword")}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message}
                    />
                </div>
                <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
            </form>
        </Paper>
    )
}
export default FormRegister