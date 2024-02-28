import React from "react";
import { User } from "../types/user";

type Props = {
	handleRemove: () => void;
} & User;

const UserCard = (props: Props) => {
	return (
		<div className="card">
			<div className="card-cover">
				<img
					src="https://i.pinimg.com/564x/d6/8e/53/d68e538a531b0dd4fae5bc2dffd0a1d5.jpg"
					className="cover-img"
					alt=""
				/>
				<div className="cover-description">
					<p className="carddesc">{props.desc}</p>
				</div>
			</div>
			<img
				src="https://i.pinimg.com/564x/14/e0/18/14e0182e1cd11bcdd7033237a9bc9f5f.jpg"
				className="card-pfp"
				alt=""
			/>
			<div className="card-content">
				<div className="card-title">
					<h1 className="cardname">{props.name}</h1>
					<i>
						<p className="cardnickname">{props.nickname}</p>
					</i>
				</div>
				<div className="card-description">
					<div className="inline">
						<p className="bold">Username:</p>
						<p className="cardusername">{props.name}</p>
					</div>
					<div className="inline">
						<p className="bold">Email:</p>
						<p className="cardemail">{props.email}</p>
					</div>
					<div className="inline">
						<p className="bold">Phone number:</p>
						<p className="cardtel">{props.tel}</p>
					</div>
				</div>
			</div>
			<button onClick={props.handleRemove}>Delete</button>
		</div>
	);
};

export default UserCard;
