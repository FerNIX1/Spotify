
import "./Sidebar.css";
export const SideBar = () => {
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white side" style={{ width: '280px', height: '100vh' }}>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <a href="#" className="nav-link text-white" aria-current="page">
            <img className="bi me-2" width="16" src="https://res.cloudinary.com/dxdsq6qcw/image/upload/v1706135044/kuehol1j8zrx4ya3upl7.png" height="16" alt="Icon" />
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="nav-link text-white">
            <img className="bi me-2" width="16" src="https://res.cloudinary.com/dxdsq6qcw/image/upload/v1706135189/whdppvwgu1bowdrgc2ni.png" height="16" alt="Icon" />
              Buscar
            </a>
          </li>
          <li>
          </li>
        </ul>
        <hr />
      </div>
    </>
  );
};
