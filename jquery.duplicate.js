(function($) {
	
	$.fn.duplicate = function(options) {
		
		var settings = $.extend({
			min_items: 1,
			max_items: 10
		}, options);
		
		/* Create items container */
		var items_container = '<div class="items"></div>';
		/* Create duplicate button */
		var add_btn = '<a class="add" href="#">add</a>';
		/* Add the items container and duplicate button */
		this.append(items_container).append(add_btn);
		/* Defines the items container */
		var items = this.children('.items');

		/* Define the template item */
		var template = this.children('.item:first');
		
		/* Create remove button */
		var delete_btn = '<a class="remove" href="#">remove</a>';
		/* Creates a clean clone */
		var clone = template.clone().append(delete_btn);

		/* Removes the original template */
		template.attr('id', 'template').css('display', 'none');		
		/* Add a clean clone to the items container */
		addItem();
		
		/* Count the current items */
		function count_current() {
			var count = items.children('.item').length;

			return count;
		}
		/* Append another item */
		function addItem() {
			if(count_current() < settings.max_items) {
				/* On ly add the item if the total items is less than the maximum */
				clone.clone().appendTo(items);
			}
			event.preventDefault();
			return false;
		}
		/* Remove current item */
		function removeCurrentItem() {
			if(count_current() > settings.min_items) {
				/* Only delete the item if the total items is beyond the minimum */
				$(this).parent('.item').fadeOut().remove();
			}

			event.preventDefault();
			return false;
		}

		/* Button/click actions */		
		this.find('a.add').click(event, addItem);		
		this.on('click', 'a.remove', removeCurrentItem);

		return this;
	};

}(jQuery));