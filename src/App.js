import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [isError, setIsError] = useState(false);
  const [scores, setScores] = useState([]);

  const generateContestant = (contestant = {}) => {
    return (
      <div 
      style={{
        display: "flex",
        alignItems: 'center',
        flexDirection: "column",
        padding: "0px 1.5em 3em",
      }}>
        <div style={{marginBottom: "0.75em", whiteSpace: 'break-spaces'}}>
          {'# ' + contestant.number + ' \n' + contestant.name}
        </div>
        <div 
        className="portrait"
        style={{
          display: "flex",
          alignItems: 'center',
          flexDirection: "column",
          animationDelay: `${(contestant.number%3) % (contestant.number / 3)}s`
        }}>
          <div style={{width: '120px', height: '170px', overflow: 'hidden'}}>
            <img style={{objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%'}} src={process.env.PUBLIC_URL + `/${contestant.number}.jpg`}/>
          </div>
          <div style={{width: '140px', position: 'absolute'}}>
            <img style={{width: '100%', boxShadow: '0px 0px 20px rgba(0, 0, 0, .4)'}} src={process.env.PUBLIC_URL + '/portrait.png'} />
          </div>
        </div>
        <div style={{
          width: '80px',
          marginTop: '1.5em',
          color: '#fff',
          backgroundImage: `url('${process.env.PUBLIC_URL}/seal.png')`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '80px',
          lineHeight: '80px',
          fontSize: '1.2em'
        }}>
          {contestant.score || 0}
        </div>
      </div>
    )
  }

  const loadScore = async () => {
    try{
      fetch('score.json').then(res => {
        res.json().then(json => {
          setScores(json.data);
        }) 
      })
      // const res = await axios.get(window.location.origin + '/public/score.json');
      // // const {record} = res.data;
    } catch (err) {
      setIsError(true);
    }
  }

  useEffect(() => {
    loadScore();
  }, []);

  return (
    <div 
      className="App"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/bg.jpg')`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div
        style={{
          width: '100%',
          overflow: 'hidden'
        }}
      >
        <div style={{marginBottom: '1em', fontSize: '3em'}}>Contestant</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {scores.map((score, key) => {
            score.number = key + 1;
            return generateContestant(score);
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
