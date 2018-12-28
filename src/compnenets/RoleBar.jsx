import React from "react";


export default class RoleBar extends React.Component {

    handleClick = (role) => {
        this.props.changeRole(role);
    }
    isActiveRole = (r) => (r === this.props.role) ? true : false;

    render() {
        return (
            <div className="roleBar">
                {['ALL', 'TOP', 'JUNGLE', 'MIDDLE', 'DUO_CARRY', 'DUO_SUPPORT'].map((role) =>
                    <div onMouseDown={() => this.props.changeRole(role)} value={role} className={this.props.role === role ? "roleIcon selectedRole" : "roleIcon"}><img src={"./images/" + role + ".svg"} alt={role} height="15px" width="15px" /></div>
                )}
            </div>
        );
    }
}
