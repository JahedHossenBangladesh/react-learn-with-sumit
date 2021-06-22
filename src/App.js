import ClickCount from './components/Props-Render/ClickCount';
import Counter from './components/Props-Render/Counter';
import HoverCounter from './components/Props-Render/HoverCounter';

function App() {
    return (
        <div>
            <Counter>
                {(count, increment) => <HoverCounter count={count} increment={increment} />}
            </Counter>
            <Counter>
                {(count, increment) => <ClickCount count={count} increment={increment} />}
            </Counter>
        </div>
    );
}

export default App;
