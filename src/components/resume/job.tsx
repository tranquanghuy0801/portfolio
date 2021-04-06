import React from 'react'
import Badge from 'react-bootstrap/Badge'

export interface JobProps {
	timeframe: string
	title: string
	company: string
	summary: Array<string>
}

export const Job: React.FC<JobProps> = props => (
	<React.Fragment>
		<Badge variant="dark" className="badge float-right bg-medium">
			{props.timeframe}
		</Badge>
		<h5>
			{props.title} -{' '}
			<span className="font-weight-normal">{props.company}</span>
		</h5>
		<p className="font-weight-light">
			<ul>
				{props.summary &&
					props.summary.map((content: string) => {
						return (
							<li>{content}</li>
						)
					})}
			</ul>
		</p>
	</React.Fragment>
)

export default Job
