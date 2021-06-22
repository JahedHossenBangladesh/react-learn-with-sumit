import withCounter from './HOC/withCounter';

const HoverCounter = ({ incrise, count }) => (
    <h1 onMouseMove={incrise}>This is the MouseHover {count} time</h1>
);
export default withCounter(HoverCounter);
