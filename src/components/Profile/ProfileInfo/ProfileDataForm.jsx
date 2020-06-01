import s from "./ProfileInfo.module.css";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormsControl/FormsControl";
import {required} from "../../../utils/validators/validator";

const ProfileDataForm = ({handleSubmit, profile}) => {
    return <form className={s.profileDescriptionBlock} onSubmit={handleSubmit}>
        <div>
            <div className={s.formAddInfo}>
                <span>Full Name: </span><span className={s.married}>{ <Field placeholder={'Full name'} name={'fullName'} component={Input} />}</span>
            </div>
            <div className={s.formAddInfo}>
                <span>Birthday:</span><span className={s.birthDay}> 11 may</span>
            </div>
            <div className={s.formAddInfo}>
                <span>City: </span><span className={s.birthCity}>Karakol</span>
            </div>
            <div className={s.formAddInfo}>
                <span>Family status: </span><span className={s.married}>Not married</span>
            </div>
            <div className={s.formAddInfo}>
                <span>Sdat kyrsach: </span><span className={s.married}>{<Field component={'input'} name={'lookingForAJob'} type={'checkbox'}/>}</span>
            </div>
            <div className={s.formAddInfo}>
                <span>Skills: </span><span className={s.married}>{<Field component={'input'} name={'lookingForAJobDescription'} type={'textarea'}/>}</span>
            </div>
            <div className={s.formAddInfo}>
                <span>About me: </span><span className={s.married}>{<Field placeholder={'About me'} name={'aboutMe'} component={Input} />}</span>
            </div>
        </div>
        <span>Contacts:
            <div className={s.formAddInfo}> <span>Vk: </span>{<Field placeholder={'VK'} name={'contacts.vk'} component={Input} />}</div>
            <div className={s.formAddInfo}> <span>Github: </span>{<Field placeholder={'Github'} name={'contacts.github'} component={Input} />}</div>
        </span>
        <div className={s.saveDataButton}>
            <button>Save</button>
        </div>
    </form>
}

const ProfileDataFormReduxForm = reduxForm(
    {
        form: 'editProfile'
    }
)(ProfileDataForm);
export default ProfileDataFormReduxForm;