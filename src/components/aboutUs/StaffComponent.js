import React, { Component, Mailto } from 'react';
import { Link } from 'react-router-dom';

function StaffInfo({staff}) {
    if (staff) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <StaffDirectory staff={staff}/>
                    </div>
                </div>
            </div>
        );
    }
}

function StaffDirectory(props) {
    const staffDirectory = props.staff.map(staffMember => {
        return(
            <div key={staffMember.id} className="m-1">
                <RenderStaffMember staffMember={staffMember} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {staffDirectory}
            </div>
        </div>
    );
}

function RenderAbout({about}) {
    const completeAbout = about.map(para => {
        return (
            <React.Fragment>
                <p>{para}</p>
            </React.Fragment>
        );
    });
    return (
        <p>{completeAbout}</p>
    );
}

function RenderStaffMember({staffMember}) {
    return (
        <div>
            <h2>{staffMember.name}, {staffMember.title}</h2>
            <h4>{staffMember.phone}, ext. {staffMember.extension} -- </h4>
            <div className='m-1'>
                <RenderAbout about={staffMember.about} />
            </div>
            
        </div>
    );
}

export default StaffInfo;