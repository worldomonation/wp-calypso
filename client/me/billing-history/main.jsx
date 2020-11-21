/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import { billingHistoryReceipt } from 'calypso/me/purchases/paths';
import { Card } from '@automattic/components';
import MeSidebarNavigation from 'calypso/me/sidebar-navigation';
import PurchasesHeader from '../purchases/purchases-list/header';
import BillingHistoryTable from './billing-history-table';
import Main from 'calypso/components/main';
import DocumentHead from 'calypso/components/data/document-head';
import PageViewTracker from 'calypso/lib/analytics/page-view-tracker';
import QueryBillingTransactions from 'calypso/components/data/query-billing-transactions';
import titles from 'calypso/me/purchases/titles';
import FormattedHeader from 'calypso/components/formatted-header';

/**
 * Style dependencies
 */
import './style.scss';

export function BillingHistoryList( { siteId = null, getReceiptUrlFor = billingHistoryReceipt } ) {
	return (
		<Card className="billing-history__receipts">
			<BillingHistoryTable siteId={ siteId } getReceiptUrlFor={ getReceiptUrlFor } />
		</Card>
	);
}

export default function BillingHistory() {
	return (
		<Main className="billing-history is-wide-layout">
			<DocumentHead title={ titles.billingHistory } />
			<PageViewTracker path="/me/purchases/billing" title="Me > Billing History" />
			<MeSidebarNavigation />

			<FormattedHeader brandFont headerText={ titles.sectionTitle } align="left" />
			<QueryBillingTransactions />
			<PurchasesHeader section="billingHistory" />
			<BillingHistoryList />
		</Main>
	);
}
