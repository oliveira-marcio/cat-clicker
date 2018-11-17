var initialCats = [
	{
		clickCount: 0,
		name: 'Tabby',
		imgSrc: 'img/434164568_fea0ad4013_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
		nicknames: ['Bert', 'Charles', 'Denise']
	},
	{
		clickCount: 0,
		name: 'John',
		imgSrc: 'img/22252709_010df3379e_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
		nicknames: ['Bert2', 'Charles2', 'Denise2']
	},
	{
		clickCount: 0,
		name: 'Lucas',
		imgSrc: 'img/1413379559_412a540d29_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
		nicknames: ['Bert3', 'Charles3', 'Denise3']
	},
	{
		clickCount: 0,
		name: 'Pedro',
		imgSrc: 'img/4154543904_6e2428c421_z.jpg',
		imgAttribution: 'https://www.flickr.com/photos/bigtallguy/434164568',
		nicknames: ['Bert4', 'Charles4', 'Denise4']
	}
];

var Cat = function(data){
	var {clickCount, name, imgSrc, imgAttribution, nicknames} = data;
	this.clickCount = ko.observable(clickCount);
	this.name = ko.observable(name);
	this.imgSrc = ko.observable(imgSrc);
	this.imgAttribution = ko.observable(imgAttribution);
	this.nicknames = ko.observableArray(nicknames);
	
	this.level = ko.computed(function() {
		return this.clickCount() >= 10 ? 'Infant' : 'Newborn';
    }, this);

}

var ViewModel = function() {
	var self = this;
	
	this.catList = ko.observableArray([]);
	
	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});
	
	this.currentCat = ko.observable(this.catList()[0]);
	
	this.incrementCounter = function(){
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	};
	
	this.setCat = function(clickedCat){
		self.currentCat(clickedCat);
	};
};

ko.applyBindings(new ViewModel());