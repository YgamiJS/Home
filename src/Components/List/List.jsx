const List = ({items , renderList , props}) => {
    return (
        <div {...props}>
            {items.map(renderList)}
        </div>
    )
}

export default List;