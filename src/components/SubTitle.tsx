interface ISubTitle {
    headline: string
}

function SubTitle({headline}: ISubTitle) {
    return(
        <h2>{headline}</h2>
    )
}

export default SubTitle;