import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

const ChallengesList = props => {
	return (
		<ListGroup style={{height: '60%'}}>
			{props.challenges.map((challenge, i) => {
				return <ListGroupItem key={i}>
					<Link to={`/rooms/${challenge.id}`} />
					{challenge.title}</ListGroupItem>;

			})}
		</ListGroup>
	);
};

export default ChallengesList;
