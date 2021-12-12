import React from 'react'
import PieChart from 'react-minimal-pie-chart';

const Chart = (props) => {
    // made variable to count 200 or over horsepower
    let over = props.cars.filter(a => a.horsepower >= 200).length
    console.log("over: ", over)

    // made variable to count under 200 horsepower
    let under = props.cars.filter(a => a.horsepower < 200).length
    console.log("under: ", under)


    return (
        <div>
            <PieChart style={{ width: '200px' }}
                data={[
                    // I am a bit confused why the over and under do not need to be in {}
                    { title: 'Over', value: over, color: '#C13C37' },
                    { title: 'Under', value: under, color: '#E38627' },
                ]}
                label
                labelStyle={{
                    fill: 'white',
                    fontSize: 'small'
                }}
            />
            <Legend />
        </div>
    )
}

function Legend() {
    return (
        <h6>Horsepower: &nbsp;
            <span style={{background: '#C13C37'}}>
                &nbsp;
                &nbsp;
                &nbsp;
            </span>
            &nbsp;
            <span>Over 200</span>
            &nbsp;
            <span style={{background: '#E38627'}}>
                &nbsp;
                &nbsp;
                &nbsp;
            </span>
            &nbsp;
            <span>Under 200</span>
        </h6>
    )
}

export default Chart
