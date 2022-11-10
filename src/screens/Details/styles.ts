import styled from "styled-components/native";

export const StationContentTop = styled.View`
  flex: 1;
  padding: 20px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 182px;

  border-radius: 8px;
  border: 1px solid #00c667;

  margin-bottom: 20px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 2px;
  background: #d9d9d9;

  border-radius: 2px;
  margin: 24px 0;
`;

export const StationContentData = styled.View`
  width: 100%;
  align-items: center;
  flex: 1;
  padding: 0 20px;
`;

export const ContentDataTitle = styled.View`
  align-items: center;
`;

export const ContentDataTitleText = styled.Text`
  font-weight: 700;
  font-size: 24px;
  color: #29292e;
`;

export const ContentDataContainerAll = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const ContentNameContainer = styled.View`
  width: 45%;
`;

export const ContentLocalContainer = styled.View`
  align-items: flex-end;
  width: 45%;
`;

export const ContentDateContainerAll = styled.View`
  margin-bottom: 20px;
`;

export const ContentDateContainer = styled.View`
  width: 45%;
`;

export const NameText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #29292e;
`;

export const NameTextSubtitle = styled.Text`
  font-size: 14px;
`;

export const LocalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #29292e;
`;

export const LocalTextSubtitle = styled.Text`
  font-size: 14px;
`;

export const DateText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #29292e;
`;

export const DateTextSubtitle = styled.Text`
  font-size: 16px;
`;

export const ContentLatLongContainerAll = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const ContentLatContainer = styled.View`
    width: 45%;
`;

export const LatText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #29292e;
`;

export const LatTextSubtitle = styled.Text`
  font-size: 14px;
`;

export const ContentLonContainer = styled.View`
align-items: flex-end;
    width: 45%;
`;

export const LonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #29292e;
`;

export const LonTextSubtitle = styled.Text`
  font-size: 14px;
`;
