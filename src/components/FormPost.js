import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Container, Card } from 'react-bootstrap';
import firebase from '../Firebase';

export default function FormNews() {
    const [dt, setDt] = useState(null);
    const [hand, setHand] = useState(null);
    const [content, setContent] = useState(null);
    const [author, setAuthor] = useState(null);
    const [lt, setLt] = useState(null);

    useEffect(() => {
        function get_random(list) {
            const lt = list[Math.floor((Math.random() * list.length))];
            setLt(lt);
        }
        get_random([
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/Autoestima-dedos.jpg?alt=media&token=ea860783-2221-4538-9137-d98b7ad5a8f9",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/Autoestima-entre-primos.jpg?alt=media&token=42f1c209-bfde-4d26-9430-9e9c41d8c2f3",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/Autoestima.jpg?alt=media&token=56660b49-52a7-40bd-a2f9-20c56dfc479b",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/como-fazer-fotos-de-fogos-de-artificio.jpeg?alt=media&token=f52c5ae9-4794-4f69-a27c-9bfed42b0d77",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/hqdefault.jpg?alt=media&token=b8431bf5-7634-4942-b98e-14670267447e",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/maxresdefault%20(1).jpg?alt=media&token=bd2b00ca-8905-442b-ad1c-28d9601b1e6e",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/maxresdefault.jpg?alt=media&token=01658c6d-2095-40c5-a457-87936d9b7c3d",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/paisagem-ouro-preto-1008049370.jpg?alt=media&token=6a8715bf-3609-4611-a3f4-352008b4a328",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/super_imgfogos_de_artificio_estao_cada_vez_mais_silenciosos.jpeg?alt=media&token=6bc3aa71-b8b6-45df-a329-b65cc7f2c24c",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/img1%20(1).jpeg?alt=media&token=6438e646-bf56-4f45-858b-caf71fef1117",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/img1%20(1).jpg?alt=media&token=05cdf1fa-b160-46b1-b937-d32866c9e386",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/img1%20(2).jpg?alt=media&token=f7fc9ffb-7824-4c52-b28b-83310a8372b2",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/img1%20(3).jpg?alt=media&token=230bbfa5-e35e-4bd7-9aeb-6f0a71b0929b",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/img1%20(4).jpg?alt=media&token=6161530e-b96d-435d-b508-7b1e573c8c72",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/img1%20(5).jpg?alt=media&token=341b45e4-c6c4-46df-a54d-d4e0492d2384",
            "https://firebasestorage.googleapis.com/v0/b/dos-sonhos-eu-sou-o-amor.appspot.com/o/img1%20(6).jpg?alt=media&token=8a57d108-d603-479e-a4d7-f878b68b6df5"

        ])
    }, [])

    useEffect(() => {
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
        var dataAtual = dia + "/" + mes+" - "+ hora + ":" + minuto;
        setDt({ dataAtual })
    }, [])

    function setFirebase() {
        if (hand != null && content != null && author != null) {
            try {
                if (content.length > 2) {
                    firebase.database().ref('/' + hand).push({
                        tema: hand,
                        content: content,
                        author: author,
                        dt: dt,
                        img: lt,
                        curtidas: 1,
                        comentarios: 0,
                        comments: 0
                    })
                    alert("Menssagem salva!")
                }
            } catch (error) {
                alert(error)
            }

        } else {
            alert("Preencha todos os dados do formulário!")
        }
    }

    const handleChange = (event) => {
        setHand(event.target.value)
    }

    const handleSubmit = (event) => {
        //alert('Your favorite flavor is: ' + value);
        event.preventDefault();
    }

    return (
        <Container>
            <hr />
            <Card bg='danger'>
                <Card.Header> <h4 className="text-white">Enviar Post</h4></Card.Header>
                <Form style={{ margin: 10 }} onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label className="text-white">Autor</Form.Label>
                            <Form.Control type="text" placeholder="Digite autor" value={author} onChange={event => setAuthor(event.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label className="text-white">Tema</Form.Label>
                            <select className="form-control" value={hand} onChange={handleChange}>
                                <option value="Amizade">Amizade</option>
                                <option value="Amor">Amor</option>
                                <option value="Amor Proprio" >Amor Proprio</option>
                                <option value="Aniversario" >Aniversario</option>
                                <option value="Autoestima" >Autoestima</option>
                                <option value="Auto Ajuda" >Auto Ajuda</option>
                                <option value="Boa noite" >Bom noite</option>
                                <option value="Boa tarde" >Boa tarde</option>
                                <option value="Bom dia" >Bom dia</option>
                                <option value="Carta Para Ex" >Carta Para Ex</option>
                                <option value="Decepção">Decepção</option>
                                <option value="Decepção Amorosa" >Decepção Amorosa</option>
                                <option value="Declaração de Amor" >Declaração de Amor</option>
                                <option value="Desilusão" >Desilusão</option>
                                <option value="Desilusão Amorosa" >Desilusão Amorosa</option>
                                <option value="Dia das maes" >Dia das maes</option>
                                <option value="Dia dos pais" >Dia dos pais</option>
                                <option value="Familia" >Familia</option>
                                <option value="Filhos" >Filhos</option>
                                <option value="Fim de Relacionamento" >Fim de Relacionamento</option>
                                <option value="Frustação" >Frustação</option>
                                <option value="Ilusão" >Ilusão</option>
                                <option value="Motivação" >Motivação</option>
                                <option value="Namoro" >Namoro</option>
                                <option value="Reciprocidade" >Reciprocidade</option>
                                <option value="Recomeçar" >Recomeçar</option>
                                <option value="Reflexões" >Reflexões</option>
                                <option value="Relacionamento" >Relacionamento</option>
                                <option value="Relacionamento Amoroso" >Relacionamento Amoroso</option>
                                <option value="Saudade" >Saudade</option>
                                <option value="Superação" >Superação</option>
                                <option value="Texto +18">Texto +18</option>
                                <option value="Texto de Amor">Texto de Amor</option>
                                <option value="Texto de Decepção" >Texto de Decepção</option>
                                <option value="Texto de Termino" >Texto de Termino</option>
                                <option value="Texto Para Ex" >Texto Para Ex</option>
                                <option value="Texto Romantico" >Texto Romantico</option>
                                <option value="Texto Sobre a Vida" >Texto Sobre a Vida</option>
                                <option value="Texto Sobre Reciprocidade" >Texto Sobre Reciprocidade</option>
                                <option value="Texto Sobre Relacionamento" >Texto Sobre Relacionamento</option>
            
                            </select>
                        </Form.Group>
                    </Form.Row>


                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="text-white">Conteudo</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Digite seu texto..." value={content} onChange={event => setContent(event.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={setFirebase}>Enviar</Button>
                </Form>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </Container>
    )
}