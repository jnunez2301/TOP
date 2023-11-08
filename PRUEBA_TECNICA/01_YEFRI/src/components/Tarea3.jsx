import { useEffect } from "react";
import useData from "../hooks/useData"

const Tarea3 = () => {
  const { data, getData } = useData();

  useEffect(() => {
    getData();
  }, [])

  return (
    <section className="tarea3-container">
      
        <h2>Mis publicaciones</h2>
        <table>
          <thead>
            <tr>
              <th>Number</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody >

            {
              data && data.map(d => (
                <tr className="table-msg" key={d.id}>
                  <td>{d.id}</td>
                  <td>{d.title}</td>
                  <td>{d.body}</td>
                </tr>
              ))
            }

          </tbody>
        </table>

    </section>
  )
}

export default Tarea3