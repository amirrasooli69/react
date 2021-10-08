import React from "react";
import { Link } from "react-router-dom";

export function Product({data}) {

    // export function Product({props}) {
    // const data = props.data;


    return <div className="card mt-5">
        <div className="card-body">
            <img src={data.pic} className="card-img-top" width="100%"/>
            <h5 className="card-title">{data.title}</h5>
            <p style={{fontSize:22, fontWeight:700}}className="text-success">{data.price}</p>
            <Link to={"./detail/" + data.id} > <span className="btn btn-primary">Show more</span> </Link>
        </div>
    </div>
}