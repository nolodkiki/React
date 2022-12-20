import Preloader from '../../common/preloader/Fetching'
import s from './ProfileInfo.module.css'
import BTS from './../../../img/BTS.jpg'
import idol from './../../../img/Jungkook.jpg'

const ProfileInfo = function (props) {
    if(!props.profile) {
        return <Preloader />
    }


    return (
        <div>
            <div className='wallpaper'>
                <img className={s.img} alt='bts' src={BTS} />
            </div>
            <div>
                avatar + description
            </div>
            {props.profile.photos.large ? <img src={props.profile.photos.large} alt="" /> : <img src={idol} alt="" />}
            
        </div>
    )
}

export default ProfileInfo