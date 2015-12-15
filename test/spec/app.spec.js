describe("MailModel", function() {
	it("should store all messages", function(){
		MailModel.init();
		var allMessages = MailModel.getMessages();
		expect(allMessages).toEqual(["news@spam.com", "carlo@gmail.com", "jessy@compratutto.it", "trentose2@googlegroups.com"]);
	});
	it("should remove spam messages", function(){
		MailModel.init();
		var messages = MailModel.filter();
		expect(messages).toEqual(["carlo@gmail.com", "trentose2@googlegroups.com"]);
	});
});
