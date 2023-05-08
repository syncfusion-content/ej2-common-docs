

import { enableRtl } from '@syncfusion/ej2-base';
import { ListView } from '@syncfusion/ej2-lists';
import { data } from './datasource.ts';
// Enables Right to left alignment for all controls
enableRtl(true);
let rtlListObj: ListView = new ListView({
    dataSource: data,
    headerTitle: 'کاریں',
    showHeader: true,
    height: '350px'
    });
rtlListObj.appendTo('#listview');


