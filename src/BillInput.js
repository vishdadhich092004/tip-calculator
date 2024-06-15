export default function BillInput({ children, onBillInput }) {
    return (
        <div>
            <label>{children}</label>
            <input type="text" placeholder="Bill" onChange={onBillInput} />
        </div>
    )
}