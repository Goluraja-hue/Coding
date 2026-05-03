import { useState } from 'react';
import axios from 'axios';
import User from './Components/User';

const App = () => {
  const [allUser, setallUser] = useState([]);

  const getData = async () => {


    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=100');

    console.log(response.data);

    setallUser(response.data);
  };

  return (
    <div>
      <button onClick={getData}>Get Data</button>



<div className='allCards'>
      {allUser.map(function (elem,idx) {
        return <div key={idx}>
         <User elem = {elem} />
        </div>
      })}
</div>

    </div>
  );
};

export default App;
