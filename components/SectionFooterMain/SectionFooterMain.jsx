import React from 'react';
import FooterMenuList from '../FooterMenuList/FooterMenuList';
import SectionFooterInfo from '../SectionFooterInfo/SectionFooterInfo';
import SectionFooterRight from '../SectionFooterRight/SectionFooterRight';

export default function SectionFooterMain() {
	return (
		<div className="flex .2x1.0:flex-col  .2x1.0:h-auto .2x1.0:items-start .2x1.0:justify-start ..5x2:pt-0 .2x1.0:pt-6 flex-row justify-between items-center h-384px">
			<SectionFooterInfo />
			<FooterMenuList />
			<SectionFooterRight />
		</div>
	);
}
