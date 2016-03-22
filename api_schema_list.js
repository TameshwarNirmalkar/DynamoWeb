Api display package
http://dynamopackages.com/packages/

Api display package
http://dynamopackages.com/package/
Schema:
defaults: {
	"name": "",
	"engine": "dynamo",
	"keywords": [],
	"description": "description",
	"deprecated": false,
	"group": "group",
	"votes": 0,
	"maintainers": [],
	"version_deps": [],
	"full_dl_deps": [],
	"versions": [],
	"used_by": []
}

/* Api Aurthor call*/
Aurthor Api:
http://dynamopackages.com/user_name/peetle/
defaults: {
	"username": "username",
	"last_updated_package": "unknown package",
	"maintains": [],
	"num_downloads_for_maintained_packages": 0,
	"num_votes_for_maintained_packages": 0,
}

/*Stat method and calls*/
default schema:
defaults: {
	"variety": "package",
	"type": "most_installed_package",
	"data": "",
	"metric": ""
}
var stat_map: {
	"most_installed_packages" : function(pkg) { return pkg.downloads; }, 
	"newest_packages": function(pkg){ return prettyDate( pkg.created ); }, 
	"most_recently_updated_packages": function(pkg) { return prettyDate( pkg.latest_version_update);},
	"most_depended_upon_packages": function( pkg ) { return pkg.num_dependents; },
	"most_commented_upon_packages": function(pkg) { return pkg.num_comments; },
	"most_voted_for_authors": function(user) { return user.num_votes_for_maintained_packages; },
	"most_installed_authors": function(user) { return user.num_downloads_for_maintained_packages; },
	"most_prolific_authors": function(user){ return user.num_maintained_packages; },
	"most_recently_active_authors": function(user){ return prettyDate(user.last_updated_package.latest_version_update);}
}

/**/


/* Get packages and aurthors*/
{
	"getAuthor": function(id){
		this.set('downloading', true );
		var model = new app.Author();
		model.urlRoot = '/user/' + id;
		var that = this;
		model.fetch({
			success: function(){
				that.set('downloading', false);	
				that.set('current_model', model);
			}
		});
	},
	"getPackage": function(id){
		this.set('downloading', true );
		var model = new app.Package();
		model.urlRoot = '/package/' + id;
		var that = this;
		model.fetch({success: function(){
			that.set('downloading', false);	
			that.set('current_model', model);
		}});
	}
}