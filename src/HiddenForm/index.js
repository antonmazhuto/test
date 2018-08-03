import React from 'react'

class HiddenForm extends React.Component{
    render(){
        return(
            <div className="hidden-form">
                <div className="row">
                    <div className="col-md-7">
                        <label className="label-text" htmlFor="">Имя</label>
                        <div className="form-control">
                            <input type="text" placeholder="Иванов Иван" />
                        </div>
                    </div>
                    <div className="col-md-5">
                        <label className="label-text" htmlFor="">Телефон</label>
                        <div className="form-control">
                            <input type="tel" placeholder="89999999999" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default HiddenForm