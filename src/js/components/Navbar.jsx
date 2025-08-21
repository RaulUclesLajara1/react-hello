const Navbar = () =>{
    return(
        <div className="container-fluid bg-dark">
            <div className="row bg-dark d-flex justify-content-between text-light">
                <div className="col-6 text-center">
                    <p>Start Bootstrap</p>
                </div>
                <div className="col-6 d-flex g-6">
                    <p className="me-4">Home</p>
                    <p className="me-4">About</p>
                    <p className="me-4">Services</p>
                    <p>Contact</p>
                </div>
            </div>

        </div>
        

    )

}
export default Navbar