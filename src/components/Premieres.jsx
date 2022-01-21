import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Accordion } from 'react-bootstrap'
import { getPremieres } from "../utils/get"
import Movies from "./Movies"

function Premieres() {
    const dispatch = useDispatch();
    const { isLoading, premieres, error } = useSelector(state => state.premieres);

    useEffect(() => {
        dispatch(getPremieres())
    }, [])

    useEffect(() => {
        const socket = new WebSocket('ws://' + 'localhost:8080' + '/retrieve/' + 'xyz');
        socket.onmessage = function (m) {
            const data = JSON.parse(m.data);
            console.log("Mensaje: " + data.type);
            dispatch(getPremieres())
        }
    }, [])



    return (
        <div>
            <br/>            
            <h1 className="text-center shadow-lg mb-3">Estrenos</h1>
            {premieres && premieres.map(premier => {
                return (
                    <div key={premier._id}>
                        <Accordion defaultActiveKey='1' flush>
                            <Accordion.Item eventKey='0'><br/>
                                <Accordion.Header className="shadow-lg">{premier.name}</Accordion.Header>
                                <Accordion.Body>
                                    {premier.pelicula &&
                                        Object.keys(premier.pelicula).map((key) => {
                                            return (
                                                <div key={key}>
                                                    <Movies pelicula={premier.pelicula[key]} />
                                                </div>
                                            )
                                        })}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                )
            })}
        </div>
    )
}

export default Premieres;