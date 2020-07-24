import React, { useState, useEffect } from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import firebase from '../Firebase';

export default function Videos() {
    
    const [statusRobo, setStatusRobo] = useState();
    const [status, setStatus] = useState();
    const [date, setDt] = useState();


    function getYoutube() {
        const url = 'https://www.googleapis.com/youtube/v3/search?q=flamengo&part=snippet&order=date&key=AIzaSyAp_BChCsYaufld1G8DktypJTk6Yc_sWXs&maxResults=50';

        fetch(url).then(res => res.json()).then(res => {
            //setListas(res)
            // console.log("Buscou Videos----------------------------------------------------")
            // console.log(res)

            firebase.database().ref('/apiYoutube/001').set(res)
            // alert("Ok enviado com sucesso (Videos")
            // submitYoutube();
        }).then(() => {
            firebase.database().ref('/status/001').set(date)
            alert('Enviado com sucesso!')
        })
    }

    function DataHora() {
        var dt = new Date();
        var dia = dt.getDate();
        if (dia < 10) {
            dia = "0" + dia;
        }
        var mes = dt.getMonth() + 1;
        if (mes < 10) {
            mes = "0" + mes;
        }
        var hora = dt.getHours();
        if (hora < 10) {
            hora = "0" + hora;
        }
        var minuto = dt.getMinutes();
        if (minuto < 10) {
            minuto = "0" + minuto;
        }
        var dataAtual = hora + ":" + minuto + " - " + dia + "/" + mes;

        setDt(dataAtual)
        return date;
    }

    useEffect(() => {
        DataHora();
        firebase.database().ref('/status/001').on('value', (snapshot) => {
            setStatus(snapshot.val());
        });
        firebase.database().ref('/roboDeBuscas/001').on('value', (snapshot) => {
            setStatusRobo(snapshot.val());
        });

    }, [])


    return (
        < Container>
            <Card className="text-center">
                <Card.Header>Flapp Videos</Card.Header>
                <Card.Body>
                    <Card.Title>Robo: {statusRobo}</Card.Title>
                    <Card.Text>Função para atualizar Videos do Flapp</Card.Text>
                    <Button variant="primary" onClick={getYoutube}>Atualizar</Button>
                </Card.Body>
                <Card.Footer className="text-muted">Atualizado em: {status}</Card.Footer>
            </Card>
        </ Container>
    )
}