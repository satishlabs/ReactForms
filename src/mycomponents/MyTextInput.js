import classnames from 'classnames';
import React from 'react'; 
import propTypes from 'prop-types'; 


const MyTextInput =({myname,mylabel,mytext,myvalue,myplaceholder,myonChange,myerror} 
    ) =>{
    //let bookId=null;
    return(
        <div className="container">
            <div className="form-group">
                        <label htmlFor={myname}>{mylabel}</label>
                        <input
                            type={mytext}
                            name={myname}
                            placeholder={myplaceholder}
                            value={myvalue}
                            onChange={myonChange}
                            className={
                                classnames("form-control form-control-lg",
                                {
                                    "is-invalid":myerror,
                                    "is-valid": !myerror
                                })}
                        />
                       <div className="text-danger">{myerror}</div>
                    </div>
        </div>
    )
}

MyTextInput.propTypes = {
    mylabel:propTypes.string.isRequired,
    myname:propTypes.string.isRequired,
    myvalue:propTypes.string.isRequired,
    myonChange:propTypes.func.isRequired,
}

MyTextInput.defaultProps = {
    mytext:'text',
    myplaceholder:'Enter Value',
    myerror:''
}


export default MyTextInput;