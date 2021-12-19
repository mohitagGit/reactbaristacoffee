import React from 'react';
import { Link} from "react-router-dom";
import { gvCurrency } from "../App";
import { gvPayments } from "../App";

export const Payments = () => {
    const lvCurrency = gvCurrency;
    let lvAllUserPayments = gvPayments;
    return (
        <div className='ma-app-body-content container-fluid'>
            <h2 className='ma-page-heading'>Users payment list</h2>
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
                            lvAllUserPayments.map((ithPayment, ithIndex) => {
                                return (<tr key={ithIndex}>
                                    <td>{ithIndex + 1}</td>
                                    <td><Link to={`/payment/${ithPayment.user}`}>{ithPayment.user}</Link></td>
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
