var arts = ["Artwork", "Abstract", "Modern Painting", "Ceramics", "Animation Art", "Oil Painting"];

var rtlListObj = new ej.lists.ListView({
    dataSource: arts,
    enableRtl: true,
    headerTitle: 'Painting types',
    showHeader: true,
    height: '280px'
    });
rtlListObj.appendTo('#listview');

var menuObj = new ej.navigations.Menu({ items: menuItems }, '#menu');