import React from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: any) => void
}

class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    };
    onStatusChange = (e: any) => {
        this.setState({
            status: e.currentTarget.value
        })

    }

    render() {

        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onClick={this.activateEditMode}>{this.props.status || '----'}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} onBlur={this.deactivateEditMode} value={this.state.status}
                           autoFocus={true}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;