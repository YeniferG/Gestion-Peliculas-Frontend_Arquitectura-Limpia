function Movies({ pelicula }) {

    return (
        <div>
            <div className="card mb-3 text-center">
                <h3 class="card-header">{pelicula.titulo}</h3>
                <div className="card-body">
                    {pelicula.imagenURL != null ? 
                        <img src={pelicula.imagenURL}/> :
                        <img width={"185px"} height={"278px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFafFREAsfIkQNeZCFLgHmIpw5as8oRm6N1tSlAPB-4pcr9DLZoe__8W3jWCD09G3cIas&usqp=CAU"/>
                    }                    
                </div>
                <div class="card-body">
                    <p class="card-text">{pelicula.sipnosis}</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Duración: {pelicula.duracion}</li>
                    <li class="list-group-item">Generos: {pelicula.genero}</li>
                </ul>
                <div class="card-body">
                    <a href={pelicula.videoURL} target={"_blank"} class="card">Ver Pelicula</a>                    
                </div>
                <div class="card-footer text-muted">
                    Año: {pelicula.anio}
                </div>
            </div>
            </div>
    )

}

export default Movies