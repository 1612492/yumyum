import Gallery from './components/gallery';
import Header from './components/header';
import { Provider } from './provider';
import Card from '../../components/card';

const HomePage = () => {
  return (
    <Provider>
      <Card>
        <Header />
        <Gallery />
      </Card>
    </Provider>
  );
};

export default HomePage;
