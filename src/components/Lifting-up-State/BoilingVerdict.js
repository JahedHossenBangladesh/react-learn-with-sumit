export default function BoilingVerdict({ celsius = 0 }) {
    if (celsius > 100) {
        return <p>This will be boil</p>;
    }
    return <p> this wont be boil</p>;
}
