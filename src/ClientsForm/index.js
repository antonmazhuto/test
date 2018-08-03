import React from 'react'
import '../fonts/fonts.css';
import '../ClientsForm';
import HiddenForm from "../HiddenForm";
import classNames from 'classnames';

const Clients = [
    {
        id: 0,
        client: 'Anton Mazhuto',
        telephone: '89774851454',
        email: 'asdasdasd@ya.ru',
        data: '------',
        payments: '------'
    },
    {
        id: 1,
        client: 'Anton Mazhuto',
        telephone: '89774851454',
        email: 'asdasdasd@ya.ru',
        data: '------',
        payments: '------'
    },
    {
        id: 2,
        client: 'Anton Mazhuto',
        telephone: '89774851454',
        email: 'asdasdasd@ya.ru',
        data: '------',
        payments: '------'
    },
];
class ClientsForm extends React.Component{
    constructor(){
        super();
        this.state = {
            isOpened: false,
            isPressed: false,
            isRemoved: false
        };
        this.renderForm = this.renderForm.bind(this);
        this.removeRow = this.removeRow.bind(this)
    }

    renderForm = () => {
        this.setState(prevState => ({
            isOpened: !prevState.isOpened
        }));
    };
    pressedRow = () => {
        this.setState(prevState => ({
        isPressed: !prevState.isPressed
    }));
        this.handleRowSelect()
        console.log('sel', this.handleRowSelect)
    };
    removeRow = () => {
        this.setState(prevState => ({
            isRemoved: !prevState.isRemoved
        }));
    };

    handleRowSelect(row, isSelected) {
        if (isSelected) {
            this.setState({selectedCourseId: row.id});
        }
    }

    render(){
        const openForm = this.state.isOpened;
        let rowClass = classNames({
            'row': true,
            // 'form-header': true,
            'row-pressed': this.state.isPressed,
            'row-hidden': this.state.isRemoved
        });
        console.log('clients', Clients)
        return(
            <div>
                {openForm ? <HiddenForm/> : ''}
                <div className="row form-header">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-2">Client</div>
                    <div className="col-md-2">Phone</div>
                    <div className="col-md-2">E-Mail</div>
                    <div className="col-md-2">Data</div>
                    <div className="col-md-2">Payments</div>
                </div>
                {Clients.map((client, id) => (
                    <div className={rowClass} key={id} onClick={this.pressedRow}>
                        <div className="col-md-2">
                        <span className="icon-pencil" onClick={this.renderForm}>
                        </span>
                            <span className="icon-cancel" onClick={this.removeRow}>
                        </span>
                        </div>
                        <div key={id} className="col-md-2">{client.client}</div>
                        <div key={id} className="col-md-2">{client.telephone}</div>
                        <div key={id} className="col-md-2">{client.email}</div>
                        <div key={id} className="col-md-2">{client.data}</div>
                        <div key={id} className="col-md-2">{client.payments}</div>
                    </div>
                ))}
            </div>
        );
    }
}
export default ClientsForm