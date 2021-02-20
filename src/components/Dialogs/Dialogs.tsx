import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem,} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogPageType} from '../../redux/state/state';


const Dialogs: React.FC<DialogPageType> = (props) => {
    let elementDialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let elementsMessages = props.messages.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialog}>
                {elementDialogs}
            </div>

            <div className={s.messageDialog}>
                {elementsMessages}
            </div>
        </div>)
};

export default Dialogs;