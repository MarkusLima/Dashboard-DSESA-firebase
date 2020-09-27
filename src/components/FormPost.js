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
        var dataAtual = dia + "/" + mes + " - " + hora + ":" + minuto;
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
            } catch (error) {alert(error)}
        } else {alert("Preencha todos os dados do formulário!")}
    }

    const handleChange = (event) => {setHand(event.target.value)}

    const handleSubmit = (event) => {event.preventDefault();}

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
                                <option value="AmizadeFrases de Bob Marley">Frases de Bob Marley</option>
                                <option value="Frases de Amor">Frases de Amor</option>
                                <option value="Poemas de Amizade">Poemas de Amizade</option>
                                <option value="Frases Bonitas">Frases Bonitas</option>
                                <option value="Frases de Saudades">Frases de Saudades</option>
                                <option value="Mensagens de Reflexão">Mensagens de Reflexão</option>
                                <option value="Textos de Amor">Textos de Amor</option>
                                <option value="Frases de Otimismo">Frases de Otimismo</option>
                                <option value="Poemas de Amor">Poemas de Amor</option>
                                <option value="Versos Curtos de Amor">Versos Curtos de Amor</option>
                                <option value="Textos de Amizade">Textos de Amizade</option>
                                <option value="Frases de Fernando Pessoa">Frases de Fernando Pessoa</option>
                                <option value="Versos de Amizade">Versos de Amizade</option>
                                <option value="Frases de Shakespeare">Frases de Shakespeare</option>
                                <option value="Frases fortes de Shakespeare">Frases fortes de Shakespeare</option>
                                <option value="Poesias de Carlos Drummond de Andrade">Poesias de Carlos Drummond de Andrade</option>
                                <option value="Frases de Mario Quintana">Frases de Mario Quintana</option>
                                <option value="Frases de Paulo Coelho">Frases de Paulo Coelho</option>
                                <option value="Frases Dia das Mães">Frases Dia das Mães</option>
                                <option value="Frases de Bom Dia para Alguém Especial">Frases de Bom Dia para Alguém Especial</option>
                                <option value="Cartas de Amor para Namorados">Cartas de Amor para Namorados</option>
                                <option value="Poemas de Saudade">Poemas de Saudade</option>
                                <option value="Frases de Albert Einstein">Frases de Albert Einstein</option>
                                <option value="Mensagens de Aniversário">Mensagens de Aniversário</option>
                                <option value="Frases de Reflexão">Frases de Reflexão</option>
                                <option value="Mensagens para Amigos">Mensagens para Amigos</option>
                                <option value="Frases de Vida">Frases de Vida</option>
                                <option value="Frases de Carlos Drummond de Andrade">Frases de Carlos Drummond de Andrade</option>
                                <option value="Frases de Chico Xavier">Frases de Chico Xavier</option>
                                <option value="Frases de Natal">Frases de Natal</option>
                                <option value="Mensagem para Amiga">Mensagem para Amiga</option>
                                <option value="Frases de Quem Sou Eu">Frases de Quem Sou Eu</option>
                                <option value="Frases Pequenas e Bonitas">Frases Pequenas e Bonitas</option>
                                <option value="Frases de Amizade">Frases de Amizade</option>
                                <option value="Frases para levantar a autoestima">Frases para levantar a autoestima</option>
                                <option value="Frases de Nietzsche">Frases de Nietzsche</option>
                                <option value="Versos Românticos">Versos Românticos</option>
                                <option value="Frases para Namorada">Frases para Namorada</option>
                                <option value="Poemas que Falam quem eu sou">Poemas que Falam quem eu sou</option>
                                <option value="Frases Românticas">Frases Românticas</option>
                                <option value="Frases de Decepção Amorosa">Frases de Decepção Amorosa</option>
                                <option value="Frases de Amigos">Frases de Amigos</option>
                                <option value="Frases de Augusto Cury">Frases de Augusto Cury</option>
                                <option value="Poemas Românticos">Poemas Românticos</option>
                                <option value="Poemas de Amigos">Poemas de Amigos</option>
                                <option value="Poemas Famosos de Amor">Poemas Famosos de Amor</option>

                                <option value="Frases para Amiga">Frases para Amiga</option>
                                <option value="Frases de Motivação">Frases de Motivação</option>
                                <option value="Frases sobre Família">Frases sobre Família</option>
                                <option value="Frases de Despedida">Frases de Despedida</option>
                                <option value="Mensagens de Feliz Aniversário">Mensagens de Feliz Aniversário</option>
                                <option value="Frases de Impacto">Frases de Impacto</option>
                                <option value="Frases Tristes">Frases Tristes</option>
                                <option value="Mensagens de Amizade">Mensagens de Amizade</option>
                                <option value="Poesia de Amigas para Sempre">Poesia de Amigas para Sempre</option>
                                <option value="Frases de Aniversário">Frases de Aniversário</option>
                                <option value="Poesia para o Dia das Mães">Poesia para o Dia das Mães</option>
                                <option value="Frases para Decepção">Frases para Decepção</option>
                                <option value="Frases Carinhosas de Amizade">Frases Carinhosas de Amizade</option>
                                <option value="Frases de Escritores Famosos">Frases de Escritores Famosos</option>
                                <option value="Poesias de Amor de Vinícius de Moraes">Poesias de Amor de Vinícius de Moraes</option>
                                <option value="Frases sobre Sorriso">Frases sobre Sorriso</option>
                                <option value="Frases do Pequeno Príncipe">Frases do Pequeno Príncipe</option>
                                <option value="Cartas de Amizade">Cartas de Amizade</option>
                                <option value="Epígrafe para TCC">Epígrafe para TCC</option>
                                <option value="Mensagens de Natal">Mensagens de Natal</option>
                                <option value="Poemas Quem Sou Eu">Poemas Quem Sou Eu</option>
                                <option value="Amor">Amor</option>
                                <option value="Mensagens curtas de Amor">Mensagens curtas de Amor</option>
                                <option value="Poemas sobre o Aniversário">Poemas sobre o Aniversário</option>
                                <option value="Poesia Felicidade de Fernando Pessoa">Poesia Felicidade de Fernando Pessoa</option>
                                <option value="Frases de Parabéns">Frases de Parabéns</option>
                                <option value="Frases Simples para o Namorado">Frases Simples para o Namorado</option>
                                <option value="Poemas de Machado de Assis">Poemas de Machado de Assis</option>
                                <option value="Poesia sobre Amizade Verdadeira">Poesia sobre Amizade Verdadeira</option>
                                <option value="Frases de Tristeza">Frases de Tristeza</option>
                                <option value="Frases de Alegria">Frases de Alegria</option>
                                <option value="Frases Espíritas">Frases Espíritas</option>
                                <option value="Frases Bonitas sobre Saudades">Frases Bonitas sobre Saudades</option>
                                <option value="Textos Hugo Ribas">Textos Hugo Ribas</option>
                                <option value="Textos Bia Civa">Textos Bia Civa</option>
                                <option value="Textos Gisele Ribeiro">Textos Gisele Ribeiro</option>
                                <option value="Textos Andrei Santos">Textos Andrei Santos</option>
                                <option value="Textos Viviane de Oliveira Teixeira">Textos Viviane de Oliveira Teixeira</option>
                                <option value="Textos Tiffany Guimarães">Textos Tiffany Guimarães</option>
                                <option value="Textos Raquel Gonçalves">Textos Raquel Gonçalves</option>
                                <option value="Textos Frederico Elboni">Textos Frederico Elboni</option>
                                <option value="Textos Gustavo Lacombe">Textos Gustavo Lacombe</option>
                                <option value="Textos Iande Albuquerque">Textos Iande Albuquerque</option>
                                <option value="Textos Victor Fernandes">Textos Victor Fernandes</option>
                                <option value="Textos Matheus Jacob">Textos Matheus Jacob</option>
                                <option value="Textos Matheus Rocha">Textos Matheus Rocha</option>
                                <option value="Textos Marcio Rodrigues">Textos Marcio Rodrigues</option>
                                <option value="Textos Guilherme Pintto">Textos Guilherme Pintto</option>
                                <option value="Textos Jay Leonardo">Textos Jay Leonardo</option>
                                <option value="Textos Yami Couto">Textos Yami Couto</option>
                                <option value="Textos Duda Costa">Textos Duda Costa</option>
                                <option value="Textos Diego Henrique">Textos Diego Henrique</option>

                                <option value="Textos Isabella Gonçalves">Textos Isabella Gonçalves</option>
                                <option value="Textos Raonih Rocco">Textos Raonih Rocco</option>
                                <option value="Textos Rafaela Paulino">Textos Rafaela Paulino</option>
                                <option value="Textos Nathali Macedo">Textos Nathali Macedo</option>
                                <option value="Textos Paulinho Rahs">Textos Paulinho Rahs</option>
                                <option value="Textos Steph Luz">Textos Steph Luz</option>
                                <option value="Textos Pamela Marques">Textos Pamela Marques</option>
                                <option value="Textos Andrea Goes">Textos Andrea Goes</option>
                                <option value="Textos Brendow H. Godoi">Textos Brendow H. Godoi</option>
                                <option value="Textos Drica Serra">Textos Drica Serra</option>
                                <option value="Textos Edgard Abbehusen">Textos Edgard Abbehusen</option>
                                <option value="Textos Ester Chaves">Textos Ester Chaves</option>
                                <option value="Textos Mallu Navarro">Textos Mallu Navarro</option>
                                <option value="Textos Nivia Maria">Textos Nivia Maria</option>

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