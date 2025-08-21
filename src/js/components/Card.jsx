const Card = ({imagen, titulo, descripcion}) => {
    return(
                <div className="card">
                    <img src={imagen}className="card-img-top" style={{width: "18rem"}}/>
                        <div className="card-body">
                            <h5 className="card-title">{titulo}</h5>
                            <p className="card-text">{descripcion}</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                </div>
    )
}
export default Card