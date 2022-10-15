import React from "react";

import navigation from '../../routes/stack'

import { useNavigation } from "@react-navigation/native"

// import { propsStack } from "../../routes/Stack/Models";


import {
    Container,
    TitlePage,
    ButtonStart,
    TextButtonStart
} from './styles';

export default function Welcome() {
    // const navigation = useNavigation<propsStack>()
    return (
        <Container>
            <TitlePage>
                Obtenha os dados na sua mão
            </TitlePage>
            <ButtonStart>
                <TextButtonStart
                    // onPress={() => navigation.navigate('Main')} 
                >
                    COMEÇAR
                </TextButtonStart>
            </ButtonStart>
        </Container>
    );
}   