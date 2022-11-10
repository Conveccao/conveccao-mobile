import React from 'react';
import { Card, TitleAlert, TipeOfAlert, ContainerText } from './styles';

import { Warning } from 'phosphor-react-native';

type CardAlertProps = {
    typeAlert: string;
    onPress?: () => void;
  };
  

export function CardAlert({ typeAlert, onPress }: CardAlertProps) {
  return (
    <>
        <Card onPress={onPress}>
            <Warning size={32} color="#EA4335" weight="fill" />
            <ContainerText>
                <TitleAlert>Alerta - clique para detalhes</TitleAlert>
                <TipeOfAlert>{typeAlert}</TipeOfAlert>
            </ContainerText>
        </Card>
    </>
  );
}