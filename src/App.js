import './App.css';
import { Question } from 'components/Question';
import { useTypeForm } from 'context/typeformContext';
import { ProgressBar } from 'components/ProgressBar';
import { typeFormStructure } from 'data/typeformStructure';
import logo from "./assets/growthX_logo.png"

function App() {
  const {typeFormState} = useTypeForm();
  const questionNo = typeFormState.questionNo
  const item = typeFormStructure[questionNo];
  console.log(typeFormState?.response)
  return (
    <div className="App">
      {(item.no !== "") && <ProgressBar />} 
      <img src={logo} alt="logo" style={{width: "100px", margin:"1.5rem"}}/>
      {questionNo === 8 ? <p className='center-bold'>All done! Thanks for your time.</p> :
      <Question questionNo={questionNo}/>}
    </div>
  );
}

export default App;