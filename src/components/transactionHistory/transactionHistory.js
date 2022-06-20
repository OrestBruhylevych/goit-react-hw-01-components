
import PropTypes from 'prop-types';

import TransactionHistoryItem from "components/transactionHistoryItem/transactionHistoryItem";


export default function TransactionHistory({items}) {

    
    const transactionItems = items.map(({ id, type, amount, currency }) => {
        return (
            <TransactionHistoryItem key={id} type={type} amount={amount} currency={currency} />
        )
    });


    return (
        <table className="transaction-history">
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {transactionItems}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape),
}
