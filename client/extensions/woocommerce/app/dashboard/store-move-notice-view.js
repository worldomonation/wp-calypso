/**
 * External dependencies
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { localize, translate } from 'i18n-calypso';

/**
 * Internal dependencies
 */

import { Card, Button } from '@automattic/components';
import { getSelectedSiteWithFallback } from 'woocommerce/state/sites/selectors';
import config from '@automattic/calypso-config';

/**
 * Image dependencies
 */

import megaphoneImage from 'calypso/assets/images/woocommerce/megaphone.svg';

function getStoreStatus( isStoreDeprecated, isStoreRemoved ) {
	if ( isStoreDeprecated ) {
		return 'store-deprecated';
	}

	if ( isStoreRemoved ) {
		return 'store-removed';
	}

	return '';
}

class StoreMoveNoticeView extends Component {
	render = () => {
		const { site, isStoreDeprecated, isStoreRemoved } = this.props;
		const status = getStoreStatus( isStoreDeprecated, isStoreRemoved );

		return (
			<Card className={ classNames( 'dashboard__store-move-notice', status ) }>
				<img src={ megaphoneImage } alt="" />
				<h1>{ translate( 'Find all of your business features in WooCommerce' ) }</h1>
				<p>
					{ isStoreDeprecated &&
						translate(
							'We’re rolling your favorite Store features into WooCommerce. In addition to Products and Orders, you’ll have top-level access for managing your Analytics, Marketing, and Customers. {{link}}Learn more{{/link}} about what to expect in February.',
							{
								components: {
									link: (
										<a href="https://wordpress.com/support/new-woocommerce-experience-on-wordpress-dot-com/" />
									),
								},
							}
						) }
					{ isStoreRemoved &&
						translate(
							'We’ve rolled your favorite Store features into WooCommerce. In addition to Products and Orders, you have top-level access for managing your Analytics, Marketing, and Customers. {{link}}Learn more{{/link}} about what has changed.',
							{
								components: {
									link: (
										<a href="https://wordpress.com/support/new-woocommerce-experience-on-wordpress-dot-com/" />
									),
								},
							}
						) }
				</p>
				<Button primary href={ site.URL + '/wp-admin/admin.php?page=wc-admin&from-calypso' }>
					{ translate( 'Go to WooCommerce Home' ) }
				</Button>
			</Card>
		);
	};
}

function mapStateToProps( state ) {
	return {
		site: getSelectedSiteWithFallback( state ),
		isStoreDeprecated: config.isEnabled( 'woocommerce/store-deprecated' ),
		isStoreRemoved: config.isEnabled( 'woocommerce/store-removed' ),
	};
}

export default connect( mapStateToProps )( localize( StoreMoveNoticeView ) );
