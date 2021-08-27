import React from 'react';
 export class Confirm extends React.Component{
    continue=e=>
    {
        e.preventDefault();
        this.props.nextstep();

    }
    back=e=>
    {
        e.preventDefault();
        this.props.prevstep();

    };

    render()
    {
        const {
            values : {fullname,gender,country,state,phone,companyname,email,job,year}
        }=this.props;

        return(
            <div className="form-container">
                <h1 className="header">Confirm The Details</h1>
                <ul class="list-group">
                    <li class="list-group-item">FullName:{fullname}</li>
                    <li class="list-group-item">Gender:{gender}</li>
                    <li class="list-group-item">Country:{country}</li>
                    <li class="list-group-item">State:{state}</li>
                    <li class="list-group-item">Phone:{phone}</li>
                    <li class="list-group-item">CompanyName:{companyname}</li>
                    <li class="list-group-item">Email:{email}</li>
                    <li class="list-group-item">JobTitle:{job}</li>
                    <li class="list-group-item">YearofExperience:{year}</li>

                    

                </ul>

  
                <div className="row">
                <div className="col 5">
                <button className="btn btn-primary" onClick={this.back}>Back</button>
                </div>
           
            <div className="col 3 text-right">
            <button className="btn btn-primary" onClick={this.continue}>Next</button>
            </div>
                
            </div>
            </div>
        )
    }
 }


 export default Confirm