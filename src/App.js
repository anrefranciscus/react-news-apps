import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Container from './components/Container';
import Loading from './components/Loading';
import Error from './components/Error';
import { getNewsService } from './service/getNewsService';
import NewsList from './components/NewsList';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchNewsApp = async () => {
      setLoading(true);
      const response = await getNewsService({
        searchQuery: 'microsoft',
      });
      console.log(articles);
      if (!response) {
        setLoading(false);
        setError(true);
        return;
      }
      setLoading(false);
      setArticles(response.data.articles);
    };
    fetchNewsApp();
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        {loading && <Loading />}
        {error && <Error />}
        {!loading && articles.length > 0 && <NewsList articles={articles} />}
      </Container>
    </>
  );
}

export default App;
