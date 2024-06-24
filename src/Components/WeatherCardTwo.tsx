import {  Col, Row } from "antd";
import React from "react"
import weather from "../UI/WeatherCard.module.css";
import clouds from "../Assets/clouds.png";
import rain from "../Assets/rain.png";
import drizzle from "../Assets/drizzle.png";
import mist from "../Assets/mist.png";
import sunny from "../Assets/sunny.png";
import navigation from "../Assets/navigation 1.png";

const WeatherCardTwo: React.FC<{
    slice: any;
    length: number;
    foreCastData: any
    singleDayData: any
}> = React.memo((foreCastData) => {
    const singleDayForecast = foreCastData && foreCastData.foreCastData && foreCastData.foreCastData.length > 0 ? foreCastData && foreCastData.foreCastData && foreCastData.foreCastData?.slice(0, 5) : [];

    const formatDate = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const dayOfWeek = days[date.getDay()];
        const month = date.toLocaleString('en-US', { month: 'short' });
        const dayOfMonth = date.getDate();
        return `${dayOfWeek}, ${dayOfMonth} ${month}`;
    };
    const formatTime = (timestamp: number) => {
        const date = new Date(timestamp * 1000);
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };
    return (
        <>
            <Row gutter={[24, 24]}>

                <Col lg={7} xl={6} className={weather["weather-card--three"]}>
                    <h3>5 Days Forecast:</h3>
                    {singleDayForecast?.map((singledata: any, index: number) => (
                        <div key={index} className={weather["card--three--row"]}>
                            <>
                                <img src={singledata?.weather[0]?.main === "Clouds" ? clouds :
                                    singledata?.weather[0]?.main === "Rain" ? rain :
                                        singledata?.weather[0]?.main === "Sunny" ?
                                            sunny : singledata?.weather[0]?.main === "Mist" ? mist :
                                                singledata?.weather[0]?.main === "Drizzle" ? drizzle :
                                                    sunny} alt="sunny" />
                                <p>{singledata.main.temp}°C</p>
                                <p>{formatDate(singledata.dt)}</p>
                            </>

                        </div>
                    ))}
                </Col>
                <Col className={weather["weather--card--Four"]} lg={14} xl={15}>
                    <h3> 3Hour's Forecast:</h3>
                    <div className={weather["carousel-container"]}>
                        <div className={weather["carousel-content"]}>
                            {foreCastData && foreCastData.foreCastData && foreCastData.foreCastData?.map((forecast: any, index: any) => (
                                <div key={index} className={weather["fourth--sub--card"]}>
                                    <p>{formatTime(forecast.dt)}</p>
                                    <img src={forecast?.weather[0]?.main === "Clouds" ? clouds :
                                        forecast?.weather[0]?.main === "Rain" ? rain :
                                            forecast?.weather[0]?.main === "Sunny" ?
                                                sunny : forecast?.weather[0]?.main === "Mist" ? mist :
                                                    forecast?.weather[0]?.main === "Drizzle" ? drizzle :
                                                        sunny} alt="sunny" />
                                    <p>{forecast?.main?.temp}°C</p>
                                    <img src={navigation} alt="navigation" />
                                    <p>{forecast?.wind?.speed}km/h</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Col>
            </Row >
        </>
    )
})
export default WeatherCardTwo;