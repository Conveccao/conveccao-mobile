import { useState } from 'react';

import {
  Card,
  ImageStation,
  StationInformationContainer,
  StationContent,
  StationNameTitle,
  StationName,
  StationLocalTitle,
  StationLocal,
} from "./styles";

type StationProps = {
  name: string;
  reference: string;
  link: string;
  onPress: () => void;
};

export default function CardStation( {name, reference, link, onPress}: StationProps ) {
  return ( 
    <>
      <Card onPress={onPress}>
        <ImageStation source={{uri: link}}/>
        <StationInformationContainer>
          <StationContent>
            <StationNameTitle>Nome da estação</StationNameTitle>
            <StationName>{name}</StationName>
          </StationContent>
          <StationContent>
            <StationLocalTitle>Localização</StationLocalTitle>
            <StationLocal>{reference}</StationLocal>
          </StationContent>
        </StationInformationContainer>
      </Card>
    </>
  );
}
