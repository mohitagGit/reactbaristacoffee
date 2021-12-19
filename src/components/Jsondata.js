import React from 'react';
import { gvUserOrderPayments } from "../App";

export const Jsondata = () => {
    let lvJsonDataList = gvUserOrderPayments;
    return (
        <div className='ma-app-body-content container-fluid'>
            <h2 className='ma-page-heading'>Users's list</h2>
            <div className='ma-overflow-x'>
                <table className="table table-bordered  table-striped  table-hover table-responsive">
                    <thead>
                        <tr className="">
                            <th>S. No.</th>
                            <th>Name</th>
                            <th>Json Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            lvJsonDataList.map((ithUser, ithIndex) => {
                                const lvJsonData = JSON.stringify(ithUser);
                                return (<tr key={ithIndex}>
                                    <td>{ithIndex + 1}</td>
                                    <td>{ithUser.user}</td>
                                    <td><code>{lvJsonData}</code></td>
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
