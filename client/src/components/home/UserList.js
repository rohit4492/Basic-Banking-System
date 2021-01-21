import React, { Component } from 'react';

export default class UserList extends Component {
        constructor(props){
                super(props);
                this.state = {
                        users:[{
                                name:'Rohit'
                        },{
                                name:'Pranith'
                        },{
                                name:'Sanjana'
                        },{
                                name:'Mourya'
                        },{
                                name:'Avinash'
                        },{
                                name:'Abhi'
                        },{
                                name:'Bhargav'
                        },{
                                name:'Divya'
                        },{
                                name:'Samantha'
                        }]
                }
        }

        render() {
                return (
                        <div
                        style={{
                                display:this.props.displayList
                        }}
                        id="user-list-container">
                                <ul>
                                        {
                                                this.props.userList.map(nameObj => (
                                                        <li><a href={"/transfer/"+nameObj._id}>{nameObj.firstName + ' ' + nameObj.lastName}</a></li>
                                                ))
                                        }
                                </ul>



                        </div>
                )
        }
}
