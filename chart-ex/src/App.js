import logo from './logo.svg';
import './App.css';
import { Bar,Line,Pie } from "react-chartjs-2";

function App() {
  return (
    <div>
        <Pie width={400}
             height={600}
             options={{
              maintainAspectRatio: false,
             }}
             data={{
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets:[{
                label: '# of Votes',
                data: [12, 12, 12, 12, 12, 12],
                backgroundColor: ['blue','yellow','pink','orange','salmon','grey'],
                borderColor: ["red","blue","green","red","green","blue"],
                borderWidth: 1
              },
                {
                    label: 'Quantity',
                    data: [40,40,40,40,40,40],
                    backgroundColor: ['orange','green'],
                    borderColor: 'salmon'
                }
              ]
             }}>
          
        </Pie>
    </div>
  );
}

export default App;