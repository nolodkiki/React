import MusicItem from "./MusicItem/MusicItem"
import s from "./Music.module.css"
import { connect } from "react-redux"



const Music = (props) => {
    let music = props.music.map(m => <MusicItem title={m.title} link={m.link}/>)
    return (
        <div className={s.list}>
            <div className={s.item}>
                {music}
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        music: state.music.kpop
    }
}

export default connect(mapStateToProps)(Music)