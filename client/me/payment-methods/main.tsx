/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import { addCreditCard } from 'calypso/me/purchases/paths';
import MeSidebarNavigation from 'calypso/me/sidebar-navigation';
import PaymentMethodList from 'calypso/me/payment-methods/payment-method-list';
import PurchasesHeader from '../purchases/purchases-list/header';
import Main from 'calypso/components/main';
import DocumentHead from 'calypso/components/data/document-head';
import PageViewTracker from 'calypso/lib/analytics/page-view-tracker';
import titles from 'calypso/me/purchases/titles';
import FormattedHeader from 'calypso/components/formatted-header';

/**
 * Style dependencies
 */
import './style.scss';

export default function PaymentMethods(): JSX.Element {
	return (
		<Main className="payment-methods__main is-wide-layout">
			<DocumentHead title={ titles.paymentMethods } />
			<PageViewTracker path="/me/purchases/payment-methods" title="Me > Payment Methods" />
			<MeSidebarNavigation />
			<FormattedHeader brandFont headerText={ titles.sectionTitle } align="left" />
			<PurchasesHeader section="paymentMethods" />
			<PaymentMethodList addPaymentMethodUrl={ addCreditCard } />
		</Main>
	);
}
