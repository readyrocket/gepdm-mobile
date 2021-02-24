import styled from '@emotion/native';

import { colors } from '../../theme/theme';

const _Wrapper = styled.View`
  background-color: ${colors.e_tertiary};
  margin-top: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  min-height: 100px;
`;

const _Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const _Title = styled.Text`
  font-size: 18px;
  color: ${colors.e_primary};
`;
const _DescriptionWrapper = styled.Text`
  flex-direction: row;
  align-items: center;
`;

const _Description = styled.Text`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 100;
  color: ${colors.e_secondary};
  line-height: 16px;
	flex-wrap: wrap;
	width: 250px;
`;
const _ImageProfile = styled.Image`
  width: 60px;
  height: 55px;
  margin-right: 15px;
  border-radius: 50px;
`;


export const Screen = {
  layout: {
    Wrapper: _Wrapper,
    Container: _Container,
    DescriptionWrapper: _DescriptionWrapper,
  },
  with: {
    Title: _Title,
    Description: _Description,
    ImageProfile: _ImageProfile,
  },
};
