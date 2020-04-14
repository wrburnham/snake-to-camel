import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'muicss/lib/react/container';
import Textarea from 'muicss/lib/react/textarea';
import Checkbox from 'muicss/lib/react/checkbox';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import 'muicss/lib/sass/mui.scss';

class SnakeToCamelForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.textarea = null;
		this.state = {
			snake: '',
			camel: '',
			capitalizeFirst: false
		};
		this.snakeToCamelHandler = this.snakeToCamelHandler.bind(this);
		this.capitalizeFirstHandler = this.capitalizeFirstHandler.bind(this);
		this.snakeToCamel = this.snakeToCamel.bind(this);
		this.copyCamelToClipboard = this.copyCamelToClipboard.bind(this);
	}

	copyCamelToClipboard(event) {
		this.camelTextArea.controlEl.select();
		document.execCommand('copy');
		event.target.focus();
	}

	snakeToCamelHandler(event) {
		const input = event.target.value;
		this.setState({ snake: input });
		const result = this.snakeToCamel(input, this.state.capitalizeFirst);
		this.setState({ camel: result });
	}

	capitalizeFirstHandler(event) {
		const checked = event.target.checked;
		const result = this.snakeToCamel(this.state.snake, checked);
		this.setState({
			capitalizeFirst: checked,
			camel: result
		});
	}

	snakeToCamel(str, capFirst) {
		var result = str.replace(
    		/([-_][a-z])/g,
    		(group) => group.toUpperCase()
                    .replace('-', '')
                    .replace('_', '')
		);
		if (capFirst) {
			result = result.replace(
				/([\s][a-z])/g,
				(group) => group.toUpperCase()
			);
			result = result.charAt(0).toUpperCase() + result.substring(1);
		}
		return result;
	}

	render() {
		return (
			<Container fluid={true}>
				<Row>
					<Col md="12">
						<Textarea rows="4" value={this.state.snake} placeholder="TRY_ME" onChange={this.snakeToCamelHandler}/>
					</Col>
				</Row>
				<Row>
					<Col md="12">
						<Textarea rows="4" value={this.state.camel} placeholder="tryMe" ref={(textarea) => this.camelTextArea = textarea} readonly/>
					</Col>
				</Row>
				<Row>
					<Col md="2" sm="4" xs="6">
						<Checkbox value={this.state.capitalizeFirst} label="Capitalize first" onChange={this.capitalizeFirstHandler}/>
					</Col>
					<Col md="2" sm="4" xs="6">
						<Button color="primary" disabled={this.state.camel.length === 0} onClick={this.copyCamelToClipboard}>Copy</Button>
					</Col>
				</Row>
			</Container>
		);
	}

}

export default SnakeToCamelForm;