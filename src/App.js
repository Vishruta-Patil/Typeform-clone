import './App.css';
import { Question } from 'components/Question';
import { useTypeForm } from 'context/typeformContext';

function App() {
  const {typeFormState} = useTypeForm();
  console.log(typeFormState.response)
  return (
    <div className="App" >
      <Question questionNo={typeFormState.questionNo}/>
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