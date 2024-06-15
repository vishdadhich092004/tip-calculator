export default function TotalBill({ tip1, tip2, bill }) {
    const totalTip = Math.floor(((tip1 + tip2) / 100) * bill);
    return (
        <div>
            <h3>Total Bill is : {bill + totalTip}$ ({bill} +{totalTip})</h3>
        </div>
    )
}