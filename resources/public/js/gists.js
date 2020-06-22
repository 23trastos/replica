var loadGist = function(id, filename, rklipseId) {

	$.ajax({
		url: 'https://api.github.com/gists/'+id,
		type: 'GET',
		dataType: 'jsonp',
		success: function(gistdata) {
			$('#'+rklipseId+' .CodeMirror')[0].CodeMirror.setValue(gistdata.data.files[filename].content);
		},
                error: function(e) {
	  		console.error("Error!: ", e);
		}
	});
    
};

var createGist = function(gist, username, password) {

	$.ajax({
		url: 'https://api.github.com/gists',
		type: 'POST',
		dataType: 'json',
		data: JSON.stringify(gist),
		crossDomain: true,
		beforeSend: function (XHR) {
			XHR.setRequestHeader(
				'Authorization','Basic ' + btoa(username + ':' + password)
			);
		},
		success: function(e) {
			console.log(e);
		},
		error: function(e) {
			console.error("Error!: ", e);
		}
	});

};
