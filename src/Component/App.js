import React, { Component } from "react";
import { add_Reminder , remove_Reminder, clear_Reminder } from "../Actions";
import {connect} from 'react-redux';
import moment from "moment/moment";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import logo from './pngegg.png'
class App extends Component {
    state = {
        text: '',
        date: new Date()
    }

    render_Reminders = () => {
        const {reminders} = this.props;
        return (
            <ul className="list-group">
                {
                    reminders.map( reminder => {
                        return (
                            <li key={reminder.id} className="list-group-item">
                                <div> { reminder.text} </div>
                                <div> { moment(new Date(reminder.date)).fromNow()} </div>
                                <div className="closeIcon btn btn-danger" onClick={ () => this.props.remove_Reminder(reminder.id)}> x </div> 
                            </li>
                        )
                    })
                }
                
            </ul>
        )
    }
    render() {
        return (
            <div className="App">
                <img src={logo} />
                <div className="reminder-title">
                    <h2> What Should U Do</h2>
                </div>
                <input type="text"
                    value={this.state.text}
                    placeholder="Enter what u think...?"
                    className="form-control"
                    onChange={(e) => this.setState({text: e.target.value})}
                />
                {/* <input type="datetime-local"
                    className="form-control"
                    value={this.state.date}
                    onChange={(e) => this.setState({date: e.target.value})}
                /> */}

                <DatePicker
                selected={this.state.date}
                className="form-control"
                value={this.state.date}
                label="Controlled picker"
                showTimeSelect
                timeFormat="HH:mm"
                dateFormat="MMMM d,yyyy h:mm:aa"
                timeCaption="time"
                onChange={(date) => this.setState({date: date})}
                placeholderText="Enter your date"
                />
                <button
                onClick={() => {
                    this.props.add_Reminder(this.state.text , this.state.date)
                    this.setState({
                        text: '',
                        date : ''
                    })
                }}
                 className="btn btn-primary btn-block">
                Add Reminder
                </button>
                {this.render_Reminders()}
                <button className="clearReminder btn btn-danger btn-block" onClick={ () => this.props.clear_Reminder()} > Delete Reminder </button>

            </div>
        )
    }
}

// function mapDispatchToProps(dispatch){
//     return{
//         add_Reminder : () => dispatch(add_Reminder())
//     }
// }

// export default connect(null , mapDispatchToProps) (App);

// function mapStateToProps(state){
//     return{
//         reminders : state
//     }
// }

export default connect(state => {
    return{
        reminders : state
    }
} , {add_Reminder,remove_Reminder,clear_Reminder}) (App);    // السطر ده بكل الاكواد الى فوق دى 

