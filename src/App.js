import "./App.css";
import { Question } from "components/Question";
import { useTypeForm } from "context/typeformContext";
import { ProgressBar } from "components/ProgressBar";
import { typeFormStructure } from "data/typeformStructure";
import logo from "./assets/growthX_logo.png";
import { useLoadTime } from "hooks/useLoadTime";
import { Loading } from "components/Loading";

function App() {
  const { typeFormState } = useTypeForm();
  const questionNo = typeFormState.questionNo;
  const item = typeFormStructure[questionNo];
  const { isLoading } = useLoadTime();

  console.log(typeFormState.response)

  return (
    <div className="App">
      {isLoading ? (
        <Loading isLoading={isLoading} />
      ) : (
        <>
          {item.no !== "" && <ProgressBar />}
          <img
            src={logo}
            alt="logo"
            style={{ width: "100px", margin: "1.5rem" }}
          />
          {questionNo === 8 ? (
            <p className="center-bold">All done! Thanks for your time.</p>
          ) : (
            <Question questionNo={questionNo} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
