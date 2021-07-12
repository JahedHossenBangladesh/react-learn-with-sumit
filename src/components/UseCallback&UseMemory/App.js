import React, { useCallback, useMemo, useState } from 'react';
import Button from './Button';
import ShowCount from './ShowCount';
import Title from './Title';

export default function App() {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(5);

    const increaseByOne = useCallback(() => {
        setCount1((pre) => pre + 1);
    }, []);
    const increaseByFive = useCallback(() => {
        setCount2((pre) => pre + 5);
    }, []);

    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 100000) i += 1;

        return count1 % 2 === 0;
    }, [count1]);
    return (
        <div>
            <Title />
            <ShowCount count={count1} title="increase one" />
            <Button handleClick={increaseByOne}>Increase One </Button>
            <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
            <hr />
            <ShowCount count={count2} title="increase Five" />
            <Button handleClick={increaseByFive}>Increase Five </Button>
        </div>
    );
}
