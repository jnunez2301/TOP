import { useEffect, useState } from "react"


const Clock = () => {
  // dia, mes, año, hora, minutos, segundos
  const [todaysDate, setTodaysDate] = useState()

  let d = new Date();

  useEffect(() => {

    const dateInterval = setInterval(() => {
      setTodaysDate({
        day: d.getDay(),
        month: d.getMonth(),
        year: d.getFullYear(),
        hour: d.getHours(),
        minute: d.getMinutes(),
        seconds: d.getSeconds(),
      })
    }, 1000);

    return (() => {
      clearInterval(dateInterval)
    })
  }, [todaysDate])

  return (
    <>
      {todaysDate ? 
      <>
      <div>
        <h2 className="clock-title">Hora y Fecha Actual</h2>
      </div>
      <section className="clock-container">
        <div className="date">
          <div>
            <h2 className="date-text">{todaysDate.day}</h2>
            <p>Dia</p>
          </div>
          <div>
            <h2 className="date-text">
              / {todaysDate.month} /
            </h2>
            <p>Mes</p>
          </div>
          <div>
            <h2 className="date-text">
              {todaysDate.year}
            </h2>
            <p>Año</p>
          </div>
      </div>
      <div className="time">
        <div>
          <h2 className="date-text">{todaysDate.hour}</h2>
          <p>Hora</p>
        </div>
        <div>
          <h2 className="date-text">  
          : {todaysDate.minute} :</h2>
          <p>Minutos</p>
        </div>
        <div>
          <h2 className="date-text">{todaysDate.seconds}</h2>
          <p>Segundos</p>
        </div>
      </div>
    </section >
    </>
    : 
    'Loading...'
  }
    </>
  )
}

export default Clock