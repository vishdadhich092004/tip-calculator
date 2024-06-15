export default function TipSelector({ children }) {
    return (
        <div>
            <label>{children}</label>
            <select>
                <option value={0}>No Tip (0%)</option>
                <option value={5}>Decent (5%)</option>
                <option value={15}>Excellent (15%)</option>
            </select>
        </div>
    )
}