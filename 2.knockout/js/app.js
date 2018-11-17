const CLICKS_LABEL = "Number of clicks: ";
const IMAGE_PATH = "../img/";

const initialCats = [
	{
		name: "Márcio",
		image: "cat1.jpg",
		counter: 0
	},
	{
		name: "Lucas",
		image: "cat2.jpg",
		counter: 0
	},
	{
		name: "Pedro",
		image: "cat3.jpg",
		counter: 0
	},
	{
		name: "Vanele",
		image: "cat4.jpg",
		counter: 0
	},
];

var Cat = function(data){
	var {name, image, counter} = data;
	this.name = ko.observable(name);
	this.image = ko.observable(image);
	this.imageFullPath = ko.computed(function() {
		return IMAGE_PATH + this.image();
		}, this);

	this.counter = ko.observable(counter);
	this.counterLabel = ko.computed(function() {
		return CLICKS_LABEL + this.counter();
		}, this);
}

var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push(new Cat(catItem));
	});

	this.currentCat = ko.observable();
	this.catClick = function(){
		self.currentCat().counter(self.currentCat().counter() + 1);
	};

	this.displayAdmin = ko.observable(false);
	this.formCat = ko.observable();

	this.toggleDisplayAdmin = function(){
		self.displayAdmin(!self.displayAdmin());
		self.formCat(new Cat({
			name: self.currentCat().name(),
			image: self.currentCat().image(),
			counter: Number(self.currentCat().counter())
		}));
	};

	this.editCat = function(){
		self.currentCat().name(self.formCat().name());
		self.currentCat().image(self.formCat().image());
		self.currentCat().counter(Number(self.formCat().counter()));
		self.toggleDisplayAdmin();
	};

	this.catChanged = function(){
		self.displayAdmin(false);
	};
};

ko.applyBindings(new ViewModel());
