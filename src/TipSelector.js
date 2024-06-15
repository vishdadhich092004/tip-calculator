export default function TipSelector({ children, tip, onTipSelection }) {
    return (
        <div>
            <label>{children}</label>
            <select value={tip} onChange={onTipSelection}>
                <option value={0}>No Tip (0%)</option>
                <option value={5}>Decent (5%)</option>
                <option value={10}>Satisfied (10%)</option>
                <option value={15}>Excellent (15%)</option>
            </select>
        </div>
    )
}