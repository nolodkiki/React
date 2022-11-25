import s from './Post.module.css'

function Post(props) {
    return (
        <div className={s.item}>
            <img className={s.img} src="https://i.pinimg.com/originals/31/8c/00/318c003ea7859af794926a595e3c1746.jpg" alt="jungkook" />
            <p>{props.message}</p>
        </div>
    )
}

export default Post