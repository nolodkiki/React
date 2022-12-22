// export const ProfileStatus = (props: PropsType) => {

//     const [title, setTitle] = useState<string>(props.status)
//     const [editMode, setEditMode] = useState<boolean>(false)
//     const onEditMode = () => setEditMode(true)

//     const offEditMode = () => {
//         props.updateUserStatus(title)
//         setEditMode(false)
//     }

//     useEffect(() => {
//         setTitle(props.status)
//     }, [props.status]) // Если изминлось

//     const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

//     return (
//         <div>
//             {editMode
//                 ? <input autoFocus onBlur={offEditMode} onChange={onChangeSetTitle} value={title}/>
//                 : <span onDoubleClick={onEditMode}>{title || 'no status'}</span>
//             }
//         </div>
//     )
// }