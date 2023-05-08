
const PleaseWait = (props: any) => {

    if (props.Show) {
        return (
            <div>
                <strong>Loading... </strong>
                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>)
    }
    else
        return <div></div>

};


export default PleaseWait;