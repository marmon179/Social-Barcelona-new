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
                <img src="https://store.fcbarcelona.com/_ui/responsive/theme-blm/images/background-country.jpg" alt="Barca"/>
            </div>
            <div className={styles.dialogsWrapper}>
                <div>
                    {elementDialogs}
                </div>

                <div>
                    {elementsMessages}
                </div>
            </div>

        </div>
    )
};

export default Dialogs;