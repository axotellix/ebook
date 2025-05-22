import { browser } from "$app/environment"
import { redirect } from '@sveltejs/kit'

export function load() {

	// hack: otherwise localStorage is not defined
	if( browser ) {
		// load > current progress
		const chapter = localStorage.getItem('chapter') || 0

		// redirect > to initial page
		redirect(308, `/${chapter}`);
	}

}