// svg icons

export function svgIcon( iconKey ) {

	let icon = '';

	switch( iconKey ) {

		case 'default':
			icon = (
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"/>
				</svg>
			);
			break;


		// container

		case 'container':
			icon = (
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" role="img" focusable="false"><path d="M18.71,3.29C18.52,3.1,18.27,3,18,3H2C1.74,3,1.48,3.11,1.29,3.29C1.11,3.48,1,3.74,1,4v12c0,0.26,0.11,0.52,0.29,0.71
					C1.48,16.89,1.74,17,2,17h16c0.27,0,0.52-0.1,0.71-0.29C18.89,16.52,19,16.27,19,16V4C19,3.73,18.89,3.48,18.71,3.29z M17,15H3V5h14
					V15z M6,12H5v2h1V12z M6,6H5v2h1V6z M6,9H5v2h1V9z M15,9h-1v2h1V9z M15,6h-1v2h1V6z M15,12h-1v2h1V12z"/>
				</svg>
			);
			break;


		// banner

		case 'banner-empty':
			icon = (
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"/>
				</svg>
			);
			break;

		case 'banner-container-with-heading':
			icon = (
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"/>
				</svg>
			);
			break;

		case 'banner-static-container-with-heading':
			icon = (
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"/>
				</svg>
			);
			break;

		case 'column-row-banner':
			icon = (
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"/>
				</svg>
			);
			break;


		// columns



		// lazy img

		case 'lazy-img':
			icon = (
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" role="img" focusable="false">
		            <path d="M18.71,1.29C18.52,1.11,18.26,1,18,1H2C1.74,1,1.48,1.11,1.29,1.29C1.11,1.48,1,1.74,1,2v16c0,0.26,0.11,0.52,0.29,0.71 C1.48,18.89,1.74,19,2,19h16c0.26,0,0.52-0.11,0.71-0.29C18.89,18.52,19,18.26,19,18V2C19,1.74,18.89,1.48,18.71,1.29z M3,17V3h14 l0,14H3z M9,12l-2-1l-3,2v2.98h12V11l-3-2L9,12z M7.5,9C8.88,9,10,7.88,10,6.5S8.88,4,7.5,4S5,5.12,5,6.5S6.12,9,7.5,9z"/>
		        </svg>
			);
			break;



		// section

		case 'section':
			icon = (
				<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" role="img" focusable="false">
		            <path d="M14,4h-3v2h3V4z M8.29,5.71C8.48,5.9,8.73,6,9,6h0V3.59L7.71,2.29C7.52,2.1,7.26,2,7,2H6v2h0.58L8.29,5.71z M19,7V5 c0-0.27-0.1-0.52-0.29-0.71C18.52,4.1,18.27,4,18,4h-2v2h1v9L3,15v-2H1v3c0,0.26,0.11,0.52,0.29,0.71C1.48,16.89,1.74,17,2,17h2v-2 h2v2h3v-2h2v2h3v-2h2v2h2c0.27,0,0.52-0.1,0.71-0.29C18.89,16.52,19,16.27,19,16v-2h-2v-2h2V9h-2V7H19z M3,4h1V2H2 C1.74,2,1.48,2.11,1.29,2.29C1.11,2.48,1,2.74,1,3v3h2V4z M3,8H1v3h2V8z"/>
		        </svg>
			);
			break;

		case 'section-empty':
			icon = (
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M38.96,30h2l0.01-3h-2L38.96,30z M23,18h3v-2h-3V18z M28,36h3v-2h-3V36z M33,36h3v-2h-3V36z M23,36h3v-2h-3V36z
					 M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M13,36h3v-2h-3V36z M33,18h3v-2h-3
					V18z M18,36h3v-2h-3V36z M28,18h3v-2h-3V18z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z M9,23H7v3h2
					V23z M9,18H7v3h2V18z M38.95,34H38v2h1.95c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M15.58,14L17,12.59l-0.29-0.29
					C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M9,28H7v3h2V28z M38.98,25h2l0.01-3h-2L38.98,25z M18.41,14L17,15.41
					l2.29,2.29C19.48,17.9,19.73,18,20,18h1v-2h-0.59L18.41,14z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2
					V14z"/>
				</svg>
			);
			break;

		case 'section-container-heading':
			icon = (
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M13,24h22v-3H13V24z M9,23H7v3h2V23z M9,28H7v3h2V28z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9
					V33z M9,18H7v3h2V18z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2V14z M31,16h-3v2h3V16z M26,16h-3v2h3V16
					z M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59l-2-2L17,15.41L19.29,17.71z M15.58,14L17,12.59l-0.29-0.29
					C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M23,36h3v-2h-3V36z M38.96,30h2l0.01-3h-2L38.96,30z M38.95,34H38v2h1.95
					c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M38.98,25h2l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M33,36h3v-2h-3V36z M13,36h3v-2h-3V36z
					 M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M18,36h3v-2h-3V36z M28,36h3v-2h-3
					V36z"/>
				</svg>
			);
			break;

		case 'section-container-heading-text-gallery':
			icon = (
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M35,20H13v3h22V20z M9,23H7v3h2V23z M9,28H7v3h2V28z M9,18H7v3h2V18z M26,16h-3v2h3V16z M9,14h1v-2H8
					c-0.26,0-0.52,0.1-0.71,0.29C7.11,12.48,7,12.74,7,13v3h2V14z M31,16h-3v2h3V16z M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59
					l-2-2L17,15.41L19.29,17.71z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z M38.95,34H38v2h1.95
					c0.55,0,1-0.45,1-1l0.01-3h-2L38.95,34z M38.96,30h2l0.01-3h-2L38.96,30z M15.58,14L17,12.59l-0.29-0.29C16.52,12.11,16.26,12,16,12
					h-4v2L15.58,14L15.58,14z M38.98,25h2l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2
					L41,17C41,16.73,40.9,16.48,40.71,16.29z M18,36h3v-2h-3V36z M13,36h3v-2h-3V36z M33,36h3v-2h-3V36z M23,36h3v-2h-3V36z M28,36h3v-2
					h-3V36z M35,31v-3h-6v3H35z M21,31h6v-3h-6V31z M13,31h6v-3h-6V31z M35,24H13v1h22V24z M35,26H13v1h22V26z"/>
				</svg>
			);
			break;

		case 'section-container-rounded-colored-banner':
			icon = (
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false"><path fill-rule="evenodd" clip-rule="evenodd" d="M9,23H7v3h2V23z M9,28H7v3h2V28z M9,18H7v3h2V18z M31,16h-3v2h3V16z M9,14h1v-2H8c-0.26,0-0.52,0.1-0.71,0.29
					C7.11,12.48,7,12.74,7,13v3h2V14z M26,16h-3v2h3V16z M9,33H7v2c0,0.26,0.1,0.52,0.29,0.71C7.48,35.89,7.74,36,8,36h3v-2H9V33z
					 M19.29,17.71C19.48,17.9,19.73,18,20,18h1v-2h-0.59l-2-2L17,15.41L19.29,17.71z M15.58,14L17,12.59l-0.29-0.29
					C16.52,12.11,16.26,12,16,12h-4v2L15.58,14L15.58,14z M38.96,30h2l0.01-3h-2L38.96,30z M38.95,34H38v2h1.95c0.55,0,1-0.45,1-1
					l0.01-3h-2L38.95,34z M40.71,16.29C40.52,16.1,40.27,16,40,16h-2v2h1l0,2h2L41,17C41,16.73,40.9,16.48,40.71,16.29z M38.98,25h2
					l0.01-3h-2L38.98,25z M33,18h3v-2h-3V18z M18,36h3v-2h-3V36z M13,36h3v-2h-3V36z M23,36h3v-2h-3V36z M28,36h3v-2h-3V36z M33,36h3v-2
					h-3V36z M13,22v5c0,0.55,0.45,1,1,1h20c0.55,0,1-0.45,1-1v-5c0-0.55-0.45-1-1-1H14C13.45,21,13,21.45,13,22z M26,27h-4v-1h4V27z
					 M20,22h8v1h-8V22z M15,24h18v1H15V24z"/>
				</svg>
			);
			break;



		// default

		default:
			icon = (
				<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" role="img" aria-hidden="true" focusable="false">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M39,12H9c-1.1,0-2,0.9-2,2v20c0,1.1,0.9,2,2,2h30c1.1,0,2-0.9,2-2V14C41,12.9,40.1,12,39,12z M39,34H9V14h30V34z M22.49,31.03h2.35v-2.21h-2.35V31.03z M22.51,19.38c0.36-0.28,0.81-0.42,1.35-0.42c0.63,0,1.1,0.17,1.43,0.5s0.49,0.81,0.49,1.44 c0,0.54-0.14,1.03-0.43,1.45s-0.68,0.89-1.18,1.38c-0.71,0.6-1.16,1.09-1.35,1.46s-0.3,1.02-0.3,1.94h2.3 c0-0.56,0.04-0.97,0.13-1.25s0.32-0.58,0.68-0.9c0.72-0.58,1.31-1.21,1.77-1.88c0.46-0.67,0.69-1.42,0.69-2.23 c0-1.22-0.37-2.16-1.09-2.83c-0.73-0.67-1.77-1-3.12-1c-1.25,0-2.26,0.31-3.02,0.94c-0.76,0.62-1.15,1.52-1.17,2.69h2.3 C21.97,20.09,22.15,19.66,22.51,19.38z"/>
				</svg>
			);
	}

	return icon;

}