import React from "react";

export function Product({data}) {

    // export function Product({props}) {
    // const data = props.data;


    return <div className="card mt-5">
        <div className="card-body">
            <img src={data.pic} className="card-img-top" />
            <h5 className="card-title">{data.title}</h5>
            <p style={{fontSize:22, fontWeight:700}}className="text-success">{data.price}</p>
            <a className="btn btn-primary" href="#">Show more</a>
        </div>
    </div>
}