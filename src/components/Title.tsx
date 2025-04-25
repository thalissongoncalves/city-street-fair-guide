interface ITitle {
    headline: string
}

function Title({headline}: ITitle) {
    return(
        <h1>{headline}</h1>
    )
}

export default Title;