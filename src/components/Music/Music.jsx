import MusicItem from "./MusicItem/MusicItem"
import s from "./Music.module.css"




const Music = (props) => {
    let state = props.store.getState()
    let music = state.music.kpop.map(m => <MusicItem title={m.title} link={m.link}/>)
    return (
        <div className={s.list}>
            <div className={s.item}>
                {music}
            </div>
        </div>
    )
}

export default Music