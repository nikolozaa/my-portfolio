import React from "react";
import MembersComponent from "../../components/members/members-component";
import classes from "./members.module.scss";

export default function Members() {
	const members = [
		{
			id: "1",
			img: "/images/team-members-pics/levani.jpg",
			name: "Levan",
			lastName: "Basharuli",
			jobTitle: "CEO",
		},
		{
			id: "2",
			img: "/images/team-members-pics/sopo.jpg",
			name: "Sopo",
			lastName: "Tikurishvili",
			jobTitle: "COO",
		},
		{
			id: "3",
			img: "/images/team-members-pics/ubica.jpg",
			name: "Giorgi",
			lastName: "Mosiashvili",
			jobTitle: "GAME DEVELOPER",
		},
		{
			id: "5",
			img: "/images/team-members-pics/farna.jpg",
			name: "Farnaoz",
			lastName: "Trapaidze",
			jobTitle: "GAME DEVELOPER",
		},
		{
			id: "4",
			img: "/images/team-members-pics/axaliGio.jpg",
			name: "Giorgi",
			lastName: "Tsaava",
			jobTitle: "PROGRAMMER",
		},
		{
			id: "4",
			img: "https://media.tenor.com/O7gLJnUQdFYAAAAC/leonardo-dicaprio.gif",
			name: "asdasd",
			lastName: "asdasd",
			jobTitle: "asdads",
		},
	];

	return (
		<div className={classes.membersMainContainer}>
			{members.map((mem) => {
				return (
					<div className={classes.membersContianer}>
						<MembersComponent
							id={mem.id}
							img={mem.img}
							jobTitle={mem.jobTitle}
							lastName={mem.lastName}
							name={mem.name}
						/>
					</div>
				);
			})}
		</div>
	);
}
