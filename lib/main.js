/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var asin = require( '@stdlib/math-base-special-asin' );


// MAIN //

/**
* Computes the inverse coversed cosine.
*
* @param {number} x - input value
* @returns {number} inverse coversed cosine
*
* @example
* var v = acovercos( 0.0 );
* // returns ~-1.5708
*
* @example
* var v = acovercos( 3.141592653589793/2.0 );
* // returns ~0.6075
*
* @example
* var v = acovercos( 3.141592653589793/6.0 );
* // returns ~-0.4966
*
* @example
* var v = acovercos( NaN );
* // returns NaN
*/
function acovercos( x ) {
	return asin( x - 1.0 );
}


// EXPORTS //

module.exports = acovercos;
