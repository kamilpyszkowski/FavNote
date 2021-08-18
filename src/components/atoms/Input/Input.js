import styled, { css } from 'styled-components';
import magnifierIcon from 'assets/magnifier.svg';

const Input = styled.input`
	padding: 15px 30px;
	font-size: ${({ theme }) => theme.fontSize.s};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
	background-color: ${({ theme }) => theme.color.gray100};
	border: none;
	border-radius: 50px;

	::placeholder {
		letter-spacing: 1px;
		color: ${({ theme }) => theme.color.gray500};
	}

	${({ search }) =>
		search &&
		css`
			padding: 10px 20px 10px 40px;
			font-size: ${({ theme }) => theme.fontSize.xs};
			background-size: 15px;
			background-position: 15px 50%;
			background-image: url(${magnifierIcon});
			background-repeat: no-repeat;

			::placeholder {
				text-transform: uppercase;
			}
		`}
`;

export default Input;
