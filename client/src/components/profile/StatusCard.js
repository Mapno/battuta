import React from 'react';
import Chip from '@material-ui/core/Chip';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';
import Shipping from '@material-ui/icons/LocalShipping';
import Button from '@material-ui/core/Button';



class StatusCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: props.status
        };
    };

    componentWillMount() {
        const { status } = this.props;
        this.setState({ status });
    }



    render() {
        const { status } = this.state;
        const { id, keyVariable } = this.props;

        if (status === 'Pending') {
            if (keyVariable === 'asShipper')
                return (
                    <div>
                        <Button color="primary" variant="contained" onClick={e => this.props.handleAccept(e.currentTarget.value)} value={id} >Accept</Button>
                        <Button color="secondary" variant="contained" onClick={e => this.props.handleReject(e.currentTarget.value)} value={id} >Reject</Button>
                    </div>
                )
            else
                return <Chip label="Pending" />
        }
        else if (status === 'Accepted')
            return (
                <Chip label="Accepted" color="primary" icon={<DoneIcon />} />
            )
        else if (status === 'Delivered')
            return (
                <Chip label="Delivered" color="primary" icon={<Shipping />} />
            )
        else
            return (
                <Chip label="Rejected" color="secondary" icon={<ClearIcon />} />
            )

    }
}

export default StatusCard;