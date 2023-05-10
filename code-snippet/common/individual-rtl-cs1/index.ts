

import { ListView } from '@syncfusion/ej2-lists';
import { data } from './datasource.ts';

let rtlListObj: ListView = new ListView({
    dataSource: data,
    enableRtl: true,
    headerTitle: 'کاریں',
    showHeader: true,
    height: '350px'
});
rtlListObj.appendTo('#listview');


