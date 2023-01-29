import style from './ProfileStatus.module.css';
import React from "react";

class ProfileStatus extends React.Component { // TODO есть нюанс , не обновляется статус, не отрисовывается сразу

    state = {
        editMode : false,
        status: this.props.status
    }

    activateEditMode = () => {

        this.setState( {
            editMode : true
        })
    }

    deActivateEditMode = (e) => {

        this.setState( {
            editMode : false
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {

        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })

        }
    }

    render() {

        return (

            <div>
                { !this.state.editMode &&
                    <div className={style.status}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "----"}</span>
                    </div>

                }

                { this.state.editMode &&
                    <div className={style.editStatus}>
                        <input autoFocus={true}
                               onChange={this.onStatusChange}
                               onBlur={this.deActivateEditMode}
                               value={this.state.status}/>
                    </div>
                }


            </div>
        )
    }
}

export default ProfileStatus