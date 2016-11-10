/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ZH (Chinese, 中文 (Zhōngwén), 汉语, 漢語)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "<b class='red'>必选字段</b>",
		remote: "<b class='red'>请修正该字段</b>",
		email: "<b class='red'>请输入正确格式的电子邮件</b>",
		url: "<b class='red'>请输入合法的网址</b>",
		date: "请输入合法的日期",
		dateISO: "请输入合法的日期 (ISO).",
		number: "<b class='red'>请输入合法的数字</b>",
		digits: "只能输入整数",
		creditcard: "请输入合法的信用卡号",
		equalTo: "<b class='red'>请再次输入相同的值</b>",
		accept: "请输入拥有合法后缀名的字符串",
		maxlength: $.validator.format("<b class='red'>输入长度最多是 {0} 的字符</b>"),
		minlength: $.validator.format("<b class='red'>输入长度最少是 {0} 的字符</b>"),
		rangelength: $.validator.format("<b class='red'>输入长度介于 {0} 和 {1}的字符</b>"),
		range: $.validator.format("<b class='red'>请输入一个介于 {0} 和 {1} 之间的值</b>"),
		max: $.validator.format("<b class='red'>请输入一个最大为 {0} 的值</b>"),
		min: $.validator.format("<b class='red'>请输入一个最小为 {0} 的值</b>")
	});
}(jQuery));