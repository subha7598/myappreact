    import React from 'react';
    import './App.css';


    export class Personaldetails extends React.Component{
        continue=e=>
        {
            e.preventDefault();
            this.props.nextstep();

        }
        render()
        {

            const {values,inputchange} = this.props;
                    return(
                        <div className="form-container pt-5">
                            <h1 className="header">Add Your Personal details</h1>
                <div className="form-group">
                    <label htmlFor="fullname" className="col-form-label">FullName</label>
                    <input type="text"  className="form-control" name="fullname" onChange={inputchange('fullname')} value={values.fullname}/>
            
                </div>

                <div className="form-group" >
                    <label htmlFor="gender" className="col-form-label">Gender</label>
                    <input type="text" name="gender" className="form-control" onChange={inputchange('gender')} value={values.gender}/>
                </div>

                <div className="form-group">
                    <label>Country</label>
                    <input type="text" className="form-control" name="country" onChange={inputchange('country')} value={values.country}/>
                </div>
                <div className="form-group">
                    <label>State</label>
                    <input type="text" className="form-control" name="state" onChange={inputchange('state')} value={values.state}/>
                </div>
                <div className="form-group">
                    <label className="col-form-label">Phone</label>
                    <input type="number" className="form-control"  name="phone" onChange={inputchange('phone')} value={values.phone}/>
                </div>
                <div className="row">

                
                <div classname="col 6 text-right">
                    <button className="btn btn-primary" onClick={this.continue}>Next</button>
                </div>
                        </div>
                        </div>
            
                
            )
        }
    }

    export default Personaldetails;