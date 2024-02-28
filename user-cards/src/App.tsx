import React, { useState } from "react";
import UserCard from "./components/UserCard.tsx";
import { User } from "./types/user.ts";

function App() {
	const [users, setUsers] = useState<User[]>([]);
	const [formData, setFormData] = useState<User>({
		email: "",
		desc: "",
		name: "",
		nickname: "",
		tel: "",
	});
	const onInputChange = (e: any) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const addUser = () => {
		setUsers([...users, formData]);
	};
	const removeUser = (userIndex: number) => {
		setUsers(users.filter((user, index) => index !== userIndex));
	};
	return (
		<div className="container">
			{/* form input */}
			<div className="sign-up-form">
				<h1>User Information</h1>
				<form
					onSubmit={(e) => {
						e.preventDefault();
						addUser();
						setFormData({
							email: "",
							desc: "",
							name: "",
							nickname: "",
							tel: "",
						});
					}}
					action=""
					id="sign-in-form"
				>
					<label htmlFor="email">Email:</label>
					<input
						type="text"
						className="info"
						value={formData.email}
						onChange={onInputChange}
						name="email"
					/>
					<label htmlFor="nickname">Nickname:</label>

					<input
						type="text"
						className="info"
						value={formData.nickname}
						onChange={onInputChange}
						name="nickname"
					/>
					<label htmlFor="name">Name:</label>

					<input
						type="text"
						className="info"
						value={formData.name}
						onChange={onInputChange}
						name="name"
					/>
					<label htmlFor="tel">Phone Number:</label>
					<input
						type="tel"
						className="info"
						value={formData.tel}
						onChange={onInputChange}
						name="tel"
					/>
					<label htmlFor="desc">Description:</label>
					<textarea
						className="info"
						value={formData.desc}
						onChange={onInputChange}
						name="desc"
					></textarea>
					<button
						type="submit"
						id="button"
					>
						Add User
					</button>
				</form>
			</div>
			{/* end form */}
			{/* card item */}
			{users.map((user, index) => (
				<UserCard
					key={index}
					{...user}
					handleRemove={() => {
						removeUser(index);
					}}
				/>
			))}
			{/* end card item */}
		</div>
	);
}

export default App;
