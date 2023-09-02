import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Movie from './components/Movie';
import movies from './movies.json';
function App() {
  const style = {
    backgroundColor: 'ffffff',

  };
  return (
    <div className="container-fluid" >
       <Header></Header>
       <div style={style}>
       <div className='row'>
        {
          movies.map((el) => {
            return(
              <div className='col-md-3'>
               <Movie title={el.Title} imdbID={el.imdbID}  year={el.Year} poster={el.Poster}></Movie>
              </div>
            )
          })
        }
       </div>
       </div>
    </div>
  );
}

export default App;
