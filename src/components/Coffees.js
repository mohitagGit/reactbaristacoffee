import React from 'react';
import { gvCurrency } from "../App";
import { gvCoffeePriceList } from "../App";

export const Coffees = () => {
    let pCoffeePriceList = gvCoffeePriceList;
    return (
        <div className='ma-app-body-content container-fluid'>
            <h2 className='ma-page-heading'>Coffees List</h2>
            <div className='ma-overflow-x'>
                <table className="table table-bordered  table-striped  table-hover table-responsive ">
                    <thead>
                        <tr className="">
                            <th>S. No.</th>
                            <th>Coffee</th>
                            <th>Size (Price)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pCoffeePriceList.map((ithCoffee, ithIndex) => {
                                return (<tr key={ithIndex}>
                                    <td>{ithIndex + 1}</td>
                                    <td>{ithCoffee.drink_name}</td>
                                    <td>
                                    {
                                        ithCoffee.variants.map((ithVariant,iVarIndex) => {
                                            return (
                                                <div key={iVarIndex}>
                                                    <div>{ithVariant.size} ({ithVariant.price} {gvCurrency})</div>
                                                </div>
                                            );
                                        })
                                    }
                                    </td>
                                </tr>);
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
