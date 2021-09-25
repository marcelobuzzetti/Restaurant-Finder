import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg'
import restaurante from '../../assets/restaurante-fake.png'
import { Container, Search, Logo, Wrapper, CarouselTitle, Carousel } from './styles';
import { Card, RestaurantCard, Modal, Map } from '../../components'

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };

    return (
    <Wrapper>
        <Container>
            <Search>
                <Logo src={logo} alt="Logo do Restaurante" />
                <TextField
                    label='Pesquisar'
                    outlined
                    trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    ><Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                </TextField>
                <CarouselTitle>Na sua Área</CarouselTitle>
                <Carousel {...settings}>
                    <Card photo={restaurante} title="Teste"/>
                    <Card photo={restaurante} title="Teste"/>
                    <Card photo={restaurante} title="Teste"/>
                    <Card photo={restaurante} title="Teste"/>
                    <Card photo={restaurante} title="Teste"/>
                </Carousel>
            </Search>
            <RestaurantCard />
        </Container>
        <Map />
        {/* <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}/> */}
    </Wrapper>
    )
};

export default Home;