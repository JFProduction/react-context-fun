import React from 'react'

const ButtonsPres = ({ btnClick }) => {
    return (
        <div style={{ marginLeft: "0px" }}>
            <div style={{
                marginBottom: "-89px"
            }}>
                <button
                    style={{ 
                        background: "none", 
                        border: "none", 
                        transform: "rotate(270deg)",
                    }}
                    id="one"
                    onClick={ () => btnClick('Front') }>
                    <img src="imgs/front.png" alt="front" />
                </button>
            </div>

            {/* front of car */}
            <div>
                <button
                    style={{ 
                        background: "none", 
                        border: "none", 
                        transform: "rotate(270deg)",
                        marginRight: "-30px"
                    }}
                    id="one"
                    onClick={ () => btnClick('FrontDriver') }>
                    <img src="imgs/front-driver.png" alt="front-driver" />
                </button>
                <button
                    style={{ 
                        background: "none", 
                        border: "none", 
                        transform: "rotate(270deg)",
                        marginLeft: "-30px"
                    }}
                    id="two"
                    onClick={ () => btnClick('FrontPassenger') }>
                    <img src="imgs/front-passenger.png" alt="front-passenger" />
                </button>
            </div>

            {/* rear of car  */}
            <div>
                <button
                    style={{ 
                        background: "none", 
                        border: "none", 
                        transform: "rotate(270deg)",
                        marginLeft: "-30px",
                        marginTop: "10px"
                    }}
                    id="two"
                    onClick={ () => btnClick('RearDriver') }>
                    <img src="imgs/rear-driver.png" alt="rear-driver" />
                </button>
                <button
                    style={{ 
                        background: "none", 
                        border: "none", 
                        transform: "rotate(270deg)",
                        marginLeft: "-30px",
                        marginTop: "10px"
                    }}
                    id="two"
                    onClick={ () => btnClick('RearPassenger') }>
                    <img src="imgs/rear-passenger.png" alt="rear-passenger" />
                </button>
            </div>
        </div>
    )
}

export default ButtonsPres