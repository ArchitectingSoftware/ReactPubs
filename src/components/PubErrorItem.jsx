import React, {Component} from 'react';
import PubList from './PubList.jsx'

export default class PubErrorItem extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        console.log("In error render",this.props.msg)
        return (
            // Add your component markup and other subcomponent references here.
            <span>
            <div className="row">
                <h2>ERROR</h2>
                <blockquote>
                    <div className="alert-danger">
                        <div className="row">
                            <div className="col-lg-2">Error Code:</div>
                            <div className="col-lg-10"> {this.props.msg.metadata.statusCode}</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">Message:</div>
                            <div className="col-lg-10"> {this.props.msg.metadata.message}</div>
                        </div>
                    </div>
                </blockquote>
            </div>
            </span>
        );
    }
}