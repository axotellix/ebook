
// [---- IMPORTS ----]
import mammoth from "mammoth";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


// [---- PRESETS ----]
// get > current folder
const __filename = fileURLToPath(import.meta.url);
const currentFolder = path.dirname(__filename);


// transform > table
function transformTable(table) {

	// check > if first row is bold (potential thead)
	if (table.children[0].children[0].children[0].children[0].isBold) {
		table.children[0].isHeader = true   // set > row as <thead>
	}

	return table

}

// pretransform > DOM
function transformElement(element) {

	if (element.children) {
		const newChildren = element.children.map(transformElement)
		element = { ...element, children: newChildren }
	}

	if (element.type === "table") {
		element = transformTable(element)
	}

	return element

}

//@ split > html by H1
const splitByH1 = ( h ) => {

	// contain > chapters content as arr elements
	let chapters = []

	//? while > there are h1-s (above the 1st h1)
	while (h.lastIndexOf("<h1>") > 0) {

		// put > this block into array
		chapters.unshift( h.slice(h.lastIndexOf("<h1>")) )

		// slice > this block out of HTML 
		h = h.slice(0, h.lastIndexOf("<h1>"))

	}

	// put > the 1st h1 as is
	chapters.unshift(h)

	// return > chapters HTML split into array
	return chapters

}

// set > options for the conversion
const options = {
	styleMap: [
		"p[style-name='Image Caption'] => p.pic-caption:fresh",
		"p[style-name='Wrapped Unit Title'] => div.wrapped-unit > h5.wrapped-unit-title:fresh",
		"p[style-name='Wrapped Unit OL'] => div.wrapped-unit > ol.wrapped-unit-ol > li:fresh",
	],
	transformDocument: transformElement
}


// [---- MAIN ----]
// convert > docx to html
mammoth.convertToHtml({ path: currentFolder + "/doc.docx" }, options)
	.then(function (result) {
		let chapters = []
		let html = result.value

		chapters = splitByH1(html)

		// save > html
		for( let i = 0; i < chapters.length; i++ ) {
			fs.writeFile(currentFolder + `/output-${i}.html`, chapters[i], function (err) {
				if (err) {
					return console.log(err);
				}
				console.log(`The file output-${i}.html was created!`);
			});
		}

	}).done();
