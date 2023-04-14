import logo from "../../assets/logo.svg"
import "./index.scss"

export const BalanceIndicator = ({balance}) => {
    return (<div className="container">
        <div className="container-left-side">
            <p>My balance</p>
            <p>${balance}</p>
        </div>
        <img src={logo}/>
    </div>);
}