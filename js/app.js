/* your code should go here */


// You can modify this object, add functions that you need
var MailModel = {
  /**
   * Initialises the model with the "database" of filter rules
   * and messages. This function is already implemented.
   */
   init : function(){
     this.rules = rules;
     this.messages = msgs;
   },
	getSize : function(){
		return this.messages.length;
	},
	getMessages : function(){
		return this.messages;
	},
	getMessage : function(i){
		return this.messages[i];
	},
	isSpam : function(message){
		var res = false;
		
		for(var i=0; i < this.rules.length && !res ; i++){
			
			if(message.contains(this.rules[i]))
			  res = true;
		}
		return res;
	},
   /**
    * Filters out messages in the "database" that match the spam rules.
    * @return an array of messages, excluding those that match the filter rules.
    */
    filter : function(){
		var res = [];
		for(var i=0; i<MailModel.getSize(); i++){
			var message = MailModel.getMessage(i);
			if(!this.isSpam(message))
				res.push(message);
		}
		return res;
    }  
};

// Example of usage:
// MailModel.init()
// MailModel.filter() 
//  -> ["carlo@gmail.com", "trentose2@googlegroups.com"]


// We suggest to use js patters. 
// you can add here your views and controllers if you decide to do so.


var MailView = {
	init : function(){
		this.list = $(".result");
		this.template = "<li>?message?</li>";
		this.clear();
	},
	clear : function(){
		this.list.empty();
	},
	show : function(messages){
		for(var i=0; i < messages.length; i++){
			var html = this.template.replace("?message?", messages[i]);
			this.list.append(html);
		}
	}
};

var MailController = {
	init : function(){
		MailModel.init();
		MailView.init();
		MailView.show(MailModel.getMessages()); //show all messages
		$(".btn-filter").on("click", function(){ //filter messages
			var messages = MailModel.filter();
			MailView.clear();
			MailView.show(messages);
		});
	}
};



$(document).ready(function(){
	MailController.init();
});