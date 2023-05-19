import { useRef, useState } from 'react';
import Styling from './Sty_App';

function App() {

const[Start,setStart]=useState('Start')
const[split,setsplit]=useState(false)
const[Reset,setReset]=useState(true)
const[time,setTime]=useState(0)
const[time1,setTime1]=useState(0)
const[showsplit,setshowsplit]=useState(true)
const intervalRef = useRef(null);
const intervalRef1=useRef(null)
const [datashow,setdatashow]=useState([])



const Change=()=>{

if(Start==='Start'){
  setshowsplit(false)
  setStart('Pause')
  setsplit(true)
  setReset(false)
  setTime1(0)

  intervalRef1.current = setInterval(() => {
    setTime1((prevTime) => prevTime + 10);
  }, 10);

  intervalRef.current = setInterval(() => {
    setTime((prevTime) => prevTime + 10);
  }, 10);

}else{
  setStart('Start')
  setsplit(false)
  setReset(true)
  clearInterval(intervalRef.current);
  clearInterval(intervalRef1.current);
  setdatashow([...datashow,{id:datashow.length,a:formatTime(time1),b:'Pause'}])

} }

const splitshow=()=>{
  setdatashow([...datashow,{id:datashow.length,a:formatTime(time1),b:'Split'}])
  console.log(datashow)
}

const resettime=()=>{
 
  clearInterval(intervalRef.current); 
  setTime(0)
  clearInterval(intervalRef1.current);
  setTime1(0)
  
}

const formatTime = (time) => {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000));
 
  return `${hours.toString().padStart(2, '0')}:
  ${minutes.toString().padStart(2, '0')}:
  ${seconds.toString().padStart(2, '0')}:
  ${milliseconds.toString().padStart(3,'0')}

  `;
};






  return <Styling>
    <div className='main'>
    <div className="Stopwatch">
    
      <div className='function'>
        <div className='time'>{formatTime(time)}</div>
       <div className='time_split'>{showsplit?'SPLIT': formatTime(time1)}</div>
        <button onClick={Change} className={Start} >{Start}</button>
        <button onClick={splitshow}  disabled={!split} className={split?'enable_split':'disable_split'}> Split</button>
        <button onClick={resettime} disabled={!Reset} className={Reset?'enable_reset':'disable_reset'} > Reset </button>
      </div>
      <hr/>
      <table>
        <thead>
    
        </thead>
        {datashow.map(item =>(
          <tbody>
          <tr key={item.id}>
            <td className='id'> {`#${item.id+1}`}</td>
            <td className={`${item.b}_td ${item.b}_cl`} >{item.a} </td>
            <td className={`${item.b}_td state`}>{item.b}</td>
           </tr>
           </tbody>
        ))}

      </table>
     

    </div>
    </div>
    </Styling>
 
}

export default App;
