/**
 * External dependencies
 */
import React from 'react';
import { useTranslate } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import SectionNav from 'calypso/components/section-nav';
import NavTabs from 'calypso/components/section-nav/tabs';
import NavItem from 'calypso/components/section-nav/item';

export default function PurchasesNavigation( {
	sectionTitle,
	siteSlug,
}: {
	sectionTitle: string;
	siteSlug: string | null;
} ): JSX.Element {
	const translate = useTranslate();

	return (
		<SectionNav selectedText={ sectionTitle }>
			<NavTabs label="Section" selectedText={ sectionTitle }>
				<NavItem
					path={ `/purchases/subscriptions/${ siteSlug }` }
					selected={ sectionTitle === 'Active Upgrades' }
				>
					{ translate( 'Active Upgrades' ) }
				</NavItem>
				<NavItem
					path={ `/purchases/billing-history/${ siteSlug }` }
					selected={ sectionTitle === 'Billing History' }
				>
					{ translate( 'Billing History' ) }
				</NavItem>
				<NavItem
					path={ `/purchases/payment-methods/${ siteSlug }` }
					selected={ sectionTitle === 'Payment Methods' }
				>
					{ translate( 'Payment Methods' ) }
				</NavItem>
			</NavTabs>
		</SectionNav>
	);
}
