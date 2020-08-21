import React, { Component } from 'react';
import axios from 'axios';


export class ForgotPassword extends Component {
    static displayName = ForgotPassword.name;

    constructor(props) {
        super(props);
        this.state = {
          
        }
    }
  

    componentDidMount () {
            axios.request({
                method: 'GET',
                url: `https://localhost:44399/Login`,
            }).then(response => {
                this.setState({ users: response.data });
            }).catch(err => console.log(err));
    }


    render() {

        return (
                    <div>
                <div className="fill-window resetform">
                    <div className="text-center">

                        <form className="form-signin" onSubmit={this.onSubmit}>

                            <div class="form-group">
                                <label className="lblShow">Email address </label>
                                <input type="email" ref="userId" name="userId" className="form-control" placeholder="Email address" required="required" autoFocus />
                            </div>
                            <button className="btn btn-lg btn-primary" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                    </div>
        );
  }
}
