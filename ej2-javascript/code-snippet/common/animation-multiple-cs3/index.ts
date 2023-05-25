

import {Animation} from '@syncfusion/ej2-base';

let animation: Animation = new Animation({ delay: 2000, duration: 5000 });
animation.animate('#element1', { name: 'FadeOut' });
animation.animate('#element2', { name: 'ZoomOut' });


