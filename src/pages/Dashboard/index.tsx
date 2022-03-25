import HightlightCard from '../../components/HighlightCard'
import { 
    Container, 
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    UserWrapper,
    Icon,
    HightlightCards
} from './styles'

export function Dashboard(){
    return(
        <Container>

            <Header>
                <UserWrapper>

                    <UserInfo>
                        <Photo 
                        source={{uri: 'https://avatars.githubusercontent.com/u/26039469?v=4'}}
                        />
                        
                        <User>

                            <UserGreeting>
                                Olá,
                            </UserGreeting>

                            <UserName>
                                João da Silva
                            </UserName>

                        </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>
            </Header>

            <HightlightCards>
                <HightlightCard/>
                <HightlightCard/>
                <HightlightCard/>
            </HightlightCards>
        </Container>
    )
}
