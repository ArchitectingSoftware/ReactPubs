import React, {Component} from 'react';
import PubList from './PubList.jsx'

export default class PubInspector extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            // Add your component markup and other subcomponent references here.
            <span>
                <blockquote>
                    <div className="alert-success">
                        <div className="row">
                            <div className="col-lg-2">Id:</div>
                            <div className="col-lg-10"> {this.props.row.id}</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">Title:</div>
                            <div className="col-lg-10"> {this.props.row.title}</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">Cite:</div>
                            <div className="col-lg-10"> {this.props.row.cite}</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">Link:</div>
                            <div className="col-lg-10"> {this.props.row.link}</div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2">Abstract:</div>
                            <div className="col-lg-10"> {this.props.row.abstract}</div>
                        </div>
                    </div>
                </blockquote>
            </span>

        );
    }
}