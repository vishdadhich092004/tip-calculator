export default function BillInput({ children }) {
    return (
        <div>
            <label>{children}</label>
            <input type="text" placeholder="Bill" />
        </div>
    )
}