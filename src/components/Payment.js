import React from 'react';
import { useParams } from "react-router-dom";
import { gvCurrency } from "../App";
import { gvPayments } from "../App";

export const Payment = () => {
    let paymentParams = useParams();
    let lvUserPayments = [];
    const lvCurrency = gvCurrency;
    let lvUserOrderPayments = gvPayments.filter(function(ithPayment){return ithPayment.user === paymentParams.user});
    if(lvUserOrderPayments.length){
        lvUserPayments = lvUserOrderPayments;
    }
    return (
        <div className='ma-app-body-content container-fluid'>
            <h2 className='ma-page-heading'>{paymentParams.user}'s payments</h2>
            <div className='ma-overflow-x'>
                <table className="table table-bordered  table-striped  table-hover table-responsive">
                    <thead>
                        <tr className="">
                            <th>S. No.</th>
                            <th>User Name</th>
                            <th>Payment({lvCurrency})</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lvUserPayments.map((ithPayment, ithIndex) => {
                                return (<tr key={ithIndex}>
                                    <td>{ithIndex + 1}</td>
                                    <td>{ithPayment.user}</td>
                                    <td>{ithPayment.amount}</td>
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
