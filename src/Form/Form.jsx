import React, {FC, Children} from 'react';
import './Form.scss';

interface Props {
	id: string
}

const Form: FC<Props> = ({id}) => (
	<form id={id}>
	</form>
);

export default Form;
