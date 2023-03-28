import './App.css';
import { Question } from 'components/Question';
import { useTypeForm } from 'context/typeformContext';
import { ProgressBar } from 'components/ProgressBar';
import { typeFormStructure } from 'data/typeformStructure';

function App() {
  const {typeFormState} = useTypeForm();
  const questionNo = typeFormState.questionNo
  const item = typeFormStructure[questionNo];
  console.log(item)
  return (
    <div className="App">
      {(item.no !== "") && <ProgressBar />} 
      {questionNo === 8 ? <p className='center-bold'>All done! Thanks for your time.</p> :
      <Question questionNo={questionNo}/>}
    </div>
  );
}

export default App;


// 0. Intro
// 1. text
// 2. text
// 3. autocomplete
// 4. options
// 5. multiple options
// 6. email
// 7. phone