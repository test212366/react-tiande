import React from 'react';
import SectionFooterStock from '../ui/SectionFooterStock/SectionFooterStock';
import SectionFooterAgreement from '../SectionFooterAgreement/SectionFooterAgreement';
import SectionFooterMain from '../SectionFooterMain/SectionFooterMain';

export default function Footer({ isDetail }) {
	return (
		<footer className=" h-460px bg-white">
			<div className=".2x1.0:relative ..7x2:px-4 ..6x6:px-6 container-base px-20 ..5x3:px-10 font-montserrat">
				<SectionFooterMain />
				<SectionFooterAgreement />
				<svg
					className="..6x04:right-0 .2x1.0:block -z-10 hidden absolute bottom-0 right-20 ..5x2:right-10"
					width="99"
					height="196"
					viewBox="0 0 99 196"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M60.8581 128.922C60.7792 130.913 60.7408 132.705 60.7408 134.283C60.7408 139.112 60.7408 147.028 60.7408 156.066C60.7408 173.121 60.7408 194.17 60.7408 205.998L60.8581 128.922ZM60.8581 128.922C61.3184 117.257 63.4407 98.7517 67.1209 75.6825M60.8581 128.922L67.1209 75.6825M60.8581 128.922C62.0943 112.836 85.4555 86.0705 95.3979 73.6714L60.8581 128.922ZM76.6967 27.4259C77.5597 24.5442 78.4689 21.6106 79.0108 19.3832L90.8991 10L76.6967 27.4259ZM76.6967 27.4259C75.9717 29.8462 75.2785 32.23 74.8632 34.1282M76.6967 27.4259L74.8632 34.1282M76.6967 27.4259L65.1931 17.3725M74.8632 34.1282L92.5058 21.729M74.8632 34.1282C74.2763 36.8052 73.708 39.4887 73.1579 42.1709M74.8632 34.1282L73.1579 42.1709M73.1579 42.1709C72.5606 45.08 71.9852 47.9877 71.4307 50.8839M73.1579 42.1709L71.4307 50.8839M73.1579 42.1709L59.4092 31.7824M71.4307 50.8839L91.863 36.8091M71.4307 50.8839C71.0663 52.7887 70.7112 54.6886 70.3649 56.5808M71.4307 50.8839L70.3649 56.5808M70.3649 56.5808C70.0163 58.4884 69.6766 60.3886 69.3473 62.2779M70.3649 56.5808L69.3473 62.2779M70.3649 56.5808L56.517 47.8679M69.3473 62.2779L88.3286 51.5541M69.3473 62.2779C69.0327 64.0791 68.619 66.5341 68.2141 68.9799M69.3473 62.2779L68.2141 68.9799M68.2141 68.9799C67.8047 71.4509 67.4036 73.9128 67.1209 75.6825M68.2141 68.9799L67.1209 75.6825M68.2141 68.9799L56.517 62.2779M67.1209 75.6825L81.2597 66.9694M37.4349 136.338C44.1958 131.05 55.1098 130.115 60.7408 148.358L37.4349 136.338ZM37.4349 136.338C36.4173 137.134 32.913 140.057 30.0274 145.721M37.4349 136.338L30.0274 145.721M37.4349 136.338C41.7573 139.644 36.5171 142.141 34.9269 151.083M37.4349 136.338L34.9269 151.083M37.4349 136.338C28.9583 135.356 22.5043 143.443 19.3096 153.093M37.4349 136.338L19.3096 153.093M30.0274 145.721L34.9269 151.083M30.0274 145.721C29.457 146.841 28.9107 148.068 28.4125 149.408M30.0274 145.721L28.4125 149.408M34.9269 151.083C34.7438 152.111 34.609 153.224 34.5427 154.434C34.4123 156.815 34.2819 159.46 34.0868 162.142M34.9269 151.083L34.0868 162.142M19.3096 153.093C18.0081 157.025 17.2476 161.215 17.1111 165.157M19.3096 153.093L17.1111 165.157M19.3096 153.093L28.4125 149.408M28.4125 149.408C27.8448 150.935 27.3391 152.608 26.9319 154.434M28.4125 149.408L26.9319 154.434M34.0868 162.142L26.9319 154.434M34.0868 162.142C33.8627 165.221 33.5536 168.35 33.0621 171.19M34.0868 162.142L33.0621 171.19M26.9319 154.434C26.6053 155.899 26.3423 157.461 26.1603 159.126M26.9319 154.434L26.1603 159.126M26.1603 159.126C26.0097 160.507 25.9154 161.958 25.8875 163.482M26.1603 159.126L25.8875 163.482M26.1603 159.126L17.1111 165.157M33.0621 171.19L25.8875 163.482M33.0621 171.19C32.5651 174.059 31.8817 176.634 30.9107 178.562M33.0621 171.19L30.9107 178.562M25.8875 163.482C25.8584 165.078 25.9023 166.753 26.0316 168.509M25.8875 163.482L26.0316 168.509M26.0316 168.509C26.1346 169.909 26.2919 171.361 26.5094 172.865L30.9107 178.562M26.0316 168.509L30.9107 178.562M26.0316 168.509L18.8657 176.216M30.9107 178.562C29.5572 181.25 27.6454 182.683 24.9028 181.913C22.124 181.133 20.1398 179.065 18.8657 176.216M30.9107 178.562L18.8657 176.216M18.8657 176.216C17.5194 173.205 16.9676 169.319 17.1111 165.157M18.8657 176.216L17.1111 165.157"
						stroke="#EFF5F0"
					/>
					<path
						d="M108.895 120.586C102.79 120.586 61.384 110.541 60.7412 154.441M108.895 120.586C101.183 126.035 98.6122 126.619 96.0417 122.597C94.435 120.084 97.0056 112.543 108.895 120.586ZM108.895 120.586C115.643 125.151 129.675 135.666 133.317 140.693C135.888 144.38 150.99 133.656 138.458 116.23C128.432 102.289 116.607 115.138 108.895 120.586Z"
						stroke="#EFF5F0"
					/>
					<path
						d="M90.3001 44.2306C87.6424 55.0176 83.405 64.2639 78.7253 70.4952C76.3849 73.6114 73.9508 75.9515 71.5693 77.362C69.1911 78.7703 66.8972 79.2342 64.7952 78.6707C62.6926 78.1073 60.898 76.5475 59.4651 74.1177C58.0305 71.685 56.98 68.4109 56.3701 64.5041C55.1514 56.6918 55.7142 46.4604 58.3724 35.6736C61.0301 24.8868 65.2676 15.6402 69.9473 9.40892C72.2877 6.29252 74.7218 3.95249 77.1033 2.54235C79.4815 1.13418 81.7753 0.670026 83.8773 1.23344C85.9799 1.79687 87.7745 3.35682 89.2074 5.78637C90.642 8.21923 91.6925 11.4933 92.3024 15.4003C93.5211 23.2123 92.9583 33.4439 90.3001 44.2306Z"
						stroke="#EFF5F0"
					/>
					<path
						d="M49.249 62.6099C53.5785 68.4042 56.2877 74.5972 57.187 79.9065C58.0911 85.2449 57.1503 89.528 54.417 91.7496C51.6831 93.9713 47.4703 93.8757 42.7281 91.657C38.0112 89.4496 32.9144 85.1963 28.5855 79.4025C24.2285 73.5716 19.0924 65.5019 15.7908 58.3039C14.1376 54.7004 12.9616 51.3511 12.5578 48.6283C12.1495 45.8744 12.5561 43.961 13.7951 42.954C15.0724 41.9161 17.3092 41.758 20.2743 42.463C23.1994 43.1584 26.673 44.6564 30.2579 46.6822C37.4319 50.7359 44.9348 56.8362 49.249 62.6099Z"
						stroke="#EFF5F0"
					/>
					<path
						d="M35.309 64.5352C32.9878 62.158 30.7959 60.4134 28.8824 59.258L35.309 64.5352ZM35.309 64.5352L32.0957 48.1992M35.309 64.5352C36.6669 65.9257 38.0692 67.5325 39.4862 69.364M35.309 64.5352L39.4862 69.364M50.6227 89.0829C57.7124 106.183 60.741 130.483 60.741 164.324L50.6227 89.0829ZM50.6227 89.0829L52.0184 66.9656M50.6227 89.0829C49.8446 87.2057 49.0423 85.4187 48.2231 83.7211M50.6227 89.0829L48.2231 83.7211M39.4862 69.364C41.2019 71.5811 42.939 74.1276 44.6454 77.019M39.4862 69.364L44.6454 77.019M39.4862 69.364H22.4557M44.6454 77.019L41.7357 54.9017M44.6454 77.019C45.8597 79.0765 47.0587 81.309 48.2231 83.7211M44.6454 77.019L48.2231 83.7211M48.2231 83.7211H32.0957"
						stroke="#EFF5F0"
					/>
					<path
						d="M87.5407 106.842C81.6719 111.031 74.831 111.38 70.7267 107.493C68.1901 105.091 67.0985 101.471 67.4427 97.5009C67.7868 93.5312 69.5683 89.2498 72.7301 85.6188C75.9385 81.934 80.6302 77.5972 85.1675 74.8218C87.4388 73.4325 89.6367 72.4561 91.5694 72.1272C93.4939 71.8 95.0918 72.1226 96.2732 73.2414C97.4788 74.3831 98.2262 76.3256 98.5249 78.8195C98.8213 81.2991 98.6635 84.2426 98.1352 87.2805C97.1007 93.2269 94.6726 99.4022 91.6352 103.049L84.3005 100.935L82.6758 100.466L83.7252 101.842L87.5407 106.842Z"
						stroke="#EFF5F0"
					/>
					<path
						d="M79.6534 157.783C73.2252 153.761 75.4779 149.74 81.1768 150.745M60.7412 187.14C60.7412 169.044 67.4429 155.102 79.6534 157.783L60.7412 187.14ZM79.6534 157.783C89.4222 159.927 110.074 166.719 119.178 169.847C124.962 164.485 115.964 156.107 107.61 150.745C95.3288 142.864 84.9518 143.476 81.1768 150.745L79.6534 157.783ZM79.6534 157.783C79.6534 155.003 80.1893 152.646 81.1768 150.745L79.6534 157.783Z"
						stroke="#EFF5F0"
					/>
					<path
						d="M26.0532 97.4625C28.2714 95.9839 30.4912 93.9677 34.024 93.4414C38.8462 92.7224 44.0322 95.4874 40.7739 97.6639C34.9901 101.528 27.8533 97.351 26.0532 97.4625ZM26.0532 97.4625C20.0178 101.486 16.308 104.19 15.3885 120.25C14.1035 142.703 2.53524 123.602 1.24969 114.218C-0.0353049 104.835 2.97963 96.1218 26.0532 97.4625ZM26.0532 97.4625C35.7797 92.1007 60.484 98.5785 60.7416 146.835"
						stroke="#EFF5F0"
					/>
				</svg>
			</div>

			<SectionFooterStock isDetail={isDetail}
				text={[
					'В соответствии с законом о регистрации продаж, продавец обязан выдавать покупателю счёт-фактуру. Он также обязан зарегистрировать полученную выручку в налоговом комитете в режиме онлайн; в случае технических неполадок не позже 48 часов после получения выручки.',
					'P.H.U. Kapitał Patrycja Milic Polska ul. Wojska Polskiego 20, 41-400 Mysłowice NIP 6342286043, REGON 277563151',
				]}
			/>
		</footer>
	);
}