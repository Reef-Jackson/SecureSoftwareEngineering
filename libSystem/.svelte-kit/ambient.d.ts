
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const BROWSER: string;
	export const XDG_SESSION_CLASS: string;
	export const EDITOR: string;
	export const USER: string;
	export const LOGNAME: string;
	export const XDG_SEAT: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const NVIM_LOG_FILE: string;
	export const LANG: string;
	export const MYVIMRC: string;
	export const UBUNTU_MENUPROXY: string;
	export const PATH: string;
	export const XDG_VTNR: string;
	export const I3SOCK: string;
	export const LC_TIME: string;
	export const VTE_VERSION: string;
	export const MAIL: string;
	export const MOTD_SHOWN: string;
	export const TERM: string;
	export const HG: string;
	export const MASON: string;
	export const XDG_SESSION_DESKTOP: string;
	export const SHELL: string;
	export const PWD: string;
	export const DESKTOP_SESSION: string;
	export const LC_MONETARY: string;
	export const XDG_GREETER_DATA_DIR: string;
	export const GDMSESSION: string;
	export const XDG_SESSION_PATH: string;
	export const DEBUGINFOD_URLS: string;
	export const XDG_SEAT_PATH: string;
	export const LC_MEASUREMENT: string;
	export const ANDROID_HOME: string;
	export const DISPLAY: string;
	export const GTK3_MODULES: string;
	export const XDG_SESSION_TYPE: string;
	export const WINDOWID: string;
	export const GTK_MODULES: string;
	export const XDG_RUNTIME_DIR: string;
	export const SHLVL: string;
	export const HOME: string;
	export const LC_NUMERIC: string;
	export const LC_NAME: string;
	export const XDG_SESSION_ID: string;
	export const COLORTERM: string;
	export const LC_ADDRESS: string;
	export const LC_TELEPHONE: string;
	export const VIMRUNTIME: string;
	export const ANDROID_SDK_ROOT: string;
	export const XAUTHORITY: string;
	export const LC_IDENTIFICATION: string;
	export const LC_PAPER: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const NVIM: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		BROWSER: string;
		XDG_SESSION_CLASS: string;
		EDITOR: string;
		USER: string;
		LOGNAME: string;
		XDG_SEAT: string;
		XDG_CURRENT_DESKTOP: string;
		NVIM_LOG_FILE: string;
		LANG: string;
		MYVIMRC: string;
		UBUNTU_MENUPROXY: string;
		PATH: string;
		XDG_VTNR: string;
		I3SOCK: string;
		LC_TIME: string;
		VTE_VERSION: string;
		MAIL: string;
		MOTD_SHOWN: string;
		TERM: string;
		HG: string;
		MASON: string;
		XDG_SESSION_DESKTOP: string;
		SHELL: string;
		PWD: string;
		DESKTOP_SESSION: string;
		LC_MONETARY: string;
		XDG_GREETER_DATA_DIR: string;
		GDMSESSION: string;
		XDG_SESSION_PATH: string;
		DEBUGINFOD_URLS: string;
		XDG_SEAT_PATH: string;
		LC_MEASUREMENT: string;
		ANDROID_HOME: string;
		DISPLAY: string;
		GTK3_MODULES: string;
		XDG_SESSION_TYPE: string;
		WINDOWID: string;
		GTK_MODULES: string;
		XDG_RUNTIME_DIR: string;
		SHLVL: string;
		HOME: string;
		LC_NUMERIC: string;
		LC_NAME: string;
		XDG_SESSION_ID: string;
		COLORTERM: string;
		LC_ADDRESS: string;
		LC_TELEPHONE: string;
		VIMRUNTIME: string;
		ANDROID_SDK_ROOT: string;
		XAUTHORITY: string;
		LC_IDENTIFICATION: string;
		LC_PAPER: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		NVIM: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
