import { useRouteError } from "react-router-dom"

const Error = () =>{
    const err = useRouteError();
    console.log(err);

    return (
        <div className="error text-center p-4 m-4">
            <h1 className="text-lg font-bold m-4">Something Went Wrong ⚠️</h1>
            <h2>{err.status} : {err.statusText} 🫤</h2>
        </div>
    )
}

export default Error;