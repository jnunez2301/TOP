import { useEffect } from "react";
import useData from "../hooks/useData"

const Tarea3 = () => {
  const { data, getData } =  useData();

  useEffect(() => {
    getData();
  }, [])
  console.log(data);
  console.log(data);
  return (
    <section className="tarea3-container">
      <div>
        <h2>Mis publicaciones</h2>
        <hr />
      </div>
      <div>
        <table>
          <thead>
            <td>
              <tr>Title</tr>
            </td>
            <td>
              <tr>Body</tr>
            </td>
          </thead>
          <tbody>
            <td>
              <tr>Nombre</tr>
            </td>
            <td>
              <tr>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nemo officiis suscipit consequatur. Repellat dolor sed magnam recusandae nostrum voluptate ab. Tempora culpa, iusto quae deleniti corporis alias et dignissimos.</tr>
            </td>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Tarea3