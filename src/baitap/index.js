import React from "react";
import Header from "./header";
import Carousel from "./carousel";
import Cards from "./cards";
import Promotion from "./promotion";

export default function BaiTap() {
    return (
        <div className="bg-dark">
            <Header />
            <Carousel />
            <Cards />
            <Promotion />
        </div>
    );
}