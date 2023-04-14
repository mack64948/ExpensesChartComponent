
export const Chart = ({spendingData,maxAmount,maxBarHeight}) => {

    let barHeight = maxBarHeight;

    return (<div style={{
        padding: "10px 0",
        backgroundColor: "hsl(33, 100%, 98%)",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    }}>
        <p style={{
            textAlign: "center",
            fontSize: "50px",
            color: "hsl(25, 47%, 15%)"
        }}>Spending - Last 7 days</p>
        <div style={{
                padding: "10px 0",
                width: "100%",
                height: `${barHeight*1.2}px`,
                display: "flex",
                gap: "5px",
                justifyContent: "space-evenly",
                alignItems: "flex-end"
            }}>
        {spendingData.map((item) => {
            return <div style={{textAlign: "center"}}>
                <div style={{
                    marginBottom: "10px",
                    position: "relative",
                    width: "6vw",
                    height: `${barHeight}px`
                }}>
                    <div style={{
                        position: "absolute",
                        bottom: "0px",
                        left: "0px",
                        width: "100%",
                        height: `${Math.round(barHeight*(item.amount/maxAmount))}px`,
                        backgroundColor: `${item.color}`
                    }}></div>
                </div>
                <label >{item.day}</label>
            </div>
     
        })}  
         </div>
    </div>);
}