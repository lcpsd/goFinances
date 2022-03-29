import { 
    Container,
    Header,
    Title,
    Icon,
    Amount,
    LastTransaction,
    Footer
} from "./styles"

const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
}

interface Props{
    title: string,
    amount: number,
    lastTransaction: string
    type: 'up' | 'down' | 'total'
}

export default function HightlightCard({title, amount, lastTransaction, type}:Props){

    return(
        <Container type={type}>
            <Header>
                <Title type={type}>{title}</Title>
                <Icon name={icon[type]} type={type}/>
            </Header>

            <Footer>
                <Amount type={type}>R${amount}</Amount>
                <LastTransaction type={type}>{lastTransaction}</LastTransaction>
            </Footer>
        </Container>
    )
}