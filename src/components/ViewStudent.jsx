import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewStudent = () => {
    const [data,changeData]=useState(
        [
            {"name":"Rose","admNo":101,"rollNo":1},
            {"name":"Surya","admNo":102,"rollNo":2},
            {"name":"Raifa","admNo":103,"rollNo":3}
        ]
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {
                                data.map(
                                    (value,index) => {
                                        return <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card">
                                            <img src="https://bizimages.withfloats.com/tile/64e38a7942b3f80001deb2b1.jpg" class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{value.name}</h5>
                                                    <p class="card-text">Admission No:{value.admNo}</p>
                                                    <a href="#" class="btn btn-primary">View Details</a>
                                                </div>
                                        </div>
                                    </div>
                                    }
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewStudent