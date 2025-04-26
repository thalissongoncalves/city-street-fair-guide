interface ISubTitle {
    headline: string
    className: string
}

function SubTitle({headline, className}: ISubTitle) {
    return(
        <h2 className={className}>{headline}</h2>
    )
}

export default SubTitle;