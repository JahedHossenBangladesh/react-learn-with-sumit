import Clock from './components/Clock';

function App() {
    console.log('App component render');
    return (
        <div>
            <Clock locale="bn-BD" />
        </div>
    );
}

export default App;
