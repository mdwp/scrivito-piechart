import * as Scrivito from 'scrivito';

Scrivito.provideEditingConfig('PieChartWidget', {
    title: 'Pie Chart',

    attributes: {
        items: {
            title: 'Piechart Values',
        },
        fillColor: {
            title: 'Fill color',
            description: 'Please enter a hex value e.g. #dfd343'
        }
    },
    properties: [
        'animatePiechart',
        'innerRadius',
        'outerRadius',
        'fillColor',
        'items',
    ],
    initialContent: {
        animatePichart: 'Yes',
        fillColor: '#3367d6',
        outerRadius: '150',
        innerRadius: '50'
    }
});