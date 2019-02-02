import React, { Component } from 'react';
import { UserInfoConsumer } from '@/core/UserInfoProvider';

class ProfileHeader extends Component {
    render() {
        return (
            <div className="bg-cb-pink-light">
                <div className="layout-wide flex flex-col py-16 font-cu-heading text-center md:text-left">
                    <div className="text-6xl text-black font-bold mb-6">ประวัติส่วนตัว</div>
                    <UserInfoConsumer>
                        {({userInfo}) => {
                            if ((userInfo === null) || (userInfo === undefined)) {
                                return <div></div>
                            }
                            return(
                                <div className="text-3xl flex flex-col text-grey-darkest">
                                    <div className="font-semibold">{`${userInfo.firstName} ${userInfo.lastName}`}</div>
                                    <div>{userInfo.username}</div>
                                    <div>{userInfo.phoneNumber}</div>
                                </div>
                            );
                        }}
                    </UserInfoConsumer>
                </div>
            </div>
        );
    }
}

export default ProfileHeader;