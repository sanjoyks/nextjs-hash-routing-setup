export default (props) => {
    return (
        <div>
            <h2>No Page</h2>
            {JSON.stringify(props, null, 2)}
        </div>
    )
}