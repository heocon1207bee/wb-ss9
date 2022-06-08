import './App.css';
import {useState} from 'react'
import {Oval} from 'react-loader-spinner'

function App() {

  const [data, editData] = useState(new Array)
  const [isLoading, editLoading] = useState(false)

  const fetchData = async () => {
    editLoading(true)
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    if(res.ok) {
      const dataRes =  await res.json()
      editData(dataRes)
    }else {
      alert('Error')
    }
    await editLoading(false)
  }

  console.log(data)

  return (
    <div className="App">
      <button onClick={fetchData}>FETCH DATA</button>
      {isLoading && <Oval
                      ariaLabel="loading-indicator"
                      height={20}
                      width={20}
                      strokeWidth={5}
                      color="gray"
                      secondaryColor="smoke"
                    />
      }
      <ul>
        {
          data.map((data, index) => {
            return (
              <li key={index}>
                {data.title}
                <br></br>
                <a href={data.url}>{data.url}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default App;
