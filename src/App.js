import ClockList from './components/ClockList';

function App() {
    const quantites = [1, 2, 3];
    return (
        <div>
            <ClockList quantites={quantites} />
            {/* <Clock locale="bn-BD" /> */}
        </div>
    );
}

export default App;
