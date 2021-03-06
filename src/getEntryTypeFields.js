/*
	Created: 14 Sep 2018, Fri
*/

module.exports = function getEntryTypeFields() {
	return {
		"article": {
			"requiredFields": ["author", "title", "journal", "year"],
			"optionalFields": ["volume", "number", "pages", "month", "note"]
		},
		"book": {
			"requiredFields": ["author", "title", "publisher", "year"],
			"optionalFields": ["volume", "series", "address", "edition", "month", "note"]
		},
		"booklet": {
			"requiredFields": ["title"],
			"optionalFields": ["author", "howpublished", "address", "month", "year", "note"]
		},
		"conference": {
			"requiredFields": ["author", "title", "booktitle", "year"],
			"optionalFields": ["editor", "pages", "organization", "publisher", "address", "month", "note"]
		},
		"inbook": {
			"requiredFields": ["author or editor", "title", "chapter and/or pages", "publisher", "year"],
			"optionalFields": ["volume", "series", "address", "edition", "month", "note"]
		},
		"incollection": {
			"requiredFields": ["author", "title", "booktitle", "year"],
			"optionalFields": ["editor", "pages", "organization", "publisher", "address", "month", "note"]
		},
		"inproceedings": {
			"requiredFields": ["author", "title", "booktitle", "year"],
			"optionalFields": ["editor", "pages", "organization", "publisher", "address", "month", "note"]
		},
		"manual": {
			"requiredFields": ["title"],
			"optionalFields": ["author", "organization", "address", "edition", "month", "year", "note"]
		},
		"mastersthesis": {
			"requiredFields": ["author", "title", "school", "year"],
			"optionalFields": ["address", "month", "note"]
		},
		"misc": {
			"requiredFields": [],
			"optionalFields": ["author", "title", "howpublished", "month", "year", "note"]
		},
		"phdthesis": {
			"requiredFields": ["author", "title", "school", "year"],
			"optionalFields": ["address", "month", "note"]
		},
		"proceedings": {
			"requiredFields": ["title", "year"],
			"optionalFields": ["editor", "publisher", "organization", "address", "month", "note"]
		},
		"techreport": {
			"requiredFields": ["author", "title", "institution", "year"],
			"optionalFields": ["type", "number", "address", "month", "note"]
		},
		"unpublished": {
			"requiredFields": ["author", "title", "note"],
			"optionalFields": ["month", "year"]
		}
	};
}
