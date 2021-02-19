import Card from './components/containers/Card/Card';

import { data } from './data';

import './App.css';

function App() {
    const { nora, john, michael } = data;

    return (
        <div className='container'>
            <Card data={nora} />
            <Card data={john} />
            <Card data={michael} />
        </div>
    );
}

export default App;
