import "./index.scss"
import { useState, useEffect } from "react"

export const TotalIndictoar = ({currentMonthTotal,lastMonthTotal}) => {
    const [hasIncreased, setHasIncreased] = useState(true)

    useEffect(() => {
       let pct = getPercentageIncrease()
       pct >= 0 ? setHasIncreased(true) : setHasIncreased(false)
    },[])

    const getPercentageIncrease = () => {
        let pct = (currentMonthTotal-lastMonthTotal)/lastMonthTotal
        return (pct/100).toFixed(2)
    }
    return (<div className="total-indicator-container">
        <div className="container-left-side">
            <p>Total this month</p>
            <p>${currentMonthTotal.toFixed(2)}</p>
        </div>
        <div className="container-right">
            <p>{hasIncreased ? "+" : "-"} {getPercentageIncrease()}</p>
            <p>from last month</p>
        </div>
    </div>);
}