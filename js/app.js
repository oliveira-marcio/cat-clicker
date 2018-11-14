$(function() {
	const CLICKS_LABEL = "Number of clicks";

	const model = {
		displayAdmin: false,
		currentCat: null,
		cats: [
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
		]
	};

	const octopus = {
		getAllCats: () => model.cats,
		
		catClick: () => {
			if(!model.currentCat) return;
			model.currentCat.counter++;
			catView.render();
		},
		
		setCurrentCat: (name) => {
			model.currentCat = model.cats.find(cat => cat.name === name);
			catView.render();
			octopus.setDisplayAdmin(false);
		},
		
		getCurrentCat: () => model.currentCat,
		
		setDisplayAdmin: (value) => {
			model.displayAdmin = value;
			adminView.render();
		},
		
		getDisplayAdmin: () => model.displayAdmin,
		
		editCat: (name, image, counter) => {
			model.currentCat.name = name;
			model.currentCat.image = image;
			model.currentCat.counter = counter;
			selectView.init();
			catView.init();
			octopus.setDisplayAdmin(false);
		},
		
		init: () => {
			selectView.init();
			catView.init();
			adminView.init();
		}
	};

	const selectView = {
		init: function() {
			select = $("select");
			select.empty();
			select.append("<option value=''>(Select a cat)</option>");
			select.change(function() {
				octopus.setCurrentCat($(this).val());
			});
			this.render(octopus.getAllCats());
		},
		
		render: (cats) => {
			cats.map(cat => {
				const option = $("<option></option>");
				option.text(cat.name);
				option.attr("value", cat.name);
				$("select").append(option);
			});
			
			const currentCat = octopus.getCurrentCat();
			if(currentCat){
				$("select").val(currentCat.name);
			}
		}
	};
	
	const catView = {
		init: function() {
			$("#cat").off("click");
			$("#cat").click(() => octopus.catClick());
			const currentCat = octopus.getCurrentCat();
			if(currentCat){
				this.render();
			}
		},
		
		render: () => {
			$("#cat").empty();

			const currentCat = octopus.getCurrentCat();
			if(!currentCat) return;
			
			const name = $("<h2></h2>");
			const image = $("<img>");
			const counter = $("<h3></h3>");

			name.text(currentCat.name);
			image.attr({
					"src" : "img/" + currentCat.image,
					"alt" : currentCat.name
				});
			counter.text(`${CLICKS_LABEL}: ${currentCat.counter}`);
			$("#cat").append(name, image, counter);
		}
	}
	
	const adminView = {
		init: function() {
			this.button = $("button");
			this.button.hide();
			this.button.click(() => octopus.setDisplayAdmin(!octopus.getDisplayAdmin()));
			
			this.admin = $("#admin");
			this.admin.empty();
		}, 
		
		render: function() {
			const currentCat = octopus.getCurrentCat();
			if(currentCat){
				this.button.show();
			} else {
				this.button.hide();
			}
			
			if(octopus.getDisplayAdmin()){
				this.button.text("Cancel");
				const adminSection = $("#admin");
				const form = $("<form method='POST'></form>");
				form.submit((e) => {
					const {name, image, counter} = e.target;
					octopus.editCat(name.value, image.value, counter.value);
					e.preventDefault();
				});
				
				adminSection.append(form);
				
				form.append(`<p>Name: <input name='name' type='text' value ='${currentCat.name}'></p>`);
				form.append(`<p>Image: <input name='image' type='text' value ='${currentCat.image}'></p>`);
				form.append(`<p>Clicks: <input name='counter' type='text' value ='${currentCat.counter}'></p>`);
				form.append("<input type='submit' value='Edit'>");
				
				const counter = $("<h3></h3>");
		
			} else {
				this.button.text("Admin");
				this.admin.empty();
			}
		}, 
	}
	
	octopus.init();
});