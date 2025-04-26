interface ITitle {
    headline: string
    className: string
}

function Title({headline, className}: ITitle) {
    return(
        <h1 className={className}>{headline}</h1>
    )
}

export default Title;