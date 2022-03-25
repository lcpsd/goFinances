import { 
    Container,
    Header,
    Title,
    Icon,
    Amount,
    LastTransaction,
    Footer
} from "./styles"

export default function HightlightCard(){

    return(
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name="arrow-up-circle"/>
            </Header>

            <Footer>
                <Amount>R$10.000,00</Amount>
                <LastTransaction>A última entrada é de XYZ de ABCD</LastTransaction>
            </Footer>
        </Container>
    )
}