import React from 'react';
import { Link} from "react-router-dom";
import { gvCurrency } from "../App";
import { gvUserOrderPayments } from "../App";

export const Users = () => {
    const lvCurrency = gvCurrency;
    let lvUsersList = gvUserOrderPayments;
    const redColor = {
        color: 'red'
    }
    const greenColor = {
        color: 'green'
    }
    return (
        <div className='ma-app-body-content container-fluid'>
            <h2 className='ma-page-heading'>Users's list</h2>
            <div className='ma-overflow-x'>
                <table className="table table-bordered  table-striped  table-hover table-responsive">
                    <thead>
                        <tr className="">
                            <th>S. No.</th>
                            <th>Name</th>
                            <th>Total Orders</th>
                            <th>Total Amount({lvCurrency})</th>
                            <th>Total Paid({lvCurrency})</th>
                            <th>Balance({lvCurrency})</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lvUsersList.map((ithUser, ithIndex) => {
                                return (<tr key={ithIndex}>
                                    <td>{ithIndex + 1}</td>
                                    <td>{ithUser.user}</td>
                                    <td><Link to={`/order/${ithUser.user}`}>{ithUser.orders.length}</Link></td>
                                    <td>{ithUser.total_amount}</td>
                                    <td><Link to={`/payment/${ithUser.user}`}>{ithUser.total_paid}</Link></td>
                                    {
                                        (
                                            parseFloat(ithUser.payment_due) < 0 ?
                                            <td style={redColor}>{ithUser.payment_due}</td>:
                                            <td style={greenColor}>+{ithUser.payment_due}</td>
                                        )
                                    }
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
