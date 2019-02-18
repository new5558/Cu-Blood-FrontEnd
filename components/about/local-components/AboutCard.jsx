import React from 'react';

export default class AboutCard extends React.Component {
    render() {
        return (
            <div className="m-4 bg-grey-lightest w-64 flex flex-col items-center text-center font-cu-heading text-3xl font-medium" style={{ borderRadius: '2rem' }} >
                <img src={this.props.picture} aria-hidden alt="User Profile Picture" className="rounded-full p-4 h-64 w-64" />
                <div className="pb-4">
                    {this.props.englishName}
                    <br />
                    {this.props.myRole}
                </div>
            </div>
        )
    }
}