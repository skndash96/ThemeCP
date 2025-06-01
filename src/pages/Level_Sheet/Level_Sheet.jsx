import React, { useContext } from 'react'
import './Level_Sheet.css'
import { LevelContext } from '../../context/LevelContext'

const Level_Sheet = () => {

    // Dummy data for development/demo purposes
    const level = [
        {
            level: 1,
            time: 10,
            Performance: 1150,
            P1: 1100,
            P2: 1200,
            P3: 1180,
            P4: 1170
        },
        {
            level: 2,
            time: 12,
            Performance: 1350,
            P1: 1300,
            P2: 1380,
            P3: 1370,
            P4: 1340
        },
        {
            level: 3,
            time: 15,
            Performance: 1550,
            P1: 1500,
            P2: 1580,
            P3: 1570,
            P4: 1540
        },
        {
            level: 4,
            time: 18,
            Performance: 1750,
            P1: 1700,
            P2: 1780,
            P3: 1770,
            P4: 1740
        },
        {
            level: 5,
            time: 20,
            Performance: 1950,
            P1: 1900,
            P2: 1980,
            P3: 1970,
            P4: 1940
        }
    ];
    // const { level } = useContext(LevelContext);

    const getBackgroundColor = (data) => {
        const rating = parseInt(data);
        if (rating >= 0 && rating < 1200) {
            return '#CCCCCC';
        } else if (rating >= 1200 && rating < 1400) {
            return '#77FF77';
        } else if (rating >= 1400 && rating < 1600) {
            return '#77DDBB';
        } else if (rating >= 1600 && rating < 1900) {
            return '#AAAAFF';
        } else if (rating >= 1900 && rating < 2100) {
            return '#FF88FF';
        } else if (rating >= 2100 && rating < 2300) {
            return '#FFCC88';
        } else if (rating >= 2300 && rating < 2400) {
            return '#FFBB55';
        } else if (rating >= 2400 && rating < 2600) {
            return '#FF7777';
        } else if (rating >= 2600 && rating < 3000) {
            return '#FF3333';
        } else if (rating >= 3000) {
            return '#AA0000';
        }
    }

    return (
        <div className='level-table'>
            <center><h1>Level Sheet</h1></center>
            <table>
                <thead>
                    <tr>
                        <td>Level</td>
                        <td>Duration</td>
                        <td>Performance</td>
                        <td>P1 rating</td>
                        <td>P2 rating</td>
                        <td>P3 rating</td>
                        <td>P4 rating</td>
                    </tr>
                </thead>

                <tbody>
                    {level.map((item, index) => (
                        <tr key={index}>
                            <td>{item.level}</td>
                            <td style={{ backgroundColor: getBackgroundColor(item.Performance), border: '1px solid black', marginRight: '10px' }}><p style={{ fontStyle: 'italic' }}>{item.time} min</p></td>
                            <td style={{ backgroundColor: getBackgroundColor(item.Performance), border: '1px solid black', marginRight: '10px' }}><p style={{ fontStyle: 'italic' }}>{item.Performance}</p></td>
                            <td style={{ backgroundColor: getBackgroundColor(item.P1), border: '1px solid black' }}><p>{item.P1}</p></td>
                            <td style={{ backgroundColor: getBackgroundColor(item.P2), border: '1px solid black' }}><p>{item.P2}</p></td>
                            <td style={{ backgroundColor: getBackgroundColor(item.P3), border: '1px solid black' }}><p>{item.P3}</p></td>
                            <td style={{ backgroundColor: getBackgroundColor(item.P4), border: '1px solid black' }}><p>{item.P4}</p></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Level_Sheet
