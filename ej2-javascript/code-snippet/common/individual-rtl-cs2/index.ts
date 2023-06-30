

import { ListView } from '@syncfusion/ej2-lists';
import { menuItems } from './datasource.ts';

let arts: String[] = ["Artwork", "Abstract", "Modern Painting", "Ceramics", "Animation Art", "Oil Painting"];

let rtlListObj: ListView = new ListView({
    dataSource: arts,
    enableRtl: true,
    headerTitle: 'Painting types',
    showHeader: true,
    height: '280px'
    });
rtlListObj.appendTo('#listview');

let menuObj: Menu = new Menu({ items: menuItems }, '#menu');
