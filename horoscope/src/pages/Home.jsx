import Form from "../components/Form";
import Results from "../components/Results/Results";
function Home({handleSubmit, result}) {

   
   return (
      <>
         <div className="container">
            <Form handleSubmit={handleSubmit}/>
            {result ? <Results result={result} />: ""}
         </div>
      </>
   );
}

export default Home;
