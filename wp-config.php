<?php

//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL cookie settings
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

 define('JWT_AUTH_SECRET_KEY', 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY5NzM4Njk1MywiaWF0IjoxNjk3Mzg2OTUzfQ.vCZIBiwZqnGz_h5QnegmO_BoGmb900KPw6On6BwAAR8');
define('JWT_AUTH_CORS_ENABLE', true);








// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'karlmagnusnokl02' );

/** Database username */
define( 'DB_USER', 'karlmagnusnokl02' );

/** Database password */
define( 'DB_PASSWORD', 'Rbkebest94!' );

/** Database hostname */
define( 'DB_HOST', 'karlmagnusnokl02.mysql.domeneshop.no' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/** Redirect all traffic to the new front end of the site */
define( 'HEADLESS_MODE_CLIENT_URL', 'https://maxbogey.netlify.app' );

define('WP_HOME', 'https://karlmagnusnokling.no/maxbogey');
define('WP_SITEURL', 'https://karlmagnusnokling.no/maxbogey');

//  define('WP_HOME', 'https://maxbogey.local');
// define('WP_SITEURL', 'https://maxbogey.local');




// // ** Database settings - You can get this info from your web host ** //
// /** The name of the database for WordPress */
// define( 'DB_NAME', 'local' );

// /** Database username */
// define( 'DB_USER', 'root' );

// /** Database password */
// define( 'DB_PASSWORD', 'root' );

// /** Database hostname */
// define( 'DB_HOST', 'localhost' );

// /** Database charset to use in creating database tables. */
// define( 'DB_CHARSET', 'utf8' );

// /** The database collate type. Don't change this if in doubt. */
// define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'cymh/HHs}V],ILlp7~V4AQv.4Y{e1NvJ<idAP^iRB4sS@l6g.|H85/ ckhXuu1HH' );
define( 'SECURE_AUTH_KEY',   ']7*&/oZ9r@Ut$6H4;rXoH<-?r0-Vq5a6pVV_#i{6m(%nZx-yL``xTahh8g{Xva=r' );
define( 'LOGGED_IN_KEY',     '?H2qZDP<.iFjYWIjSz5L,9tV/US_J*cGE:]?1hn4@?5mzigx/X6{s]E>RGG>!32t' );
define( 'NONCE_KEY',         'E]eIF-6P4JnUa+,4YLcyp3]>4CE4g]g;}A_jJs:{egl@?L^O|%0L)9^$d&gtZ ,)' );
define( 'AUTH_SALT',         '~d&q`6CU&x_<GT1zjbM ejy5iAl?Dt}mErBWGO]Ix1!,b.$7Ac( $K8:`9Q{Qv]0' );
define( 'SECURE_AUTH_SALT',  'G/P>i[M&e;lE~Om/Tz)g1YmDFIK]Y;DdB;%E#-nt.v>VnId[QR[OvuhKU%A-9+;1' );
define( 'LOGGED_IN_SALT',    'Lput6$6Fv`ynermRckLY59re](ecaQC74&+Fc<T3j(Et]}rnA}azSg]>;O^(2=t7' );
define( 'NONCE_SALT',        'IdLd}/dB9ZW{;TKi,j}4$s|Kn]CKk1O!>LE;#w.bmv1i>1*T3aQx}t# WNzxT7Hd' );
define( 'WP_CACHE_KEY_SALT', '+;g!(@_DIPM CX%|fZ^]#{[m-o84ez>y;$RD#0{LFa|=<+91_a2$! @NJH<6Z6o|' );

define('JWT_AUTH_SECRET_KEY', 'XjjUlm7%<C3+[=_}qW|^/l>1}z0u&@ufWF}=E%A3+[&;B45jTmt$9qOH^CqV~>C');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';