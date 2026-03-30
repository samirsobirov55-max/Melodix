"use client";
import {BounceLoader} from "react-spinners";
import Box from "@/components/Box";
import {FC} from "react";

const Loading: FC = () => {
    return (
        <Box className="h-full flex items-center justify-center">
            <BounceLoader color="#a855f7" size={40}/>
        </Box>
    );
}

export default Loading;
