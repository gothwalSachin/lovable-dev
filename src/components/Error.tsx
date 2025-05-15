import { useRouteError } from "react-router";
import Header from "./Header";

const Error = () => {
    const err: any = useRouteError();

    return (
        <>
            <Header />
            <p className="w-fit p-2 mx-auto text-sm font-medium border-2 border-[#40403f] bg-[#272725] rounded-xl">{err.data}</p>
        </>
    );
}

export default Error;