import React from 'react';
import styles from './Dialogs.module.css'
import {DialogItem,} from './DialogItem/DialogItem';
import {Message} from './Message/Message';
import {DialogPageType} from '../../redux/state/state';


const Dialogs: React.FC<DialogPageType> = (props) => {
    let elementDialogs = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let elementsMessages = props.messages.map(m => <div><Message message={m.message} id={m.id}/></div>)

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapperImage}>
                <img
                    src="https://www.fcbarcelona.com/photo-resources/2020/11/02/d2c1d3ab-437b-400a-8df2-3e420b9f0799/imatge_avatars02.jpg?width=1024&height=448"
                    alt="Barca"/>
            </div>
            <div className={styles.wrapperWrapper}>
                <div className={styles.dialogsWrapper}>
                    <div>
                        {elementDialogs}
                    </div>

                    <div>
                        {elementsMessages}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;