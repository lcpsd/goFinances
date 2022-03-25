import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize'
import {Feather} from '@expo/vector-icons'

export const Container = styled.View`
    flex: 1;
    background: ${({theme}) => theme.colors.background};
`

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background:  ${({theme}) => theme.colors.primary};

    justify-content: flex-start;
    align-items: center;
`

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 ${RFValue(24)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: ${RFValue(50)}px;

`

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`

export const Photo = styled.Image`
    width: ${RFValue(55)}px;
    height: ${RFValue(55)}px;
    border-radius: 100px;
`

export const User = styled.View`
    margin-left: ${RFValue(10)}px;
`

export const UserGreeting = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme}) => theme.fonts.medium};
`

export const UserName = styled.Text`
    color: ${({theme}) => theme.colors.shape};
`
export const Icon = styled(Feather)`
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`

export const HightlightCards = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle: {paddingHorizontal: 24}
})`
    width: 100%;
    position: absolute;

    margin-top: ${RFPercentage(20)}px;
`