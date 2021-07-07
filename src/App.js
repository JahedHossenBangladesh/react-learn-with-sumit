import { useState } from 'react';
import MyComponents from './components/useEffect/MyComponents';

function App() {
    const [show, setShow] = useState(true);
    return (
        <div>
            {/* <ContextApiApp /> */}
            <div>{show && <MyComponents />}</div>
            <button type="button" onClick={() => setShow((pre) => !pre)}>
                {show ? 'hide' : 'visible'}
            </button>
        </div>
    );
}

export default App;
