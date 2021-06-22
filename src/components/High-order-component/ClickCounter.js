import withCounter from './HOC/withCounter';

const ClickCounte = ({ count, incrise }) => (
    <>
        <button type="button" onClick={incrise}>
            Click {count}time
        </button>
    </>
);

export default withCounter(ClickCounte);
