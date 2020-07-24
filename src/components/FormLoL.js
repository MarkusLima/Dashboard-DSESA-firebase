import React, { useState } from 'react';
import { Form, Button, Col, Container, Card } from 'react-bootstrap';
import firebase from '../Firebase';

export default function FormLol() {
    const [author, setAuthor] = useState('');
    const [dtCrawler, setDtCrawler] = useState('');
    const [url, setUrl] = useState('');
    const [urlImg, setUrlImg] = useState('');
    const [title, setTitle] = useState('');
    const [msg, setMsg] = useState('');

    function setFirebase() {
        if( url !== ''){
            try {
                firebase.database().ref('/newsLOL/001/posts').push({
                    author: author,
                    published: dtCrawler,
                    main_image: url,
                    title: title,
                    content: msg,
                    url: urlImg
                }).then(() => {
                    setTitle('');
                    setAuthor('');
                    setDtCrawler('');
                    setUrl('');
                    setMsg('');
                    setUrlImg('');
                    alert('Sua postagem foi enviada com sucesso!')
                })   
            } catch (error) {
                alert(error)
            }
        }else{
            alert('Tem campos faltando!')
        }
    }

    return (
        <Container>
            <hr />
            <Card bg='danger'>
                <Card.Header> <h4 className="text-white">Enviar Noticias Lol</h4></Card.Header>
                <Form style={{ margin: 10 }}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label className="text-white">Author da Noticia</Form.Label>
                            <Form.Control type="text" placeholder="Ex.: Globo.com" value={author} onChange={event => setAuthor(event.target.value)} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label className="text-white">Data da Captura</Form.Label>
                            <Form.Control type="text" placeholder="Ex.:20:56h 15-08-2020" value={dtCrawler} onChange={event => setDtCrawler(event.target.value)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label className="text-white">Url Da Imagem</Form.Label>
                            <Form.Control type="text" placeholder="Ex.: http://p2.trrsf.com/image/fget/cf/800/450/middle/s1.trrsf.com/atm/3/core/_img/terra-logo-white-bg-v3.jpg"
                                value={url} onChange={event => setUrl(event.target.value)}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label className="text-white">URL da Noticia</Form.Label>
                        <Form.Control placeholder="E.: https://globo.com/noticia" value={urlImg} onChange={event => setUrlImg(event.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label className="text-white">Titulo da Noticia</Form.Label>
                        <Form.Control placeholder="Bla bla bla..." value={title} onChange={event => setTitle(event.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="text-white">Conteudo da Noticia</Form.Label>
                        <Form.Control as="textarea" rows="3" placeholder="Bla bla bla..." value={msg} onChange={event => setMsg(event.target.value)} />
                    </Form.Group>

                    <Button variant="primary" type="button" onClick={setFirebase}>Enviar</Button>
                </Form>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        </Container>
    )
}