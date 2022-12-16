import Preloader from '../../common/preloader/Fetching'
import s from './ProfileInfo.module.css'

const ProfileInfo = function (props) {
    if(!props.profile) {
        return <Preloader />
    }


    return (
        <div>
            <div className='wallpaper'>
                <img className={s.img} alt='bts' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/BTS_on_the_Billboard_Music_Awards_red_carpet%2C_1_May_2019.jpg/1200px-BTS_on_the_Billboard_Music_Awards_red_carpet%2C_1_May_2019.jpg' />
            </div>
            <div>
                avatar + description
            </div>
            <img src={props.profile.photos.large} alt="" />
        </div>
    )
}

export default ProfileInfo