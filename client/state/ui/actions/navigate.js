/**
 * Internal dependencies
 */
import { NAVIGATE } from 'calypso/state/action-types';

import 'calypso/state/ui/init';

/**
 * Returns an action object signalling navigation to the given path.
 *
 * @param  {string} path Navigation path
 * @returns {object}      Action object
 */
export const navigate = ( path ) => ( { type: NAVIGATE, path } );
