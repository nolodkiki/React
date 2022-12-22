import Preloader from '../../common/preloader/Fetching'
import s from './ProfileInfo.module.css'
import BTS from './../../../img/BTS.jpg'
import idol from './../../../img/Jungkook.jpg'
import Status from './Status'

const ProfileInfo = function (props) {
    if(!props.profile) {
        return <Preloader />
    }


    return (
        <div>
            <div className='wallpaper'>
                <img className={s.img} alt='bts' src={BTS} />
            </div>
            {props.profile.photos.large ? <img src={props.profile.photos.large} alt="" /> : <img src={idol} alt="" />}
            <div>
                <Status status={props.status} updateUserStatusThunkCreator={props.updateUserStatusThunkCreator}/>
            </div>
        </div>
    )
}

export default ProfileInfo