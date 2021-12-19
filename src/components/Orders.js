import React from 'react';
import { Link} from "react-router-dom";
import { gvCurrency } from "../App";
import { gvOrderList } from "../App";

export const Orders = () => {
    const lvCurrency = gvCurrency;
    let lvAllUserOrders = gvOrderList;
    return (
        <div className='ma-app-body-content container-fluid'>
            <h2 className='ma-page-heading'>Users orders list</h2>
            <div className='ma-overflow-x'>
                <table className="table table-bordered  table-striped  table-hover table-responsive">
                    <thead>
                        <tr className="">
                            <th>S. No.</th>
                            <th>User Name</th>
                            <th>Coffee Type</th>
                            <th>Size</th>
                            <th>Price({lvCurrency})</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lvAllUserOrders.map((ithOrder, ithIndex) => {
                                return (<tr key={ithIndex}>
                                    <td>{ithIndex + 1}</td>
                                    <td><Link to={`/order/${ithOrder.user}`}>{ithOrder.user}</Link></td>
                                    <td>{ithOrder.drink}</td>
                                    <td>{ithOrder.size}</td>
                                    <td>{ithOrder.price}</td>
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
