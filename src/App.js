import Card from './components/containers/Card/Card';
import { data } from './data';

import './App.css';

function App() {
    const { hidden, nora, john, michael } = data;
    return (
        <div className='container'>
            <Card data={nora} hidden={hidden} />
            {/* <Card data={john} hidden={hidden}/>
            <Card data={michael} hidden={hidden}/> */}
        </div>
    );
}

export default App;
