import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';



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
				<TableCell><span className="profile-data">Vehicle</span></TableCell>
				<TableCell><span className="profile-data">{user.vehicle.brand} {user.vehicle.model} - {user.vehicle.color} - {user.vehicle.registrationNumber}</span></TableCell>
			</TableRow>
		}


		return (
			<div className="my-profile d-flex justify-content-center align-items-center flex-column">
				<h4 className="center-align">Profile</h4>
				<Grid style={{ margin: "6vh" }} container justify="center">
					<Card style={{ backgroundColor: "#ffffffbf" }}>
						<Grid style={{ backgroundColor: "transparent" }}>
							<Table className="centered">
								<TableBody>
									<TableRow>
										<TableCell><span className="profile-data">Name</span></TableCell>
										<TableCell><span className="profile-data">{user.username}</span></TableCell>
									</TableRow>
									<TableRow>
										<TableCell><span className="profile-data">Email</span></TableCell>
										<TableCell><span className="profile-data">{user.email}</span></TableCell>
									</TableRow>
									<TableRow>
										<TableCell><span className="profile-data">Roles</span></TableCell>
										<TableCell><span className="profile-data">{roles}</span></TableCell>
									</TableRow>
									{vehicle}
								</TableBody>
							</Table>
						</Grid>
					</Card>
				</Grid>
			</div>
		)
	}

}

export default MyProfile;