import React from 'react';
import { useParams } from "react-router-dom";
import { gvCurrency } from "../App";
import { gvUserOrderPayments } from "../App";

export const Order = () => {
    let orderParams = useParams();
    let lvUserOrders = [];
    const lvCurrency = gvCurrency;
    const lvUserOrderPayments = gvUserOrderPayments.filter(function(ithUser){return ithUser.user === orderParams.user});
    if(lvUserOrderPayments.length){
        lvUserOrders = lvUserOrderPayments[0].orders;
    }
    return (
        <div className='ma-app-body-content container-fluid'>
            <h2 className='ma-page-heading'>{orderParams.user}'s orders</h2>
            <div className='ma-overflow-x'>
                <table className="table table-bordered  table-striped  table-hover table-responsive">
                    <thead>
                        <tr className="">
                            <th>S. No.</th>
                            <th>Coffee Type</th>
                            <th>Size</th>
                            <th>Price({lvCurrency})</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lvUserOrders.map((ithOrder, ithIndex) => {
                                return (<tr key={ithIndex}>
                                    <td>{ithIndex + 1}</td>
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
