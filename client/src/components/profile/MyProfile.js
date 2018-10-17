import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';


class MyProfile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: props.user
		}
	}

	render() {
		const { user } = this.state
		let roles = '';
		user.role.forEach((e, i) => {
			roles += i > 0 ? ' & ' : '';
			roles += (e.charAt(0).toUpperCase() + e.slice(1));
		});
		let vehicle;
		if (user.vehicle) {
			vehicle = <TableRow>
				<TableCell>Vehicle</TableCell>
				<TableCell>{user.vehicle.brand} {user.vehicle.model} - {user.vehicle.color} - {user.vehicle.registrationNumber}</TableCell>
			</TableRow>
		}


		return (
			<Grid style={{ margin: "6vh" }} container spacing={16}>
				<Grid item xs={6}>
						<h4 className="center-align">Profile</h4>
						<Table className="centered">
							<caption></caption>
							<TableBody>
								<TableRow>
									<TableCell>Name</TableCell>
									<TableCell>{user.username}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Email</TableCell>
									<TableCell>{user.email}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell>Roles</TableCell>
									<TableCell>{roles}</TableCell>
								</TableRow>
								{vehicle}
							</TableBody>
						</Table>
				</Grid>
			</Grid>
		)
	}

}

export default MyProfile;