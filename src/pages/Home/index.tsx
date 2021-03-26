import { Container } from './styles';
import notFound from '../../assets/not.svg';

function Home(){
  return(
    <Container>
      <h1>Em breve!   :)</h1>
      <img src={notFound} />
    </Container>
  );
}

export default Home;
