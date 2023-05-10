// Enables Right to left alignment for all controls
ej.base.enableRtl(true);

var rtlListObj = new ej.lists.ListView({
    dataSource: data,
    headerTitle: 'کاریں',
    showHeader: true,
    height: '350px'
    });
rtlListObj.appendTo('#listview');

