import { useState } from "react"
import { Route, Switch } from "react-router-dom"

import Register from "../pages/register"
import Sucess from "../pages/sucess"

const Routes=()=>{
    const[user, setUser]=useState()
    return(
        <Switch>
            <Route exact path="/">
                <Register user={user} setUser={setUser}/>
            </Route>
            <Route path="/sucess/:user">
                <Sucess user={user}/>
            </Route>
        </Switch>
    )
}
export default Routes