import { useRouteError } from "react-router-dom"

const ErrorComponent = ()=>{
    const err = useRouteError();
    return (
        <div>
            <h1>Ops!!!</h1>
            <h2>Something Went Wrong!!</h2>
            {/* <p>HTTP_Response_Code: 404</p> */}
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default ErrorComponent