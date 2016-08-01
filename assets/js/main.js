var sticky = new Waypoint.Sticky({
  element: $('h3')[0],
  offset: 20,
  handler: function(direction){
    $(this.element).addClass('stuck').siblings().sticky.destroy();
  }
});
// sticky();
// 
// $('.meta-contact').waypoint.sticky(function(direction) {
//   $(this.element).addClass('fixed-element-top');
// }, {offset: '0'});
// $('h3').waypoint(function(direction) {
//   $(this.element).addClass('fixed-element-next').siblings().removeClass('fixed-element-next');
// }, {offset: '0'});