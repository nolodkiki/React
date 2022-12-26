import { useState, useEffect } from "react"

const Status = (props) => {
    let [status, setStatus] = useState(props.status)
    let [toggle, setToggle] = useState(false)

    const onEditMode = () => setToggle(true)
    const offEditMode = () => {
        props.updateUserStatusThunkCreator(status)
        setToggle(false)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]) // если изменился [props.status], то запускается callBack setStatus(props.status)

    // Пример на классовой компонете
    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setStatus({
    //             status: this.props.status
    //         })
    //     }
    // }

    const onChange = (event) => {setStatus(event.currentTarget.value)}


    return (
        <div>
            {toggle
                ? (<input autoFocus 
                    value={status} 
                    onChange={onChange} 
                    onBlur={offEditMode} />)
                : (<span onDoubleClick={onEditMode}>{status || 'no status'}</span>)
            }
        </div>
    )

}
export default Status