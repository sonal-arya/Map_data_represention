import logo from './logo.svg';
import './App.css';
import StateDate from './components/StateDate';
import StateMap from './components/StateMap';

function App() {
  return (
   
    <div className='map_container shadow bg-body border rounded-4'>
      <div>
      <h2 className="heading-blue">
      NATIONAL REPORT CARD
    </h2>
    <p className="title-grey-sm" id="select-info">
      Please select a State on the interactive map or search
      for the name below to continue.
    </p>
      </div>
      <div className=' d-flex justify-content-between'>
      <StateDate />
      <StateMap />
      </div>
    
    </div>



  );
}

export default App;
