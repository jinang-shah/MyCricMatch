import './App.css';
import {useEffect,useState} from 'react'
import {Button, Grid} from '@material-ui/core'
import Navbar from './Components/Navbar';
import MyCard from './Components/MyCard';
import {getMatches} from './Api/Api'

function App() {

  const [Matches, setMatches] = useState([])
  const numbers = [1, 2, 3, 4, 5];
  
  useEffect(()=>{
    getMatches()
    .then((data)=>setMatches(data.matches))
    .catch((err)=>console.log("Could not load Data"));
  
  },[])

  return (
    <div className="App">
      <Navbar />   
      <Grid container >
          <Grid sm={1}></Grid>
          <Grid sm={10}>
              {/* {
                numbers.map((number) => <div ><MyCard /></div>)
              } */}
              {
                Matches.map((match)=> 
                <div key={match.unique_id}>
                    <MyCard match={match}  />
                </div>)
              }
            </Grid>  
          <Grid></Grid>  
      </Grid>
      
      {
         Matches.map((match)=>{
           
         })
      }
    
    </div>
  );
}

export default App;
