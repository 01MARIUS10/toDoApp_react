import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
    <main>
      <section className="vh-100  position-relative" style={{backgroundColor: "#eee"}}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-10 h-100 d-flex justify-content-center align-items-center">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
