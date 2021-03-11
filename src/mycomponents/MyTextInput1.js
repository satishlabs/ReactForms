import classnames from 'classnames';
import React from 'react'; 
import propTypes from 'prop-types'; 



const MyTextInput1 =(props) =>{
    //let bookId=null;
    return(
        <div className="container">
            <div className="form-group">
                        <label htmlFor={props.myname}>{props.mylabel}</label>
                        <input
                            type={props.mytext}
                            name={props.myname}
                            placeholder={props.myplaceholder}
                            value={props.myvalue}
                            onChange={props.myonChange}
                            className={
                                classnames("form-control form-control-lg",{
                                    "is-invalid":props.myerror,
                                    "is-valid": !props.myerror
                                })}
                        />
                       <div className="text-danger">{props.myerror}</div>
                    </div>
        </div>
    );
}

MyTextInput1.propTypes = {
    mylabel:propTypes.string.isRequired,
    myname:propTypes.string.isRequired,
    myvalue:propTypes.string.isRequired,
    myonChange:propTypes.func.isRequired,
}

MyTextInput1.defaultProps = {
    mytext:'text',
    myplaceholder:'Enter Value',
    myerror:''
}

export default MyTextInput1;