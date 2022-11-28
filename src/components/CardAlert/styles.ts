import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    width: 100%;
    height: 100px;

    border: 1px solid #EA4335;
    border-left-width: 10px;
    border-radius: 8px;

    margin-bottom: 16px;
`;

export const ContainerText = styled.View``;

export const TitleAlert = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color: #EA4335;

    margin-bottom: 8px;
`;

export const TipeOfAlert = styled.Text`
    font-size: 16px;
    font-weight: lighter;
    color: #EA4335;
`;